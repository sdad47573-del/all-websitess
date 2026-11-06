import { describe, expect, test } from "bun:test";
import { mkdtempSync, readFileSync, rmSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";
import {
	authenticate,
	can,
	createUser,
	deleteUser,
	ensureAdmin,
	ensureDevUser,
	listUsers,
	readSession,
	signSession,
	updateUser,
} from "./auth";

async function withAuth(run: (dir: string) => Promise<void> | void) {
	const dir = mkdtempSync(join(tmpdir(), "cms-auth-"));
	try {
		await run(dir);
	} finally {
		rmSync(dir, { recursive: true, force: true });
	}
}

const PASSWORD = "clave-larga-1";

describe("usuarios y contraseñas", () => {
	test("crea el administrador inicial sin guardar la contraseña en claro", async () => {
		await withAuth(async (dir) => {
			const result = await ensureAdmin(dir, { password: PASSWORD });
			expect(result.created).toBe(true);
			expect(result.user?.role).toBe("admin");
			expect(result.user?.capabilities).toContain("manageUsers");

			const raw = readFileSync(join(dir, "users.json"), "utf8");
			expect(raw).not.toContain(PASSWORD);
			expect(raw).toContain("\"passwordHash\"");

			expect(await authenticate("admin", PASSWORD, dir)).not.toBeNull();
			expect(await authenticate("admin", "otra-clave", dir)).toBeNull();
			expect(await authenticate("nadie", PASSWORD, dir)).toBeNull();

			expect((await ensureAdmin(dir, { password: PASSWORD })).created).toBe(false);
			expect(listUsers(dir)).toHaveLength(1);
		});
	});

	test("valida usuario, rol y contraseña, y no admite duplicados", async () => {
		await withAuth(async (dir) => {
			await ensureAdmin(dir, { password: PASSWORD });

			await expect(
				createUser({ username: "M", password: PASSWORD, role: "editor" }, dir),
			).rejects.toThrow(/2–32/);
			await expect(
				createUser({ username: "ana", password: "corta", role: "editor" }, dir),
			).rejects.toThrow(/al menos/);
			await expect(
				createUser({ username: "ana", password: PASSWORD, role: "super" as never }, dir),
			).rejects.toThrow(/rol/);

			await createUser({ username: "ana", password: PASSWORD, role: "editor" }, dir);
			await expect(
				createUser({ username: "ANA", password: PASSWORD, role: "editor" }, dir),
			).rejects.toThrow(/existe/);
		});
	});

	test("cambiar la contraseña invalida las sesiones abiertas de ese usuario", async () => {
		await withAuth(async (dir) => {
			await ensureAdmin(dir, { password: PASSWORD });
			const admin = (await authenticate("admin", PASSWORD, dir))!;
			const token = signSession(admin, dir);

			expect(readSession(token, dir)?.id).toBe(admin.id);
			await updateUser(admin.id, { password: "nueva-clave-2" }, dir);

			expect(readSession(token, dir)).toBeNull();
			expect(await authenticate("admin", "nueva-clave-2", dir)).not.toBeNull();
		});
	});

	test("no deja sin administrador al panel", async () => {
		await withAuth(async (dir) => {
			await ensureAdmin(dir, { password: PASSWORD });
			const [admin] = listUsers(dir);

			await expect(updateUser(admin.id, { role: "editor" }, dir)).rejects.toThrow(/último/);
			expect(() => deleteUser(admin.id, dir)).toThrow(/último/);

			const second = await createUser(
				{ username: "jefa", password: PASSWORD, role: "admin" },
				dir,
			);
			await updateUser(admin.id, { role: "editor" }, dir);
			expect(listUsers(dir).find((user) => user.id === admin.id)?.role).toBe("editor");

			// Ahora el único admin es «jefa»: tampoco se puede borrar.
			expect(() => deleteUser(second.id, dir)).toThrow(/último/);

			await updateUser(admin.id, { role: "admin" }, dir);
			deleteUser(second.id, dir);
			expect(listUsers(dir)).toHaveLength(1);
		});
	});
});

describe("usuario de desarrollo", () => {
	test("se crea una sola vez, es admin y no tiene contraseña usable", async () => {
		await withAuth(async (dir) => {
			const user = await ensureDevUser(dir);
			expect(user.username).toBe("dev");
			expect(user.role).toBe("admin");
			expect(can(user.role, "editCode")).toBe(true);

			expect((await ensureDevUser(dir)).id).toBe(user.id);
			expect(listUsers(dir)).toHaveLength(1);

			// La contraseña es aleatoria y no se guarda: el formulario no sirve.
			expect(await authenticate("dev", "dev", dir)).toBeNull();
			expect(await authenticate("dev", "", dir)).toBeNull();
		});
	});

	test("no se apropia de un usuario «dev» creado a mano", async () => {
		await withAuth(async (dir) => {
			await createUser({ username: "dev", password: PASSWORD, role: "editor" }, dir);
			await expect(ensureDevUser(dir)).rejects.toThrow(/ya existe/i);
		});
	});
});

describe("sesiones", () => {
	test("firma y verifica, y rechaza un token manipulado o caducado", async () => {
		await withAuth(async (dir) => {
			await ensureAdmin(dir, { password: PASSWORD });
			const admin = (await authenticate("admin", PASSWORD, dir))!;

			const token = signSession(admin, dir);
			expect(readSession(token, dir)?.username).toBe("admin");
			expect(readSession(`${token}x`, dir)).toBeNull();
			expect(readSession("basura", dir)).toBeNull();
			expect(readSession(null, dir)).toBeNull();

			const expired = signSession(admin, dir, -10);
			expect(readSession(expired, dir)).toBeNull();

			// Un token válido dentro de 6 días sigue vivo; a los 8, no.
			expect(readSession(token, dir, Date.now() + 6 * 86400 * 1000)).not.toBeNull();
			expect(readSession(token, dir, Date.now() + 8 * 86400 * 1000)).toBeNull();
		});
	});

	test("un usuario borrado pierde la sesión aunque el token siga firmado", async () => {
		await withAuth(async (dir) => {
			await ensureAdmin(dir, { password: PASSWORD });
			const second = await createUser(
				{ username: "ana", password: PASSWORD, role: "editor" },
				dir,
			);
			const ana = (await authenticate("ana", PASSWORD, dir))!;
			const token = signSession(ana, dir);
			expect(readSession(token, dir)?.id).toBe(second.id);

			deleteUser(second.id, dir);
			expect(readSession(token, dir)).toBeNull();
		});
	});
});

describe("permisos", () => {
	test("el editor edita contenido pero no código ni usuarios", () => {
		expect(can("admin", "editCode")).toBe(true);
		expect(can("admin", "manageUsers")).toBe(true);
		expect(can("editor", "read")).toBe(true);
		expect(can("editor", "editContent")).toBe(true);
		expect(can("editor", "editCode")).toBe(false);
		expect(can("editor", "manageUsers")).toBe(false);
	});
});

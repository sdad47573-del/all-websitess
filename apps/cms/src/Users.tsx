import { createResource, createSignal, For, Show } from "solid-js";
import { createUser, deleteUser, fetchUsers, updateUser } from "./api";
import Shell from "./Shell";
import { type AuthUser, type Role, ROLE_LABELS, ROLES, hasCapability } from "./types";

const formatDate = (ms: number) => new Date(ms).toISOString().slice(0, 10);

export default function Users(props: { user: AuthUser }) {
	const [users, { refetch }] = createResource(fetchUsers);
	const [username, setUsername] = createSignal("");
	const [name, setName] = createSignal("");
	const [role, setRole] = createSignal<Role>("editor");
	const [password, setPassword] = createSignal("");
	const [busy, setBusy] = createSignal(false);
	const [flash, setFlash] = createSignal<{ kind: "ok" | "error"; text: string } | null>(null);

	const allowed = () => hasCapability(props.user, "manageUsers");

	const run = async (task: () => Promise<string>) => {
		setBusy(true);
		setFlash(null);
		try {
			const text = await task();
			setFlash({ kind: "ok", text });
			await refetch();
		} catch (error) {
			setFlash({ kind: "error", text: error instanceof Error ? error.message : String(error) });
		} finally {
			setBusy(false);
		}
	};

	const submit = (event: SubmitEvent) => {
		event.preventDefault();
		if (!allowed()) return;

		void run(async () => {
			const created = await createUser({
				username: username(),
				name: name() || undefined,
				password: password(),
				role: role(),
			});
			setUsername("");
			setName("");
			setPassword("");
			setRole("editor");
			return `Usuario «${created.username}» creado.`;
		});
	};

	const changeRole = (id: string, next: Role, current: Role) => {
		if (next === current) return;
		void run(async () => {
			await updateUser(id, { role: next });
			return `Rol actualizado a ${ROLE_LABELS[next].toLowerCase()}.`;
		});
	};

	const resetPassword = (id: string, who: string) => {
		const next = window.prompt(`Nueva contraseña para ${who} (mínimo 8 caracteres):`);
		if (!next) return;

		void run(async () => {
			await updateUser(id, { password: next });
			return `Contraseña de ${who} actualizada. Sus sesiones abiertas se han cerrado.`;
		});
	};

	const remove = (id: string, who: string) => {
		if (!window.confirm(`¿Borrar el usuario ${who}?`)) return;

		void run(async () => {
			await deleteUser(id);
			return `Usuario ${who} borrado.`;
		});
	};

	return (
		<Shell title="Usuarios" user={props.user}>
			<p class="back">
				<a href="/">← Todas las webs</a>
			</p>

			<section class="head">
				<h1>Usuarios</h1>
				<p>Quién puede entrar al panel y con qué permisos.</p>
			</section>

			<Show when={flash()}>
				{(message) => <p classList={{ flash: true, [message().kind]: true }}>{message().text}</p>}
			</Show>

			<Show
				when={allowed()}
				fallback={
					<div class="panel notice">
						<h2>Solo administradores</h2>
						<p>Tu rol puede editar contenido, pero no gestionar usuarios.</p>
					</div>
				}
			>
				<section class="panel users-layout">
					<h2>Nuevo usuario</h2>
					<form class="users-form" onSubmit={submit}>
						<label class="field">
							<span class="name">Usuario</span>
							<input
								value={username()}
								autocomplete="off"
								required
								onInput={(event) => setUsername(event.currentTarget.value)}
							/>
						</label>
						<label class="field">
							<span class="name">Nombre</span>
							<input
								value={name()}
								autocomplete="off"
								onInput={(event) => setName(event.currentTarget.value)}
							/>
						</label>
						<label class="field">
							<span class="name">Rol</span>
							<select
								class="role-select"
								value={role()}
								onChange={(event) => setRole(event.currentTarget.value as Role)}
							>
								<For each={ROLES}>
									{(item) => <option value={item}>{ROLE_LABELS[item]}</option>}
								</For>
							</select>
						</label>
						<label class="field">
							<span class="name">Contraseña</span>
							<input
								type="password"
								value={password()}
								autocomplete="new-password"
								required
								onInput={(event) => setPassword(event.currentTarget.value)}
							/>
						</label>
						<button type="submit" disabled={busy()}>
							{busy() ? "Creando…" : "Crear usuario"}
						</button>
					</form>
					<p class="note">Mínimo 8 caracteres. Se guarda hasheada (argon2id), nunca en claro.</p>
				</section>

				<section class="panel users-layout">
					<h2>{users()?.length ?? 0} usuario(s)</h2>

					<Show when={users.loading}>
						<p class="count">Cargando…</p>
					</Show>
					<Show when={users.error}>
						<p class="flash error">{String(users.error)}</p>
					</Show>

					<Show when={users()}>
						{(items) => (
							<div class="table-wrap">
								<table class="users-table">
									<thead>
										<tr>
											<th>Usuario</th>
											<th>Nombre</th>
											<th>Rol</th>
											<th>Creado</th>
											<th />
										</tr>
									</thead>
									<tbody>
										<For each={items()}>
											{(item) => (
												<tr>
													<td>
														<strong>{item.username}</strong>
														<Show when={item.id === props.user.id}>
															<span class="chip ok"> tú</span>
														</Show>
													</td>
													<td>{item.name}</td>
													<td>
														<select
															class="role-select"
															value={item.role}
															disabled={busy() || item.id === props.user.id}
															onChange={(event) =>
																changeRole(
																	item.id,
																	event.currentTarget.value as Role,
																	item.role,
																)
															}
														>
															<For each={ROLES}>
																{(option) => (
																	<option value={option}>{ROLE_LABELS[option]}</option>
																)}
															</For>
														</select>
													</td>
													<td class="mono dim">{formatDate(item.createdAt)}</td>
													<td>
														<button
															type="button"
															class="link-button"
															disabled={busy()}
															onClick={() => resetPassword(item.id, item.username)}
														>
															Contraseña
														</button>
														<button
															type="button"
															class="link-button danger"
															disabled={busy() || item.id === props.user.id}
															title={
																item.id === props.user.id
																	? "No puedes borrar tu propio usuario"
																	: "Borrar usuario"
															}
															onClick={() => remove(item.id, item.username)}
														>
															Borrar
														</button>
													</td>
												</tr>
											)}
										</For>
									</tbody>
								</table>
							</div>
						)}
					</Show>
				</section>
			</Show>
		</Shell>
	);
}

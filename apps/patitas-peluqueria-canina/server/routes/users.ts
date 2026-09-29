import { Hono } from "hono";
import type { Env } from "../context";
import { currentUser, requireUser } from "@app-server";

export const userRoutes = new Hono<Env>();

userRoutes.use("*", requireUser);

/** El usuario de la sesión. Equivale a `users.currentUser` en Convex. */
userRoutes.get("/me", (c) => c.json({ user: currentUser(c) }));

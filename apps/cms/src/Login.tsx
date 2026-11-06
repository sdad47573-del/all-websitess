import { createSignal, Show } from "solid-js";
import { loginUser } from "./api";

export default function Login(props: { onLogged: () => void }) {
	const [username, setUsername] = createSignal("");
	const [password, setPassword] = createSignal("");
	const [busy, setBusy] = createSignal(false);
	const [error, setError] = createSignal<string | null>(null);

	const submit = async (event: SubmitEvent) => {
		event.preventDefault();
		if (busy()) return;

		setBusy(true);
		setError(null);
		try {
			await loginUser(username(), password());
			props.onLogged();
		} catch (failure) {
			setError(failure instanceof Error ? failure.message : String(failure));
		} finally {
			setBusy(false);
		}
	};

	return (
		<div class="login-wrap">
			<form class="login-card" onSubmit={submit}>
				<div class="login-brand">
					<span class="mark">SD</span>
					<span>CMS de webs</span>
				</div>
				<h1>Entrar</h1>
				<p class="note">Panel local. Necesitas un usuario del CMS.</p>

				<Show when={error()}>{(message) => <p class="flash error">{message()}</p>}</Show>

				<label class="field">
					<span class="name">Usuario</span>
					<input
						type="text"
						value={username()}
						autocomplete="username"
						autofocus
						required
						onInput={(event) => setUsername(event.currentTarget.value)}
					/>
				</label>
				<label class="field">
					<span class="name">Contraseña</span>
					<input
						type="password"
						value={password()}
						autocomplete="current-password"
						required
						onInput={(event) => setPassword(event.currentTarget.value)}
					/>
				</label>

				<button type="submit" disabled={busy()}>
					{busy() ? "Entrando…" : "Entrar"}
				</button>
			</form>
		</div>
	);
}

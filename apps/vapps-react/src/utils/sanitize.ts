export function sanitizeDeep<T>(input: T): T {
	if (typeof input === 'string') {
		return (input.trim() as unknown) as T;
	}
	if (Array.isArray(input)) {
		return (input.map((v) => sanitizeDeep(v)) as unknown) as T;
	}
	if (input && typeof input === 'object') {
		const obj = input as Record<string, unknown>;
		const entries = Object.entries(obj).map(([k, v]) => [k, sanitizeDeep(v)]);
		return (Object.fromEntries(entries) as unknown) as T;
	}
	return input;
}

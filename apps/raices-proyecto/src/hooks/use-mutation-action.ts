import { toast } from "sonner";

/**
 * Wraps a Convex mutation so a thrown error can never fail silently.
 *
 * Every coop mutation rejects on purpose with a message meant for the member
 * ("Tu plan permite 1 cambio por semana", "No quedan plazas"). Called bare,
 * those rejections became unhandled promises: the button did nothing and the
 * member got no explanation at all. This makes both outcomes visible.
 */
export function useMutationAction() {
  return async function run<TArgs>(
    label: string,
    fn: () => Promise<TArgs>,
    options?: { success?: string },
  ): Promise<TArgs | undefined> {
    try {
      const result = await fn();
      if (options?.success) toast.success(options.success);
      return result;
    } catch (err) {
      const message =
        err instanceof Error ? err.message : "Algo ha ido mal. Intentalo otra vez.";
      // Convex prefixes some messages with the function name.
      const cleaned = message.replace(/^Uncaught \w+: /, "");
      toast.error(`${label}: ${cleaned}`);
      return undefined;
    }
  };
}

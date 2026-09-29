import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { api } from "@/convex/_generated/api";
import { useAuth } from "@/hooks/use-auth";
import {
  DEMO_AGENT_PASSCODE,
  isAgentEmail,
  isDemoAgentPasscode,
} from "@/lib/support";
import { KeyRound, Loader2, ShieldAlert } from "lucide-react";
import { useEffect, useState } from "react";
import { toast } from "sonner";
import { useMutation } from "convex/react";
import { Link, Navigate, useLocation, useSearchParams } from "react-router";

/**
 * Wraps agent-only routes. Signed-out visitors keep the normal auth bounce
 * (with `returnTo`), while a signed-in customer gets a clear explanation plus
 * a demo unlock so the console is still reachable during evaluation.
 */
export function RequireAgent({ children }: { children: React.ReactNode }) {
  const { isLoading, isAuthenticated, user } = useAuth();
  const location = useLocation();
  const [searchParams] = useSearchParams();
  const claimAgentRole = useMutation(api.tickets.claimAgentRole);
  const codeFromUrl = searchParams.get("code");
  const [passcode, setPasscode] = useState(codeFromUrl ?? "");
  const [unlocking, setUnlocking] = useState(false);

  const isAgent = isAgentEmail(user?.email) || user?.role === "agent";
  // A valid ?code= in the URL unlocks the console on arrival.
  const autoUnlocking =
    isAuthenticated && !isAgent && isDemoAgentPasscode(codeFromUrl);
  const busy = unlocking || autoUnlocking;

  useEffect(() => {
    if (!autoUnlocking) return;
    claimAgentRole({ passcode: codeFromUrl as string })
      .then(() => toast.success("Console unlocked"))
      .catch(() => undefined);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [autoUnlocking]);

  if (isLoading || (isAuthenticated && busy && !isAgent)) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-background">
        <Loader2 className="size-6 animate-spin text-muted-foreground" />
      </main>
    );
  }

  if (!isAuthenticated) {
    const returnTo = `${location.pathname}${location.search}`;
    return (
      <Navigate to={`/auth?returnTo=${encodeURIComponent(returnTo)}`} replace />
    );
  }

  if (!isAgent) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-background p-6">
        <Card className="w-full max-w-md">
          <CardHeader>
            <div className="mb-4 flex size-12 items-center justify-center rounded-full bg-accent text-accent-foreground">
              <ShieldAlert className="size-5" />
            </div>
            <CardTitle>Agent access only</CardTitle>
            <CardDescription>
              The triage console is for support staff. Your account is signed in
              as a customer — your own tickets live in the portal.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="rounded-lg border border-dashed border-primary/50 bg-accent/40 p-3">
              <p className="flex items-center gap-1.5 text-xs font-medium">
                <KeyRound className="size-3.5" />
                Reviewing the demo?
              </p>
              <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
                Unlock the console with the staff code{" "}
                <span className="ref-mono text-foreground/80">
                  {DEMO_AGENT_PASSCODE}
                </span>
                . Staff accounts on{" "}
                <span className="ref-mono text-foreground/80">
                  @relaydesk.app
                </span>{" "}
                get access automatically.
              </p>
              <div className="mt-2.5 flex gap-2">
                <Input
                  value={passcode}
                  onChange={(event) => setPasscode(event.target.value)}
                  placeholder="Staff access code"
                  aria-label="Staff access code"
                  className="h-9"
                />
                <Button
                  className="h-9"
                  disabled={busy || passcode.trim().length < 3}
                  onClick={() => {
                    setUnlocking(true);
                    claimAgentRole({ passcode })
                      .then(() => toast.success("Console unlocked"))
                      .catch((error) =>
                        toast.error(
                          error instanceof Error
                            ? error.message
                            : "Could not unlock the console.",
                        ),
                      )
                      .finally(() => setUnlocking(false));
                  }}
                >
                  {busy && <Loader2 className="size-4 animate-spin" />}
                  Unlock
                </Button>
              </div>
            </div>
            <p className="text-sm text-muted-foreground">
              Everything you file as a customer stays private to your account.
            </p>
          </CardContent>
          <CardFooter className="flex-col gap-2">
            <Button asChild className="w-full">
              <Link to="/portal">Go to my tickets</Link>
            </Button>
            <Button asChild variant="ghost" className="w-full">
              <Link to="/">Back to home</Link>
            </Button>
          </CardFooter>
        </Card>
      </main>
    );
  }

  return <>{children}</>;
}

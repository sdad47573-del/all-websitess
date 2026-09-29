import { useAuth } from "@/hooks/use-auth";
import { isAgentEmail } from "@/lib/support";
import { Loader2 } from "lucide-react";
import { Navigate } from "react-router";

/**
 * `/dashboard` is the generic post-sign-in destination. Relay has two distinct
 * experiences, so send people to the one their role belongs in.
 */
export default function Dashboard() {
  const { isLoading, user } = useAuth();

  if (isLoading) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-background">
        <Loader2 className="size-6 animate-spin text-muted-foreground" />
      </main>
    );
  }

  const isAgent = isAgentEmail(user?.email) || user?.role === "agent";
  return <Navigate to={isAgent ? "/agent" : "/portal"} replace />;
}

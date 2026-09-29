import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { api } from "@/convex/_generated/api";
import type { Id } from "@/convex/_generated/dataModel";
import { cn } from "@/lib/utils";
import { timeAgo } from "@/lib/support";
import {
  AtSign,
  Bell,
  CheckCheck,
  MessageCircle,
  UserPlus,
} from "lucide-react";
import { useNavigate } from "react-router";
import { useMutation, useQuery } from "convex/react";

const KIND_ICON = {
  assigned: UserPlus,
  customer_reply: MessageCircle,
  agent_reply: AtSign,
  mention: AtSign,
} as const;

/** Bell + feed. Sits in the app shell for anyone signed in. */
export function NotificationBell() {
  const feed = useQuery(api.notifications.list, {});
  const markRead = useMutation(api.notifications.markRead);
  const navigate = useNavigate();
  const unread = feed?.unreadCount ?? 0;

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          type="button"
          variant="ghost"
          size="icon"
          className="relative"
          aria-label={unread > 0 ? `${unread} unread notifications` : "Notifications"}
        >
          <Bell className="size-4" />
          {unread > 0 && (
            <span className="absolute -right-0.5 -top-0.5 flex min-w-4 items-center justify-center rounded-full bg-rose-500 px-1 text-[0.6rem] font-semibold text-white">
              {unread > 9 ? "9+" : unread}
            </span>
          )}
        </Button>
      </PopoverTrigger>
      <PopoverContent align="end" className="w-80 p-0">
        <div className="flex items-center justify-between border-b border-border px-3 py-2">
          <span className="text-sm font-semibold">Notifications</span>
          {unread > 0 && (
            <Button
              variant="ghost"
              size="sm"
              className="h-7 px-2 text-xs"
              onClick={() => void markRead({})}
            >
              <CheckCheck className="size-3.5" />
              Mark all read
            </Button>
          )}
        </div>
        <div className="max-h-80 overflow-y-auto">
          {feed?.items.length === 0 && (
            <p className="px-3 py-8 text-center text-sm text-muted-foreground">
              Nothing yet. You'll hear about assignments and customer replies.
            </p>
          )}
          {feed?.items.map((item) => {
            const Icon = KIND_ICON[item.kind] ?? Bell;
            return (
              <button
                key={item.id}
                type="button"
                onClick={() => {
                  if (!item.read) void markRead({ ids: [item.id] });
                  if (item.ticketId) navigate(`/agent?ticket=${item.ticketId}`);
                }}
                className={cn(
                  "flex w-full items-start gap-2.5 border-b border-border/60 px-3 py-2.5 text-left transition-colors last:border-0 hover:bg-muted",
                  !item.read && "bg-primary/5",
                )}
              >
                <Icon
                  className={cn(
                    "mt-0.5 size-4 shrink-0",
                    item.read ? "text-muted-foreground" : "text-primary-foreground/70",
                  )}
                />
                <span className="min-w-0 flex-1">
                  <span className="flex items-baseline gap-2">
                    <span className="truncate text-sm font-medium">
                      {item.title}
                    </span>
                    <span className="ml-auto shrink-0 text-[0.7rem] text-muted-foreground">
                      {timeAgo(item.createdAt)}
                    </span>
                  </span>
                  {item.body && (
                    <span className="mt-0.5 line-clamp-1 block text-xs text-muted-foreground">
                      {item.body}
                    </span>
                  )}
                </span>
                {!item.read && (
                  <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-primary" />
                )}
              </button>
            );
          })}
        </div>
      </PopoverContent>
    </Popover>
  );
}

/** Watch a ticket without owning it (Zendesk-style follower). */
export function FollowButton({
  ticketId,
  className,
}: {
  ticketId: Id<"tickets">;
  className?: string;
}) {
  const state = useQuery(api.notifications.followers, { ticketId });
  const follow = useMutation(api.notifications.follow);
  const unfollow = useMutation(api.notifications.unfollow);
  const following = state?.following ?? false;

  return (
    <Button
      type="button"
      variant={following ? "secondary" : "outline"}
      size="sm"
      className={className ?? "h-8"}
      onClick={() =>
        void (following
          ? unfollow({ ticketId })
          : follow({ ticketId }))
      }
    >
      <Bell className="size-3.5" />
      {following ? "Following" : "Follow"}
    </Button>
  );
}

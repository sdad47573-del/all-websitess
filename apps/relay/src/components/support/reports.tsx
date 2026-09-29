import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { api } from "@/convex/_generated/api";
import { CATEGORY_LABEL, PRIORITY_LABEL, STATUS_LABEL, toCsv } from "@/lib/support";
import { BarChart3, Download } from "lucide-react";
import { useQuery } from "convex/react";

type QueueRow = {
  reference: string;
  subject: string;
  status: keyof typeof STATUS_LABEL;
  priority: keyof typeof PRIORITY_LABEL;
  category: keyof typeof CATEGORY_LABEL;
  customerName: string;
  assigneeName: string | null;
  tags: string[];
  messageCount: number;
  createdAt: number;
  lastReplyAt: number;
};

function download(filename: string, content: string) {
  const blob = new Blob([content], { type: "text/csv;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = filename;
  link.click();
  // Revoke on the next tick — revoking synchronously can cancel the download.
  setTimeout(() => URL.revokeObjectURL(url), 0);
}

function formatMinutes(minutes: number | null) {
  if (minutes === null) return "—";
  if (minutes < 60) return `${minutes}m`;
  return `${Math.round((minutes / 60) * 10) / 10}h`;
}

/**
 * The Freshdesk "Agent Performance" report plus a CSV export of whatever the
 * queue is currently filtered to.
 */
export function ReportsDialog({
  queue,
  trigger,
}: {
  queue: QueueRow[];
  trigger?: React.ReactNode;
}) {
  const rows = useQuery(api.tickets.agentPerformance);

  const exportQueue = () => {
    const csv = toCsv(
      [
        "reference",
        "subject",
        "status",
        "impact",
        "category",
        "customer",
        "assignee",
        "tags",
        "messages",
        "created",
        "last_reply",
      ],
      queue.map((row) => [
        row.reference,
        row.subject,
        STATUS_LABEL[row.status],
        PRIORITY_LABEL[row.priority],
        CATEGORY_LABEL[row.category],
        row.customerName,
        row.assigneeName ?? "",
        row.tags.join(" "),
        row.messageCount,
        new Date(row.createdAt).toISOString(),
        new Date(row.lastReplyAt).toISOString(),
      ]),
    );
    download(`relay-queue-${new Date().toISOString().slice(0, 10)}.csv`, csv);
  };

  const exportPerformance = () => {
    const csv = toCsv(
      ["agent", "assigned_30d", "open", "resolved", "avg_first_reply_mins", "sla_compliance_pct", "csat", "internal_notes"],
      (rows ?? []).map((row) => [
        row.name,
        row.assigned,
        row.open,
        row.resolved,
        row.avgFirstReplyMins,
        row.slaCompliance,
        row.csat,
        row.internalNotes,
      ]),
    );
    download(`relay-agents-${new Date().toISOString().slice(0, 10)}.csv`, csv);
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        {trigger ?? (
          <Button variant="outline" size="sm" className="h-9">
            <BarChart3 className="size-4" />
            Reports
          </Button>
        )}
      </DialogTrigger>
      <DialogContent className="sm:max-w-3xl">
        <DialogHeader>
          <DialogTitle>Team performance</DialogTitle>
          <DialogDescription>
            Last 30 days. SLA compliance counts first replies that landed inside
            the target for their impact level.
          </DialogDescription>
        </DialogHeader>

        <div className="max-h-[50vh] overflow-auto rounded-lg border border-border">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Agent</TableHead>
                <TableHead className="text-right">Assigned</TableHead>
                <TableHead className="text-right">Open</TableHead>
                <TableHead className="text-right">Resolved</TableHead>
                <TableHead className="text-right">Avg 1st reply</TableHead>
                <TableHead className="text-right">SLA</TableHead>
                <TableHead className="text-right">CSAT</TableHead>
                <TableHead className="text-right">Notes</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {(rows ?? []).map((row) => (
                <TableRow key={row.id}>
                  <TableCell className="font-medium">{row.name}</TableCell>
                  <TableCell className="text-right tabular-nums">
                    {row.assigned}
                  </TableCell>
                  <TableCell className="text-right tabular-nums">
                    {row.open}
                  </TableCell>
                  <TableCell className="text-right tabular-nums">
                    {row.resolved}
                  </TableCell>
                  <TableCell className="text-right tabular-nums">
                    {formatMinutes(row.avgFirstReplyMins)}
                  </TableCell>
                  <TableCell className="text-right tabular-nums">
                    {row.slaCompliance === null ? (
                      "—"
                    ) : (
                      <Badge
                        variant="outline"
                        className={
                          row.slaCompliance >= 90
                            ? "border-emerald-300/80 bg-emerald-50 text-emerald-800"
                            : row.slaCompliance >= 70
                              ? "border-amber-300/80 bg-amber-50 text-amber-900"
                              : "border-rose-300/80 bg-rose-50 text-rose-800"
                        }
                      >
                        {row.slaCompliance}%
                      </Badge>
                    )}
                  </TableCell>
                  <TableCell className="text-right tabular-nums">
                    {row.csat ?? "—"}
                  </TableCell>
                  <TableCell className="text-right tabular-nums">
                    {row.internalNotes}
                  </TableCell>
                </TableRow>
              ))}
              {rows && rows.length === 0 && (
                <TableRow>
                  <TableCell
                    colSpan={8}
                    className="py-8 text-center text-sm text-muted-foreground"
                  >
                    No agent activity in the last 30 days yet.
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </div>

        <div className="flex flex-wrap gap-2">
          <Button variant="outline" size="sm" onClick={exportPerformance}>
            <Download className="size-4" />
            Export team report
          </Button>
          <Button variant="outline" size="sm" onClick={exportQueue}>
            <Download className="size-4" />
            Export {queue.length} filtered ticket{queue.length === 1 ? "" : "s"}
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}

import { Button } from "@/components/ui/button";
import { api } from "@/convex/_generated/api";
import { useMutation, useQuery } from "convex/react";
import { cn } from "@/lib/utils";
import {
  Download,
  FileText,
  Loader2,
  Paperclip,
  X,
} from "lucide-react";
import { useRef, useState } from "react";
import type { Id } from "@/convex/_generated/dataModel";

export type PendingAttachment = {
  storageId: string;
  name: string;
  contentType: string;
  size: number;
};

const MAX_BYTES = 10 * 1024 * 1024;
const MAX_FILES = 5;

export function formatBytes(bytes: number): string {
  if (bytes < 1024) return `${bytes} B`;
  if (bytes < 1024 * 1024) return `${Math.round(bytes / 1024)} KB`;
  return `${Math.round((bytes / (1024 * 1024)) * 10) / 10} MB`;
}

/** Uploads one file to Convex storage and returns its storage id. */
export function useAttachmentUpload() {
  const generateUploadUrl = useMutation(api.tickets.generateUploadUrl);

  return async (file: File): Promise<PendingAttachment> => {
    if (file.size > MAX_BYTES) {
      throw new Error(`${file.name} is larger than 10 MB.`);
    }
    const url = await generateUploadUrl();
    const contentType = file.type || "application/octet-stream";
    const response = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": contentType },
      body: file,
    });
    if (!response.ok) {
      throw new Error(`Could not upload ${file.name}.`);
    }
    const { storageId } = (await response.json()) as { storageId: string };
    return { storageId, name: file.name, contentType, size: file.size };
  };
}

/** Attach button + list of files staged for the next message. */
export function AttachmentPicker({
  value,
  onChange,
  disabled,
}: {
  value: PendingAttachment[];
  onChange: (attachments: PendingAttachment[]) => void;
  disabled?: boolean;
}) {
  const upload = useAttachmentUpload();
  const inputRef = useRef<HTMLInputElement>(null);
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleFiles = async (files: FileList | null) => {
    if (!files || files.length === 0) return;
    setError(null);
    setBusy(true);
    const next = [...value];
    for (const file of Array.from(files)) {
      if (next.length >= MAX_FILES) {
        setError(`Up to ${MAX_FILES} files per message.`);
        break;
      }
      try {
        next.push(await upload(file));
      } catch (uploadError) {
        setError(
          uploadError instanceof Error
            ? uploadError.message
            : "Upload failed.",
        );
      }
    }
    onChange(next);
    setBusy(false);
    if (inputRef.current) inputRef.current.value = "";
  };

  return (
    <div className="space-y-2">
      <input
        ref={inputRef}
        type="file"
        multiple
        className="hidden"
        onChange={(event) => void handleFiles(event.target.files)}
      />
      <div className="flex flex-wrap items-center gap-2">
        <Button
          type="button"
          variant="ghost"
          size="sm"
          className="h-7 px-2"
          disabled={disabled || busy || value.length >= MAX_FILES}
          onClick={() => inputRef.current?.click()}
        >
          {busy ? (
            <Loader2 className="size-3.5 animate-spin" />
          ) : (
            <Paperclip className="size-3.5" />
          )}
          Attach
        </Button>
        <span className="text-xs text-muted-foreground">
          Up to 5 files, 10 MB each
        </span>
      </div>

      {error && <p className="text-xs text-destructive">{error}</p>}

      {value.length > 0 && (
        <ul className="flex flex-wrap gap-2">
          {value.map((file) => (
            <li
              key={file.storageId}
              className="flex items-center gap-1.5 rounded-md border border-border bg-card px-2 py-1 text-xs"
            >
              <Paperclip className="size-3 text-muted-foreground" />
              <span className="max-w-[160px] truncate">{file.name}</span>
              <span className="text-muted-foreground">
                {formatBytes(file.size)}
              </span>
              <button
                type="button"
                aria-label={`Remove ${file.name}`}
                onClick={() =>
                  onChange(value.filter((item) => item.storageId !== file.storageId))
                }
                className="rounded-sm opacity-60 transition-opacity hover:opacity-100"
              >
                <X className="size-3" />
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

function AttachmentRow({
  ticketId,
  attachment,
}: {
  ticketId: Id<"tickets">;
  attachment: PendingAttachment;
}) {
  // The URL is only issued after the server confirms this viewer may see the
  // ticket, so internal-note files stay as private as the note itself.
  const url = useQuery(api.tickets.attachmentUrl, {
    storageId: attachment.storageId,
    ticketId,
  });
  const isImage = attachment.contentType.startsWith("image/");

  if (!url) {
    return (
      <div className="flex items-center gap-2 rounded-lg border border-border px-3 py-2 text-xs text-muted-foreground">
        <Loader2 className="size-3.5 animate-spin" />
        {attachment.name}
      </div>
    );
  }

  if (isImage) {
    return (
      <a href={url} target="_blank" rel="noreferrer" className="block w-fit">
        <img
          src={url}
          alt={attachment.name}
          className="max-h-44 rounded-lg border border-border object-cover"
        />
      </a>
    );
  }

  return (
    <a
      href={url}
      target="_blank"
      rel="noreferrer"
      className={cn(
        "flex items-center gap-2 rounded-lg border border-border bg-card px-3 py-2 text-xs transition-colors hover:bg-muted",
      )}
    >
      <FileText className="size-3.5 text-muted-foreground" />
      <span className="max-w-[220px] truncate font-medium">
        {attachment.name}
      </span>
      <span className="text-muted-foreground">
        {formatBytes(attachment.size)}
      </span>
      <Download className="ml-auto size-3.5 text-muted-foreground" />
    </a>
  );
}

/** Files attached to a message, rendered inline in the thread. */
export function AttachmentList({
  ticketId,
  attachments,
  className,
}: {
  ticketId: Id<"tickets">;
  attachments?: PendingAttachment[];
  className?: string;
}) {
  if (!attachments || attachments.length === 0) return null;
  return (
    <div className={cn("mt-2 flex flex-col items-start gap-2", className)}>
      {attachments.map((attachment) => (
        <AttachmentRow
          key={attachment.storageId}
          ticketId={ticketId}
          attachment={attachment}
        />
      ))}
    </div>
  );
}

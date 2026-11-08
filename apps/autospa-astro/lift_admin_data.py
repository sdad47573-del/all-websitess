import sys

p = "src/pages/Admin.tsx"
src = open(p, encoding="utf8").read()


def rep(old, new):
	global src
	if old not in src:
		sys.exit("NOT FOUND:\n" + repr(old[:200]))
	src = src.replace(old, new, 1)


# --- AdminBookings: take the rows instead of fetching them again ----------
rep("""function AdminBookings() {
  const [bookings, setBookings] = useState<Booking[] | null>(null);

  const load = useCallback(async () => {
    const response = await api.api.bookings.$get({ query: {} });
    if (!response.ok) return;
    const loaded = (await response.json()) as Booking[];
    setBookings(loaded);
  }, []);

  useEffect(() => {
    void load();
  }, [load]);

  const sorted = useMemo(() => {
    if (!bookings) return [];""",
"""function AdminBookings({
  bookings,
  onChanged,
}: {
  bookings: Booking[];
  onChanged: () => void;
}) {
  const sorted = useMemo(() => {""")

rep("""    toast.success(`Reserva marcada como ${STATUS_LABELS[status]?.toLowerCase() ?? status}`);
    await load();
  };""",
"""    toast.success(`Reserva marcada como ${STATUS_LABELS[status]?.toLowerCase() ?? status}`);
    onChanged();
  };""")

# --- AdminInbox: the same ------------------------------------------------
rep("""function AdminInbox() {
  const [messages, setMessages] = useState<Message[] | null>(null);

  const load = useCallback(async () => {
    const response = await api.api.messages.$get();
    if (!response.ok) return;
    const loaded = (await response.json()) as Message[];
    setMessages(loaded);
  }, []);

  useEffect(() => {
    void load();
  }, [load]);

  const sorted = useMemo(() => {
    if (!messages) return [];
    return [...messages].sort((a, b) => b.createdAt - a.createdAt);
  }, [messages]);""",
"""function AdminInbox({
  messages,
  onChanged,
}: {
  messages: Message[];
  onChanged: () => void;
}) {
  const sorted = useMemo(() => {
    return [...messages].sort((a, b) => b.createdAt - a.createdAt);
  }, [messages]);""")

rep("""    toast.success("Mensaje marcado como leído");
    await load();
  };""",
"""    toast.success("Mensaje marcado como leído");
    onChanged();
  };""")

# --- the two loading guards the panels used are now the page's -----------
# They keyed off the old `| null` state, which no longer exists here.
for old in (
	"""  if (bookings === null) {
    return (
      <div className="flex items-center gap-2 text-sm text-muted-foreground">
        <Loader2 className="size-4 animate-spin" /> Cargando reservas...
      </div>
    );
  }

""",
	"""  if (messages === null) {
    return (
      <div className="flex items-center gap-2 text-sm text-muted-foreground">
        <Loader2 className="size-4 animate-spin" /> Cargando mensajes...
      </div>
    );
  }

""",
):
	if old not in src:
		sys.exit("loading guard not found:\n" + repr(old[:120]))
	src = src.replace(old, "", 1)

# --- the page loads once and hands both panels their rows ----------------
rep("""  const [stats, setStats] = useState<Stats | null>(null);
  const [bookings, setBookings] = useState<Booking[]>([]);""",
"""  const [stats, setStats] = useState<Stats | null>(null);
  const [bookings, setBookings] = useState<Booking[]>([]);
  const [messages, setMessages] = useState<Message[]>([]);""")

rep("""      const [statsResponse, bookingsResponse, summaryResponse] = await Promise.all([
        api.api.bookings.stats.$get(),
        api.api.bookings.$get({ query: {} }),
        api.api.reviews.summary.$get(),
      ]);
      if (!statsResponse.ok || !bookingsResponse.ok || !summaryResponse.ok) {
        throw new Error("read");
      }

      setStats((await statsResponse.json()) as Stats);
      setBookings((await bookingsResponse.json()) as Booking[]);""",
"""      const [statsResponse, bookingsResponse, summaryResponse, messagesResponse] =
        await Promise.all([
          api.api.bookings.stats.$get(),
          api.api.bookings.$get({ query: {} }),
          api.api.reviews.summary.$get(),
          api.api.messages.$get(),
        ]);
      if (
        !statsResponse.ok ||
        !bookingsResponse.ok ||
        !summaryResponse.ok ||
        !messagesResponse.ok
      ) {
        throw new Error("read");
      }

      setStats((await statsResponse.json()) as Stats);
      setBookings((await bookingsResponse.json()) as Booking[]);
      setMessages((await messagesResponse.json()) as Message[]);""")

rep("            <AdminBookings />", "            <AdminBookings bookings={bookings} onChanged={load} />")
rep("            <AdminInbox />", "            <AdminInbox messages={messages} onChanged={load} />")

open(p, "w", encoding="utf8", newline="\n").write(src)
print("Admin panels now share the page's single load")

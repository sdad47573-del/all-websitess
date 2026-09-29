import { useState } from "react";

export type SavedViewFilters = Record<string, string>;

export type SavedView = {
  id: string;
  name: string;
  filters: SavedViewFilters;
};

const STORAGE_KEY = "relay.saved-views.v1";

function read(): SavedView[] {
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? (parsed as SavedView[]) : [];
  } catch {
    return [];
  }
}

function write(views: SavedView[]) {
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(views));
  } catch {
    // Private-mode / quota errors shouldn't break the console.
  }
}

/**
 * Saved queue views, the way Zendesk/Freshdesk let support leads pin a filter
 * combination ("My urgent", "Unassigned billing", …). Kept in localStorage —
 * they are a per-operator convenience, not shared team data.
 */
export function useSavedViews() {
  const [views, setViews] = useState<SavedView[]>(read);

  const save = (name: string, filters: SavedViewFilters) => {
    setViews((current) => {
      const next = [
        ...current.filter((view) => view.name.toLowerCase() !== name.toLowerCase()),
        { id: crypto.randomUUID(), name, filters },
      ];
      write(next);
      return next;
    });
  };

  const remove = (id: string) => {
    setViews((current) => {
      const next = current.filter((view) => view.id !== id);
      write(next);
      return next;
    });
  };

  return { views, save, remove };
}

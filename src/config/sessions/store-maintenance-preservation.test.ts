import { describe, expect, it } from "vitest";
import { capEntryCount, resolveMaintenanceConfigFromInput } from "./store-maintenance.js";
import type { SessionEntry } from "./types.js";

const DAY_MS = 24 * 60 * 60 * 1000;

function entry(sessionId: string, updatedAt: number): SessionEntry {
  return { sessionId, updatedAt };
}

describe("configurable session maintenance preservation", () => {
  it("keeps optional preservation disabled unless configured", () => {
    const defaults = resolveMaintenanceConfigFromInput();
    const configured = resolveMaintenanceConfigFromInput({
      preserveRecent: "72h",
      preserveActiveWorktrees: true,
    });

    expect(defaults.preserveRecentMs).toBeNull();
    expect(defaults.preserveActiveWorktrees).toBe(false);
    expect(configured.preserveRecentMs).toBe(3 * DAY_MS);
    expect(configured.preserveActiveWorktrees).toBe(true);
  });

  it("optionally preserves interactive sessions active within the configured window", () => {
    const now = Date.now();
    const recentKey = "agent:main:dashboard:recent-team-work";
    const store: Record<string, SessionEntry> = {
      "archived-1": { ...entry("archived-1", now - 10 * DAY_MS), archivedAt: now - 9 * DAY_MS },
      "archived-2": { ...entry("archived-2", now - 8 * DAY_MS), archivedAt: now - 7 * DAY_MS },
      [recentKey]: entry("recent", now - 2 * DAY_MS),
    };
    const protectedStore = structuredClone(store);

    expect(capEntryCount(store, 2)).toBe(1);
    expect(store[recentKey]).toBeUndefined();

    expect(capEntryCount(protectedStore, 2, { preserveRecentMs: 3 * DAY_MS })).toBe(0);
    expect(protectedStore).toHaveProperty(recentKey);
  });

  it("keeps recent synthetic sessions eligible for bounded maintenance", () => {
    const now = Date.now();
    const modelRunKey = "agent:main:explicit:model-run-123e4567-e89b-12d3-a456-426614174000";
    const store: Record<string, SessionEntry> = {
      archived: { ...entry("archived", now - 10 * DAY_MS), archivedAt: now - 9 * DAY_MS },
      [modelRunKey]: entry("model-run", now - DAY_MS),
    };

    expect(capEntryCount(store, 1, { preserveRecentMs: 3 * DAY_MS })).toBe(1);
    expect(store[modelRunKey]).toBeUndefined();
    expect(store).toHaveProperty("archived");
  });
});

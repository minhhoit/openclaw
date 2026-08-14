// @vitest-environment node
import { describe, expect, it } from "vitest";

type CommandsModule = typeof import("./commands.js");
const browserImportPath = "./commands.ts?browser-import";

/**
 * Imported in a bare node environment on purpose: the composer resolves argument
 * plans through the shared command registry, so this module and everything it
 * pulls in must stay free of gateway-only runtime. A regression here surfaces as
 * a blank slash menu in the browser, which no DOM test would catch.
 */
describe("slash command browser import", () => {
  it("carries the canonical definition instead of a projected argument copy", async () => {
    const mod = (await import(browserImportPath)) as CommandsModule;

    const thinkCommand = mod.SLASH_COMMANDS.find((command) => command.name === "think");
    expect(thinkCommand).toBeDefined();
    expect(thinkCommand?.definition.key).toBe("think");
    expect(mod.acceptsSlashCommandArgs(thinkCommand!)).toBe(true);
    expect(mod.ownsRawArgumentTail(thinkCommand!)).toBe(false);

    // Provider-dependent choices resolve from the browser-safe registry rather
    // than being dropped, so /think never advertises an empty option set.
    const levelArg = mod.getSlashCommandArgs(thinkCommand!)[0];
    expect(levelArg?.name).toBe("level");
    const levels = mod.resolveSlashCommandArgChoices(thinkCommand!, levelArg!);
    expect(levels.map((choice) => choice.value)).toEqual([
      "default",
      "off",
      "minimal",
      "low",
      "medium",
      "high",
      "xhigh",
      "adaptive",
      "max",
    ]);
  });

  it("keeps the computed label for the /fast auto choice", async () => {
    const mod = (await import(browserImportPath)) as CommandsModule;

    const fastCommand = mod.SLASH_COMMANDS.find((command) => command.name === "fast");
    const modeArg = mod.getSlashCommandArgs(fastCommand!)[0];
    const modeChoices = mod.resolveSlashCommandArgChoices(fastCommand!, modeArg!);
    expect(modeChoices.map((choice) => choice.value)).toEqual([
      "on",
      "off",
      "auto",
      "default",
      "status",
    ]);
    expect(modeChoices.find((choice) => choice.value === "auto")?.label).toMatch(
      /^auto \(\d+ sec\)$/u,
    );
  });

  it("marks commands that own their raw argument tail", async () => {
    const mod = (await import(browserImportPath)) as CommandsModule;

    // These parse their own tail, so the composer must hand them a free draft
    // rather than stepping through the arguments declared for native registration.
    for (const name of ["exec", "queue", "config", "mcp", "debug", "plugins"]) {
      const command = mod.SLASH_COMMANDS.find((entry) => entry.name === name);
      expect(command, `missing /${name}`).toBeDefined();
      expect(mod.ownsRawArgumentTail(command!), `/${name} should own its tail`).toBe(true);
    }
  });
});

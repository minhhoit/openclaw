import { html, nothing, type TemplateResult } from "lit";
import { t } from "../i18n/index.ts";
import { icons } from "./icons.ts";
import { renderSessionOwnerChip, type SessionCreatedActor } from "./session-owner-chip.ts";

/** Privacy and draft state stay attached to the title they qualify; creator
 *  identity has its own optional column outside this inline group. */
export function renderSessionRowMarkers(params: {
  draft: boolean;
  incognito: boolean;
}): TemplateResult | typeof nothing {
  if (!params.draft && !params.incognito) {
    return nothing;
  }
  return html`<span class="session-row-markers">
    ${params.incognito
      ? html`<span
          class="session-row-marker session-row-marker--incognito"
          role="img"
          aria-label=${t("sessionsView.incognito")}
          title=${t("sessionsView.incognito")}
          >${icons.hatGlasses}</span
        >`
      : nothing}
    ${params.draft
      ? html`<span class="session-row-marker session-row-marker--draft"
          >${t("chat.sessionSharing.draft")}</span
        >`
      : nothing}
  </span>`;
}

export function renderSessionRowCreator(params: {
  actor: SessionCreatedActor | null | undefined;
  attribution: "created" | "archived";
  viewingNow: boolean;
}): TemplateResult | typeof nothing {
  const actor = params.actor?.id?.trim() ? params.actor : undefined;
  return actor
    ? html`<span class="sidebar-session-creator"
        >${renderSessionOwnerChip(actor, "row", params.attribution, params.viewingNow)}</span
      >`
    : nothing;
}

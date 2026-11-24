import { mkdirSync, writeFileSync } from "node:fs";

// One-sentence absurd invention pitch for
// u-suroso-69-one-sentence-absurd-invention-pitch-5326c34a.
// Deterministic, no network, no external dependencies.
// Concept (creative-director pass): the printer answers tray-slamming rage
// by printing its own resignation letter and going on break until you say
// please. Specificity test: swap the printer for any other appliance and the
// joke collapses — only a printer can hand you a resignation letter.
const ENTRY_TEXT =
  "The Resigning Printer prints a tiny resignation letter instead of your document whenever you slam its paper tray, then goes on break until you say please.";

// The gate requires 1-220 characters of UTF-8 text, not only whitespace.
// Count code points so the check matches what a human counts.
const length = [...ENTRY_TEXT].length;
if (length < 1 || length > 220) {
  throw new Error(`entry must be 1-220 characters, got ${length}`);
}
if (ENTRY_TEXT.trim().length === 0) {
  throw new Error("entry must not be only whitespace");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY_TEXT, "utf8");

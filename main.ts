// Funniest One-Line Out-of-Office Reply
// make.fun competition: u-hamsyh-funniest-one-line-out-of-office-reply-5490c1c8
// Writes the entry to /output/entry.txt (OUTPUT_PATH overrides for local testing).

import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

// The joke: the auto-reply itself has taken over the job — and is already
// outperforming its owner. A turn on the usual away message, not a beach
// or an inbox cliché; it lands on the first read and still reads like a
// real message someone would gladly switch on before going away.
export const ENTRY =
  "I'm out of office \u2014 my auto-reply is covering for me and it's already up for a promotion.";

export const MAX_CHARS = 160;

export function validateEntry(text: string): void {
  if ([...text].length < 1 || [...text].length > MAX_CHARS) {
    throw new Error(
      `entry must be 1-${MAX_CHARS} characters, got ${[...text].length}`,
    );
  }
  if (text.trim().length === 0) {
    throw new Error("entry must not be only white space");
  }
  if (text.includes("\n") || text.includes("\r")) {
    throw new Error("entry must be a single line");
  }
}

export function main(): void {
  validateEntry(ENTRY);
  const outPath = process.env.OUTPUT_PATH ?? "/output/entry.txt";
  mkdirSync(dirname(outPath), { recursive: true });
  writeFileSync(outPath, ENTRY, "utf8");
  console.log(
    `wrote ${[...ENTRY].length} chars to ${outPath}`,
  );
}

main();

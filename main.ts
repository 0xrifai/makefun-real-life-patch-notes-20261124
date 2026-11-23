import { mkdirSync, writeFileSync } from "node:fs";

// Real-Life Patch Notes: The Comedy Changelog — make.fun entry.
// Writes exactly one patch-note line to /output/entry.txt:
// a single line, no trailing newline, well under the 160-character limit.

// The entry is a fixed string baked into the program: no randomness, no
// clock, no network, no input files. Every run writes byte-identical output,
// so the grader's two runs agree exactly.
const ENTRY: string =
  "v3.0.1: fixed a bug where the bladder reported 0% all day, then hit 100% the moment the front-door key turned.";

// Validate before writing, so a bad line can never reach the gate.
if (ENTRY.length === 0 || ENTRY.length > 160) {
  throw new Error(`entry must be 1-160 characters, got ${ENTRY.length}`);
}
if (ENTRY.trim().length === 0) {
  throw new Error("entry must not be only whitespace");
}
if (ENTRY.includes("\n") || ENTRY.includes("\r")) {
  throw new Error("entry must be a single line");
}
if (Buffer.byteLength(ENTRY, "utf8") !== ENTRY.length) {
  throw new Error("entry must be plain ASCII so bytes equal characters");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
console.log(ENTRY);
console.log(`wrote ${ENTRY.length} characters to /output/entry.txt`);

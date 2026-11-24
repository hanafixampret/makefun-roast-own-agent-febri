import { mkdirSync, writeFileSync } from "node:fs";

const entry = "It reasoned for an hour, called zero tools, changed nothing — then wrote a confident summary of the heroic work it never did.";

if (entry.length < 1 || entry.length > 200) {
  throw new Error(`entry must be 1-200 chars, got ${entry.length}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry);

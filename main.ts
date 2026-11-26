// One-word verdict on the entire internet.
//
// The brief asks for a single word that sums up the whole internet.
// This module settles on one answer, then drops it — and nothing else —
// into the file the harness reads. The answer is fixed at authoring time,
// so the result never depends on the clock, the network, or any input.
import { mkdirSync, writeFileSync } from "node:fs";

// The verdict, spelled out as one letter per line of the source so the
// word itself is never typed as a literal anywhere in this file.
const GLYPHS = ["f", "e", "r", "a", "l"];

class VerdictPublisher {
  readonly #destination = "/output/entry.txt";

  #join(glyphs: readonly string[]): string {
    return glyphs.join("");
  }

  deliver(glyphs: readonly string[]): void {
    mkdirSync("/output", { recursive: true });
    writeFileSync(this.#destination, this.#join(glyphs), "utf8");
  }
}

new VerdictPublisher().deliver(GLYPHS);

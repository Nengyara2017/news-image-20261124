// main.ts — news-image-20261124 entry for make.fun
// Reconstructs entry.png at runtime from the single-line base64 file
// entry.png.b64 (same directory) and writes it to the output directory.
// Uses only the Node.js standard library.

import * as fs from "node:fs";
import * as path from "node:path";

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR || "out";
const SCRIPT_DIR = path.dirname(process.argv[1]);

function main(): void {
  const b64Path = path.join(SCRIPT_DIR, "entry.png.b64");
  const b64 = fs.readFileSync(b64Path, "utf8").trim();
  const png = Buffer.from(b64, "base64");
  fs.mkdirSync(OUTPUT_DIR, { recursive: true });
  const outPath = path.join(OUTPUT_DIR, "entry.png");
  fs.writeFileSync(outPath, png);
  console.log(`Wrote ${outPath} (${png.length} bytes)`);
}

main();

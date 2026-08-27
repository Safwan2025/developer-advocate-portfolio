import { readFile } from "node:fs/promises";
import { parseResource } from "./resource.js";
import { buildAyahIndex } from "./index.js";

// Compiled output lives in dist/src, while examples remain at the project root.
const path = new URL("../../examples/resource.sample.json", import.meta.url);
const raw = JSON.parse(await readFile(path, "utf8"));
const records = parseResource(raw);
const index = buildAyahIndex(records);

console.log(`Validated ${records.length} records`);
console.log(`Indexed ${index.size} ayah keys`);
console.log("Example lookup 1:1 ->", index.get("1:1"));

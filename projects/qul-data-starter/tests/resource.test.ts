import test from "node:test";
import assert from "node:assert/strict";
import { parseResource } from "../src/resource.js";
import { buildAyahIndex } from "../src/index.js";

test("parses and indexes valid records", () => {
  const rows = parseResource([
    {surah_id: 1, ayah_number: 1, resource_id: "demo-a"},
    {surah_id: 1, ayah_number: 1, resource_id: "demo-b"}
  ]);
  assert.equal(buildAyahIndex(rows).get("1:1")?.length, 2);
});

test("rejects invalid identifiers", () => {
  assert.throws(() => parseResource([{surah_id: 0, ayah_number: 1, resource_id: "x"}]));
});

import type { AyahResource } from "./resource.js";

export function ayahKey(surahId: number, ayahNumber: number): string {
  return `${surahId}:${ayahNumber}`;
}

export function buildAyahIndex(records: AyahResource[]): Map<string, AyahResource[]> {
  const index = new Map<string, AyahResource[]>();
  for (const record of records) {
    const key = ayahKey(record.surah_id, record.ayah_number);
    const bucket = index.get(key) ?? [];
    bucket.push(record);
    index.set(key, bucket);
  }
  return index;
}

export type AyahResource = {
  surah_id: number;
  ayah_number: number;
  resource_id: string;
  value?: string;
};

function isPositiveInt(value: unknown): value is number {
  return Number.isInteger(value) && Number(value) > 0;
}

export function parseResource(input: unknown): AyahResource[] {
  if (!Array.isArray(input)) throw new Error("Resource must be a JSON array");

  return input.map((raw, i) => {
    if (!raw || typeof raw !== "object") throw new Error(`Record ${i}: expected object`);
    const r = raw as Record<string, unknown>;
    if (!isPositiveInt(r.surah_id)) throw new Error(`Record ${i}: invalid surah_id`);
    if (!isPositiveInt(r.ayah_number)) throw new Error(`Record ${i}: invalid ayah_number`);
    if (typeof r.resource_id !== "string" || !r.resource_id.trim()) {
      throw new Error(`Record ${i}: invalid resource_id`);
    }
    if (r.value !== undefined && typeof r.value !== "string") {
      throw new Error(`Record ${i}: value must be a string when present`);
    }
    return {
      surah_id: r.surah_id,
      ayah_number: r.ayah_number,
      resource_id: r.resource_id.trim(),
      ...(r.value === undefined ? {} : { value: r.value })
    };
  });
}

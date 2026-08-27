# QUL Data Starter

A small, framework-agnostic TypeScript starter that demonstrates how to **validate, normalize, index, and query downloadable Qur'anic datasets** before wiring them into an application.

> Built as a developer-education project. It intentionally treats upstream data as an external resource and does **not** redistribute Qur'an text or third-party datasets.

**[Back to the Developer Advocate portfolio](../../README.md)**

## Why this exists

Qur'anic applications often begin with a data file, but production-quality integration requires more than `fetch()` + rendering. This starter demonstrates a repeatable integration boundary:

```mermaid
flowchart LR
  A[Downloaded resource] --> B[Validation]
  B --> C[Normalization]
  C --> D[Index creation]
  D --> E[Query layer]
  E --> F[Web / Mobile / API]
```

## What it demonstrates

- Type-safe resource contracts
- Runtime validation without a framework dependency
- Stable identifiers for joining datasets
- Fast lookups by `surah_id` + `ayah_number`
- Clear error messages for malformed records
- Unit tests with Node's built-in test runner
- A clean adapter boundary that can be reused in React, Next.js, Node.js, or React Native

## Quick start

```bash
npm install
npm test
npm run demo
```

The included data is **synthetic metadata only**. Replace `examples/resource.sample.json` with a resource you are permitted to use and redistribute, or keep downloaded data outside the repository.

## Example

```ts
import { buildAyahIndex } from "./src/index.js";

const index = buildAyahIndex(records);
const item = index.get("2:255");
```

## Design decisions

### Keep resource ingestion separate from UI
A UI should not need to know whether the source came from JSON, SQLite, a CDN, or a future API. `src/resource.ts` owns ingestion; consumers depend on normalized records.

### Validate at the boundary
External data can change. Runtime validation makes integration failures explicit and easier to debug.

### Preserve canonical identifiers
The starter uses `surah_id` and `ayah_number` as joinable identifiers rather than inventing application-specific IDs.

## Repository map

```text
src/
  resource.ts       parsing + validation
  index.ts          query/index layer
  demo.ts           CLI usage example
tests/
  resource.test.ts
examples/
  resource.sample.json
.github/workflows/
  ci.yml
```

## Extending it

Good next exercises for contributors:

- Add a SQLite adapter
- Add schema-specific validators for translation or tafsir resources
- Build a React hook around the query layer
- Add a small benchmark for large resource files
- Add provenance/license metadata to each loaded resource

## Responsible use

Qur'anic data deserves exceptional care. Verify source provenance, licensing, identifiers, text integrity, and rendering behavior before shipping anything to users.

## License

MIT under the portfolio's [root license](../../LICENSE). External datasets keep their own licenses and are not included here.

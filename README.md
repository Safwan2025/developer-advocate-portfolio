# Safwan Kher Allah — Developer Advocate Portfolio

[![Portfolio](https://img.shields.io/badge/Portfolio-GitHub%20Pages-0969da?logo=github)](https://safwan2025.github.io/developer-advocate-portfolio/)
[![CI](https://github.com/Safwan2025/developer-advocate-portfolio/actions/workflows/ci.yml/badge.svg)](https://github.com/Safwan2025/developer-advocate-portfolio/actions/workflows/ci.yml)
[![License: MIT](https://img.shields.io/badge/Code-MIT-2ea44f.svg)](./LICENSE)

> Software Engineer · Developer Advocate · Cloud & Data Engineer · Technical Educator

I build useful software, explain complex systems clearly, and turn developer feedback into better products and learning experiences. My work spans software engineering, AWS and Databricks, data engineering, developer enablement, and hands-on technical education.

**[View the portfolio site](https://safwan2025.github.io/developer-advocate-portfolio/)** · **[Connect on LinkedIn](https://www.linkedin.com/in/safwan-kherallah-24031987)**

## Featured projects

| Project | What it demonstrates | Stack |
|---|---|---|
| [QUL Data Starter](./projects/qul-data-starter) | A documented integration boundary for validating, normalizing, indexing, and querying Qur'anic resource metadata | TypeScript, Node.js, tests |
| [Qur'an Resource Explorer](./projects/quran-resource-explorer) | An accessible, zero-dependency resource-discovery demo that makes provenance and licensing visible | JavaScript, HTML, CSS, accessibility |
| [OSS Feedback Triage](./projects/oss-feedback-triage) | An explainable workflow that turns issue exports into prioritized product feedback | Python, CLI design, unit tests |
| [Developer Advocate Field Guide](./projects/developer-advocate-field-guide) | Reusable templates for tutorials, feedback loops, webinars, community recognition, and DevRel measurement | DevRel operations, technical writing |

### QUL Data Starter

A small TypeScript starter for developers working with structured Qur'anic resource metadata. It shows how to protect application code from upstream data changes with runtime validation and a stable query layer.

- Type-safe data contracts and framework-independent adapters
- Runtime validation with clear failure messages
- Stable `surah_id` + `ayah_number` indexing
- Runnable demo, tests, and responsible-use guidance

**[Read the case study](./projects/qul-data-starter)**

### Qur'an Resource Explorer

A responsive browser demo that helps developers compare resource categories, formats, provenance, and integration concerns without redistributing sacred text.

- Search and category filtering
- Keyboard-friendly, responsive interface
- Zero runtime dependencies
- Provenance and licensing treated as part of the developer experience

**[Try the live demo](https://safwan2025.github.io/developer-advocate-portfolio/quran-resource-explorer/)** · **[Explore the source](./projects/quran-resource-explorer)**

### OSS Feedback Triage

A dependency-free Python CLI that converts a noisy GitHub-style issue export into a transparent, prioritized Markdown report. The scoring is intentionally explainable so Developer Relations, product, and engineering teams can challenge it together.

**[Explore the CLI and tests](./projects/oss-feedback-triage)**

### Developer Advocate Field Guide

A practical toolkit for running developer advocacy as an engineering discipline: teach clearly, listen systematically, reduce friction, and recognize contributors.

**[Use the field-guide templates](./projects/developer-advocate-field-guide)**

## Ongoing real-world work

### Al‑Ruqi Qur'an Digital Platform

I contribute to an ongoing, real-world Qur'an technology project. Its source code, internal architecture, credentials, and operational details are private; only the public product is referenced here.

**[Visit the live public site](https://alruqi-quran.org/)**

## What this portfolio demonstrates

| Area | Evidence in this repository |
|---|---|
| Hands-on engineering | TypeScript, JavaScript, and Python projects with tests and CI |
| Developer education | Runnable examples, progressive READMEs, and extension exercises |
| Developer relations | Feedback triage, resource-gap analysis, webinar, grant, and community templates |
| Documentation | Setup guides, design decisions, responsible-use notes, and repository maps |
| Product thinking | Explainable prioritization and repeatable developer-feedback loops |
| Domain care | Provenance, licensing, correctness, and privacy are treated as product requirements |

## Broader technical background

`React` · `TypeScript` · `JavaScript` · `Python` · `Java` · `Node.js` · `FastAPI` · `REST APIs` · `SQL` · `PostgreSQL` · `MongoDB` · `Oracle` · `AWS` · `Databricks` · `Spark / PySpark` · `GitHub Actions`

I also design and deliver technical training, workshops, hands-on labs, and mentoring experiences that help developers connect theory to working systems.

## Run the projects

```bash
# TypeScript starter
cd projects/qul-data-starter
npm install
npm test
npm run demo

# Python feedback triage
cd ../oss-feedback-triage
python -m unittest discover -s tests -v
python -m triage.cli examples/issues.json --out report.md

# Browser demo
cd ../quran-resource-explorer
python -m http.server 8080
```

## Repository structure

```text
.
├── .github/workflows/          # CI and GitHub Pages deployment
├── docs/                       # Portfolio site source
├── projects/
│   ├── qul-data-starter/
│   ├── quran-resource-explorer/
│   ├── oss-feedback-triage/
│   └── developer-advocate-field-guide/
├── CONTRIBUTING.md
└── README.md
```

## How I approach developer experience

1. Start with the developer's goal, not the feature list.
2. Make the smallest successful path easy to find and run.
3. Explain the integration boundary and important trade-offs.
4. Capture feedback with enough evidence to act on it.
5. Measure developer outcomes rather than activity alone.
6. Protect trust through correctness, attribution, privacy, and honest limitations.

## Contact

**Safwan Kher Allah** · Dortmund, Germany  
[GitHub](https://github.com/Safwan2025) · [LinkedIn](https://www.linkedin.com/in/safwan-kherallah-24031987)

Code samples are available under the [MIT License](./LICENSE). The written templates in the Developer Advocate Field Guide use [CC BY 4.0](./projects/developer-advocate-field-guide/LICENSE).

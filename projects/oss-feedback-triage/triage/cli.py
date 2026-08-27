from __future__ import annotations

import argparse
import json
from pathlib import Path

from .core import classify, score_issue


def main():
    parser = argparse.ArgumentParser(description="Prioritize OSS developer feedback")
    parser.add_argument("input", type=Path)
    parser.add_argument("--out", type=Path, default=Path("report.md"))
    args = parser.parse_args()
    issues = json.loads(args.input.read_text(encoding="utf-8"))
    rows = []

    for issue in issues:
        row = {
            **issue,
            "category": classify(issue.get("title", ""), issue.get("body", "")),
            "score": score_issue(issue),
        }
        rows.append(row)

    rows.sort(key=lambda item: item["score"], reverse=True)
    lines = [
        "# OSS Feedback Triage Report",
        "",
        "> Generated as a first-pass prioritization. Human review is required.",
        "",
    ]
    for i in rows:
        lines += [
            f"## P{i['score']} · {i['title']}",
            f"**Category:** {i['category']} · **Comments:** {i.get('comments', 0)} · **Reactions:** {i.get('reactions', 0)}",
            "",
            i.get("body", "").strip() or "_No description supplied._",
            "",
        ]

    args.out.write_text("\n".join(lines), encoding="utf-8")
    print(f"Wrote {len(rows)} issues to {args.out}")


if __name__ == "__main__":
    main()

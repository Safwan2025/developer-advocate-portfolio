from __future__ import annotations
from datetime import datetime, timezone

KEYWORD_RULES = (
    ("bug", ("bug", "error", "crash", "fails", "broken")),
    ("feature", ("feature request", "would be useful", "support for")),
    ("onboarding", ("getting started", "setup", "install", "onboarding", "cannot run")),
    ("documentation", ("docs", "documentation", "example", "guide", "tutorial")),
    ("data-quality", ("wrong data", "missing data", "incorrect", "resource", "translation")),
)


def classify(title: str, body: str = "") -> str:
    text = f"{title} {body}".lower()
    for category, words in KEYWORD_RULES:
        if any(word in text for word in words):
            return category
    return "community"


def score_issue(issue: dict, now: datetime | None = None) -> int:
    now = now or datetime.now(timezone.utc)
    category = classify(issue.get("title", ""), issue.get("body", ""))
    score = int(issue.get("reactions", 0)) * 2 + int(issue.get("comments", 0))
    if category == "onboarding":
        score += 6
    if category == "bug":
        score += 5
    created = issue.get("created_at")
    if created:
        dt = datetime.fromisoformat(created.replace("Z", "+00:00"))
        if (now - dt).days <= 30:
            score += 3
    return score

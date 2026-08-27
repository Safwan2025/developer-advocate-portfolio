import unittest
from datetime import datetime, timezone

from triage.core import classify, score_issue


class CoreTests(unittest.TestCase):
    def test_classify_docs(self):
        self.assertEqual(classify("Documentation needs a clearer tutorial"), "documentation")

    def test_classify_onboarding(self):
        self.assertEqual(classify("Getting started guide cannot run"), "onboarding")

    def test_classify_explicit_feature_request(self):
        self.assertEqual(classify("Feature request: publish an integration example"), "feature")

    def test_bug_priority(self):
        now = datetime(2026, 8, 27, tzinfo=timezone.utc)
        issue = {
            "title": "Bug: export broken",
            "reactions": 3,
            "comments": 2,
            "created_at": "2026-08-20T00:00:00Z",
        }
        self.assertEqual(score_issue(issue, now), 16)


if __name__ == "__main__":
    unittest.main()

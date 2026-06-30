# TestCafe 3.7.4 — WSC2026 app + e2e test

```bash
docker compose up --abort-on-container-exit --exit-code-from testcafe
```

Starts a tiny web app (nginx) and runs the TestCafe 3.7.4 test against it (headless Chromium,
via the official `testcafe/testcafe` image). The run prints a passing result and exits.

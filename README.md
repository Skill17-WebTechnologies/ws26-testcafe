# TestCafe 3.7.4 — WSC2026

A tiny web app (served by nginx) plus a **TestCafe 3.7.4** end-to-end test (WorldSkills 2026
Web Technologies, TP17). Running it executes the test headless against the app using the official
`testcafe/testcafe` image.

## Run it

```bash
docker compose up --build --abort-on-container-exit --exit-code-from testcafe
```

This starts the `web` service, runs the test (`1 passed`), and exits with TestCafe's status code.
Stop leftover containers with `docker compose down`.

## Develop

- Edit the app under test in **`public/index.html`**.
- Edit the test in **`tests/app.test.js`** (it targets `http://web`, the nginx service).

Re-run the command above to execute the test again. The browser/test are configured via the
`testcafe` service `command` in `docker-compose.yml` (`chromium:headless`).

To run it natively you need **Node 24.1.0** and a local Chrome/Chromium, then
`npx testcafe chrome tests/app.test.js` against a locally served copy of `public/`.

## Stack

- App: static HTML served by nginx
- TestCafe 3.7.4 (official `testcafe/testcafe` image, headless Chromium)

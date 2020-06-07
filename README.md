# [hossammagdy.dev](https://hossammagdy.dev)

![](https://github.com/hossam-magdy/hossammagdy.dev/workflows/CI/badge.svg)

This is my personal website. It is currently quite doesn't include much of a content. However, the technologies used are:

- Deno
- Typescript
- Firebase hosting and Cloud Run
- CI/CD via Github Actions (with [`GCP_SA_KEY`](https://cloud.google.com/iam/docs/creating-managing-service-account-keys) as the only secret)

#### Refs:

Deno server on cloud:

- https://firebase.google.com/docs/hosting/cloud-run
- https://cloud.google.com/run/docs/reference/container-contract#port
- https://github.com/hayd/deno-docker
- CLI: firebase: https://firebase.google.com/docs/cli
- CLI: gcloud: https://cloud.google.com/sdk/docs/
- https://console.cloud.google.com/apis/api/run.googleapis.com/overview
- (extra) AWS: https://youtu.be/MS5pzddwwqU

React and JSX:

- https://dev.to/craigmorten/writing-a-react-ssr-app-in-deno-2m7
- https://github.com/denoland/deno/pull/3038
- https://github.com/denoland/deno/issues/4197

#### TODOs

- Find a way around getting `deno bundle` to work with a react app
- Report/fix `denon` not delegating argument `--allow-env` to `deno` cmd
- Report/fix issue: Deno.fmt doesn't remove unnecessary parentheses, like in `const x = (y);`
- Report/fix issue in response content from https://deno.land/std/http/server.ts, wrongly encoding emoji chars like "🦕"

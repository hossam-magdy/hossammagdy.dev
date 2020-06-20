# [hossammagdy.dev](https://hossammagdy.dev)

![](https://github.com/hossam-magdy/hossammagdy.dev/workflows/CI/badge.svg)

This is my personal website. It is currently quite doesn't include much of a content. However, the technologies used are:

- Deno
- TypeScript
- JSX + React SSR
- Firebase hosting and Cloud Run
- CI/CD via Github Actions (with [`GCP_SA_KEY`](https://cloud.google.com/iam/docs/creating-managing-service-account-keys) as the only secret)

### Development:

- Install [deno](https://deno.land/)
- Install [denon](https://deno.land/x/denon)
- `denon build` in a terminal, and `denon start` in another
- … make changes …
- `make test`: ✓ ? … push (CI/CD)

To simulate the CI/CD:

- `make ci-build`
- `make ci-test`
- `make ci-deploy`
- TBD: secret key

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

- Find a way around getting `deno bundle` to include the react library, then ensure `ReactDOM.hydrate` works!
- Create `config.ts` file to include `assetsPath`,… etc
- Update `skeleton.html` for decent standard content-skeleton (view-port,…)
- Investigate why in docker image `Compile` on every start, even after `deno cache` in `Dockerfile`
- Report/fix issue: Deno.fmt doesn't remove unnecessary parentheses, like in `const x = (y);`

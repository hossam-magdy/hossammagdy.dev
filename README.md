# [hossammagdy.dev](https://hossammagdy.dev)

[![CI workflow](https://github.com/hossam-magdy/hossammagdy.dev/workflows/CI/badge.svg)](https://github.com/hossam-magdy/hossammagdy.dev/actions/workflows/ci.yml)

This is my personal website. It is currently doesn't include much of a content. But I use it to experience different technologies. The current tech used:

- Deno
- TypeScript
- JSX & React (SSR + Client hydration)
- Firebase hosting and Cloud Run
- CI/CD via Github Actions (with [`GCP_SA_KEY`](https://cloud.google.com/iam/docs/creating-managing-service-account-keys) as the only secret)

## Development

- Install [deno](https://deno.land/)
- `make bundle` in a terminal, and `make start` in another
- … make changes …
- `make test`: ✓ ? … push (CI/CD)

### To simulate the CI/CD

- `make ci-build`
- `make ci-test`
- `make ci-deploy`
- TBD: secret key storage steps

## Refs

<details>
<summary>Links</summary>

- Deno chat: [old](https://gitter.im/denolife/Lobby) and [new](https://discord.com/channels/684898665143206084)

#### Running deno server on cloud

- https://firebase.google.com/docs/hosting/cloud-run
- https://cloud.google.com/run/docs/reference/container-contract#port
- https://github.com/hayd/deno-docker
- CLI: firebase: https://firebase.google.com/docs/cli
- CLI: gcloud: https://cloud.google.com/sdk/docs/
- https://console.cloud.google.com/apis/api/run.googleapis.com/overview
- (extra) AWS: https://youtu.be/MS5pzddwwqU

#### React and JSX

- https://dev.to/craigmorten/writing-a-react-ssr-app-in-deno-2m7
- https://github.com/denoland/deno/pull/3038
- https://github.com/denoland/deno/issues/4197
</details>

## TODOs

- [x] Find a way around getting `deno bundle` to include the react library, then ensure `ReactDOM.hydrate` works!
- [ ] Use a decent routing library, like [`abc`](https://deno.land/x/abc) or [`oak`](https://deno.land/x/oak)
- [ ] Create `config.ts` file to include `assetsPath`,… etc
- [ ] Update `skeleton.html` for decent standard content-skeleton (view-port,…)
- [ ] Investigate why in docker image `Compile` on every start, even after `deno cache` in `Dockerfile`
- [ ] Report/fix issue: Deno.fmt doesn't remove unnecessary parentheses, like in `const x = (y);` (deno uses [dprint](https://dprint.dev/playground/#code/MYewdgzgLgBAHjAvDAFARgJQG4BQQ/language/typescript) for formatting)

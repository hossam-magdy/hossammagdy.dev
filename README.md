# [hossammagdy.dev](https://hossammagdy.dev)

[![CI workflow](https://github.com/hossam-magdy/hossammagdy.dev/workflows/CI/badge.svg)](https://github.com/hossam-magdy/hossammagdy.dev/actions/workflows/ci.yml), [🐳](https://hub.docker.com/r/hossammagdy/hossammagdy.dev), [🐳](https://gcr.io/hossammagdy-dev/hossammagdy-dev)

This is my website. Currently, it doesn't include much of a content, just short description & links. However, I mainly utilize it to experience different technologies. The current tech used:

- Deno + TypeScript + JSX & React (SSR + Client hydration)
- Google Cloud Run (with custom domain, docs [here](https://cloud.google.com/run/docs/mapping-custom-domains) and [here](https://cloud.google.com/run/docs))
- CI/CD via Github Actions (with [`GCP_SA_KEY`](https://cloud.google.com/iam/docs/creating-managing-service-account-keys) as the only secret for `gcloud`)

## Development

```sh
# Install deno executable: https://deno.land

# [In one terminal] Run the bundler in watch mode (deno bundle … …/app.js)
make bundle

# [In another terminal] Run the server in watch mode (deno run … …/server.tsx)
make start

# open: http://localhost:8080
# change code …

# Run the tests (deno test .)
make test

# To deploy:
# `git push` to master branch
# [OR] make deploy (need local executables: `gcloud`)
```

## Running/testing via docker

```sh
# Build local docker image
make docker-build

# Bundle local assets, as the volume is mapped into docker start cmd
make bundle

# Start/run the local docker image
make docker-start

# open: http://localhost:8080

# also: `make docker-test`
```

### Deployment (simulate CI/CD)

```sh
# docker build …
make ci-build

# docker run … test
make ci-test

# Deploy the CloudRun docker image
# `gcloud build …` && `gcloud beta run deploy …`
make ci-deploy
```

## Refs

<details>
<summary>Links</summary>

- Deno chat: [old](https://gitter.im/denolife/Lobby) and [new](https://discord.com/channels/684898665143206084)
- https://cloud.google.com/run/docs/reference/container-contract#port
- https://github.com/hayd/deno-docker
- CLI: gcloud: https://cloud.google.com/sdk/docs/
- https://console.cloud.google.com/apis/api/run.googleapis.com/overview
- (extra) AWS: https://youtu.be/MS5pzddwwqU
</details>

## TODOs

- [ ] Find out why CMD+C in docker image doesn't terminate/kill the process/image
- [ ] Docs: Steps of deployment secret key storage
- [ ] Extract headers and meta data from `skeleton.html`
- [ ] Try deno [`WebGPU API`](https://deno.land/posts/v1.8#experimental-support-for-the-webgpu-api)
- [x] Use `deno coverage … --lcov` reports in CI pipeline
- [x] Update & simplify github actions, separating the `build&test` from `gcloud build&deploy`
- [x] Find a way around getting `deno bundle` to include the react library, then ensure `ReactDOM.hydrate` works!
- [ ] Use a decent routing library, like [`abc`](https://deno.land/x/abc) or [`oak`](https://deno.land/x/oak)
- [ ] Create `config.ts` file to include `assetsPath`,… etc
- [ ] Update `skeleton.html` for decent standard content-skeleton (view-port,…)
- [ ] Investigate why in docker image `Compile` on every start, even after `deno cache` in `Dockerfile`
- [ ] Report/fix issue: Deno.fmt doesn't remove unnecessary parentheses, like in `const x = (y);` (deno uses [dprint](https://dprint.dev/playground/#code/MYewdgzgLgBAHjAvDAFARgJQG4BQQ/language/typescript) for formatting)

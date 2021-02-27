# [hossammagdy.dev](https://hossammagdy.dev)

[![CI workflow](https://github.com/hossam-magdy/hossammagdy.dev/workflows/CI/badge.svg)](https://github.com/hossam-magdy/hossammagdy.dev/actions/workflows/ci.yml)

This is my personal website. It is currently doesn't include much of a content. But I use it to experience different technologies. The current tech used:

- Deno
- TypeScript
- JSX & React (SSR + Client hydration)
- Firebase hosting and Cloud Run
- CI/CD via Github Actions (with [`GCP_SA_KEY`](https://cloud.google.com/iam/docs/creating-managing-service-account-keys) as the only secret)

## Run

```sh
# Build local docker image
make docker-build

# Start/run the local docker image
make docker-start

# open: http://localhost:8080

# also: `make docker-test`
```

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
# [OR] make deploy (need local executables: `gcloud` & `firebase`)
```

### Deploy / simulate CI/CD

```sh
# docker build …
make ci-build

# docker run … test
make ci-test

# Deploy the CloudRun docker image & deploy firebase to use the new CloudRun service revision
# `gcloud build …` && `gcloud beta run deploy …` && `firebase deploy …`
make ci-deploy
```

## Refs

<details>
<summary>Ref links</summary>

- Deno chat: [old](https://gitter.im/denolife/Lobby) and [new](https://discord.com/channels/684898665143206084)
- https://firebase.google.com/docs/hosting/cloud-run
- https://cloud.google.com/run/docs/reference/container-contract#port
- https://github.com/hayd/deno-docker
- CLI: firebase: https://firebase.google.com/docs/cli
- CLI: gcloud: https://cloud.google.com/sdk/docs/
- https://console.cloud.google.com/apis/api/run.googleapis.com/overview
- (extra) AWS: https://youtu.be/MS5pzddwwqU
</details>

## TODOs

- [ ] Find out why CMD+C in docker image doesn't terminate/kill the process/image
- [ ] Add few words or description about "firebase + CloudRun", and instructions how to build similar setup
- [ ] Update & simplify github actions, separating the `build&test` from `gcloud build&deploy` from `firebase deploy`
- [ ] Steps of deployment secret key storage
- [x] Find a way around getting `deno bundle` to include the react library, then ensure `ReactDOM.hydrate` works!
- [ ] Use a decent routing library, like [`abc`](https://deno.land/x/abc) or [`oak`](https://deno.land/x/oak)
- [ ] Create `config.ts` file to include `assetsPath`,… etc
- [ ] Update `skeleton.html` for decent standard content-skeleton (view-port,…)
- [ ] Investigate why in docker image `Compile` on every start, even after `deno cache` in `Dockerfile`
- [ ] Report/fix issue: Deno.fmt doesn't remove unnecessary parentheses, like in `const x = (y);` (deno uses [dprint](https://dprint.dev/playground/#code/MYewdgzgLgBAHjAvDAFARgJQG4BQQ/language/typescript) for formatting)


# CLOUDSDK_CORE_DISABLE_PROMPTS=1 # applies "--quiet" to all gcloud commands
IMAGE_TAG?=tmp_hossammagdy_dev
GCLOUD_PROJECT_ID=hossammagdy-dev
GCLOUD_SERVICE=hossammagdy-dev
GCLOUD_REGION=europe-west1
GCLOUD_IMAGE=gcr.io/${GCLOUD_PROJECT_ID}/${GCLOUD_PROJECT_ID}
GCLOUD_MIN_INSTANCES=1
GCLOUD_MAX_INSTANCES=5
CLI_GCLOUD?=gcloud

# Starts deno server (in watch mode)
start:
	@echo "*** Please run 'make bundle' in another terminal ***" && echo
	deno run -c=tsconfig_server.json --import-map=import_map.json --watch -A src/server.tsx

# Bundles client artifacts (in watch mode)
bundle:
	@echo "*** Please run 'make start' in another terminal ***" && echo
	deno bundle -c=tsconfig_client.json --import-map=import_map.json --watch src/client.tsx public/assets/app.js

cache:
	deno cache --import-map=import_map.json src/server.tsx -r

test:
	deno test --import-map=import_map.json -A .

test-coverage:
	rm -rf coverage/
	deno test --coverage=coverage/profile --import-map=import_map.json -A .
	# "import-map" is not yet supported on "coverage" subcommand https://github.com/denoland/deno/issues/10395
	deno coverage --import-map=import_map.json coverage/profile

test-coverage-lcov:
	rm -rf coverage/
	deno test --coverage=coverage/profile/ --import-map=import_map.json -A .
	deno coverage --import-map=import_map.json coverage/profile/ --lcov > coverage/lcov.info

test-coverage-html:
	${MAKE} test-coverage-lcov
	genhtml -o coverage/html/ coverage/lcov.info
	open coverage/html/index.html

############# docker

# Build docker image as the one built in gcloud/CloudRun
docker-build:
	docker build -t ${IMAGE_TAG} .

docker-bash:
	docker run --rm -it -v ${PWD}:/app --entrypoint=/bin/sh ${IMAGE_TAG}

# Run the docker image, closer env/runtime to the one run in CloudRun
docker-start:
	docker run --rm -it -v ${PWD}:/app -p 8080:8080 ${IMAGE_TAG}

############# Deployment

# builds new docker image in: https://gcr.io/hossammagdy-dev/hossammagdy-dev
_gcloud-build:
	${CLI_GCLOUD} \
		builds submit \
		--project=${GCLOUD_PROJECT_ID} \
		--tag=${GCLOUD_IMAGE}

_gcloud-deploy:
	${CLI_GCLOUD} \
		beta run deploy ${GCLOUD_SERVICE} \
		--project=${GCLOUD_PROJECT_ID} \
		--image=${GCLOUD_IMAGE} \
		--region ${GCLOUD_REGION} \
		--min-instances=${GCLOUD_MIN_INSTANCES} \
		--max-instances=${GCLOUD_MAX_INSTANCES} \
		--platform managed

# Deploys to:
# https://hossammagdy.dev
# https://hossammagdy-dev-f6gvibsm2q-ew.a.run.app
deploy: _gcloud-build _gcloud-deploy

############# CI

ci-build: docker-build

ci-test: 
	docker run --rm ${IMAGE_TAG} test --import-map=import_map.json -A

# Generates the `lcov` file from within docker container, but with the same path of host's source code
ci-test-coverage:
	docker run --rm -v ${PWD}:${PWD} -w ${PWD} ${IMAGE_TAG} /bin/sh -c 'rm -rf coverage/ && deno test --coverage=coverage/profile --import-map=import_map.json -A . && deno coverage coverage/profile --lcov > coverage/lcov.info'

ci-deploy: deploy


# CLOUDSDK_CORE_DISABLE_PROMPTS=1 # applies "--quiet" to all gcloud commands
IMAGE_TAG?=tmp_hossammagdy_dev
PROJECT_ID=hossam-magdy
PROJECT_SERVICE=hossammagdy
PROJECT_REGION=europe-west1
GCLOUD?=gcloud
FIREBASE?=firebase # could be "docker run -v ${PWD}:/app -v ${GOOGLE_APPLICATION_CREDENTIALS}:/gac.json -e GOOGLE_APPLICATION_CREDENTIALS=/gac.json -w /app rambabusaravanan/firebase firebase"

# Starts deno server (in watch mode)
start:
	@echo "*** Please run 'make bundle' in another terminal ***" && echo
	deno run -c=tsconfig_server.json --import-map=import_map.json --watch --unstable -A src/server.tsx

# Bundles client artifacts (in watch mode)
bundle:
	@echo "*** Please run 'make start' in another terminal ***" && echo
	deno bundle -c=tsconfig_client.json --import-map=import_map.json --watch --unstable src/client.tsx public/assets/app.js

cache:
	deno cache src/server.tsx -r

test:
	deno test --import-map=import_map.json --unstable -A .

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

_gcloud-build:
	${GCLOUD} builds submit --project ${PROJECT_ID} --tag gcr.io/${PROJECT_ID}/hossammagdy

_gcloud-deploy:
	${GCLOUD} beta run deploy ${PROJECT_SERVICE} --project ${PROJECT_ID} --image gcr.io/${PROJECT_ID}/hossammagdy --region ${PROJECT_REGION} --platform managed

_firebase-deploy:
	echo ${GOOGLE_APPLICATION_CREDENTIALS} && ${FIREBASE} --non-interactive deploy

# Deploys to:
# https://hossammagdy.dev
# https://hossam-magdy.web.app
# https://hossammagdy-yhrmutrvhq-ew.a.run.app
deploy: _gcloud-build _gcloud-deploy _firebase-deploy

############# CI

ci-build: docker-build

ci-test: 
	docker run --rm ${IMAGE_TAG} test --import-map=import_map.json --unstable -A

ci-deploy: deploy

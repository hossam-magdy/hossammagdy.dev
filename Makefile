
IMAGE_TAG?=tmp_hossammagdy_dev
PROJECT_ID=hossam-magdy
PROJECT_SERVICE=hossammagdy
PROJECT_REGION=europe-west1

# Build docker image as the one built in gcloud/CloudRun
build:
	docker build -t ${IMAGE_TAG} .

bash:
	docker run --rm -it -v ${PWD}:/app --entrypoint=/bin/sh ${IMAGE_TAG}

# Run the docker image, closer env/runtime to the one run in CloudRun
run:
	docker run --rm -v ${PWD}:/app -p 8080:8080 ${IMAGE_TAG}

# Starts dev env: TODO: use denon
start:
	deno run -A src/index.ts

############# Deployment

_gcloud-build:
	gcloud builds submit --tag gcr.io/${PROJECT_ID}/hossammagdy

_gcloud-deploy:
	gcloud beta run deploy ${PROJECT_SERVICE} --image gcr.io/${PROJECT_ID}/hossammagdy --region ${PROJECT_REGION} --platform managed

_firebase-deploy:
	firebase deploy

# Deploys to:
# https://hossammagdy.dev
# https://hossam-magdy.web.app
# https://hossammagdy-yhrmutrvhq-ew.a.run.app
deploy: _gcloud-build _gcloud-deploy _firebase-deploy

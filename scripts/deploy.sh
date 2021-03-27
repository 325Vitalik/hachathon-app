#!/bin/bash

echo "$DOCKER_PASSWORD" | docker login -u "$DOCKER_ID" --password-stdin

docker tag api:latest $DOCKER_ID/api:latest
docker tag client:latest $DOCKER_ID/client:latest

docker push $DOCKER_ID/api:latest
docker push $DOCKER_ID/client:latest
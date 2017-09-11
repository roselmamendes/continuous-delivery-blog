[![CircleCI](https://circleci.com/gh/roselmamendes/continuous-delivery-blog.svg?style=svg)](https://circleci.com/gh/roselmamendes/continuous-delivery-blog)
# Continuous Delivery Blog

No, it is not a blog to talk about CD. But I am gonna use this repository as an example to write about CD.
:P

## What do you need in order to run it

- Docker

### Important Commands

Build the Docker image: `docker build -t cd-blog .`

`docker run -it --rm -v "$PWD":/usr/src/app -t cd-blog /bin/bash`

Run all tests: `docker run -it --rm -v "$PWD":/usr/src/app -w /usr/src/app -t cd-blog npm run all-tests-local`

Run unit tests: `docker run -it --rm -v "$PWD":/usr/src/app -w /usr/src/app -t cd-blog npm run test-local`

Dependency checks: `docker run -it --rm -v "$PWD":/usr/src/app -w /usr/src/app -t cd-blog npm run dependency-check-local`

Security Static Analisys: `docker run -it --rm -v "$PWD":/usr/src/app -w /usr/src/app -t cd-blog npm run sec-static-analysis-local`

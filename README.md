[![CircleCI](https://circleci.com/gh/roselmamendes/continuous-delivery-blog.svg?style=svg)](https://circleci.com/gh/roselmamendes/continuous-delivery-blog)
# Continuous Delivery Blog

No, it is not a blog to talk about CD. But I am gonna use this repository as an example to write about CD.
:P

## What do you need in order to run it

- Docker

### Important Commands

Build the Docker image: `docker build -t cd-blog .`

`docker run -it --rm -v "$PWD":/usr/src/app -t cd-blog /bin/bash`

Run webpack: `sh cd-blog.sh b`

Run the app: `sh cd-blog.sh s` and access http://localhost:5000

Run all tests: `sh cd-blog.sh tests`

Run unit tests: `sh cd-blog.sh ut`

Dependency checks: `sh cd-blog.sh dc`

Security Static Analisys: `sh cd-blog.sh ssa`

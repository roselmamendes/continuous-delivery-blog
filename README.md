# Continuous Delivery Blog

No, it is not a blog to talk about CD. But I am gonna use this repository as an example to write about CD.
:P

## What do you need to run it

- Docker

### Important Commands

Build the Docker image: `docker build -t cd-blog .`

`docker run -it --rm -v "$PWD":/usr/src/app -t cd-blog /bin/bash`

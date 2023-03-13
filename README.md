# docker netlify-cli example

This repo serves as a minimal setup for using netlify-cli in a docker container to showcase inconsistencies on M1 Macs when attempting to build or deploy with edge functions.

See https://github.com/williamjacksn/docker-netlify-cli

Possibly related: "You have to use a third-party Docker container if you want to use Docker locally and develop on an M1 Mac" and "they also can't produce musl libc binaries - so no alpine linux either." https://news.ycombinator.com/item?id=34768122

## Replicating the Problem on M1

The "netlify/" directory contains a basic edge function taken from [get started](https://docs.netlify.com/edge-functions/get-started/) in the netlify documentation.

The docker-compose.yml file defines a netlify-cli service based on the [ghcr.io/williamjacksn/netlify-cli:13.1.1](https://github.com/williamjacksn/docker-netlify-cli/pkgs/container/netlify-cli) image and is set to linux/amd64 to accommodate Deno. However, this setting unfortunately doesn't make a difference.

The NETLIFY_SITE_ID and NETLIFY_AUTH_TOKEN environment variables should be provided or added to the docker-compose.yml file.

Building and deploying the example using the netlify-cli in docker should work on all platforms.

However, using netlify-cli in docker to build ~~and deploy~~ fails on my Mac M1 while bundling edge functions.

Here is the output when executing `netlify deploy` (NOTE: no longer failing with netlify-cli 13.1.3):

![image](https://user-images.githubusercontent.com/219448/224598468-dfa8aa52-ab57-4a2c-88fe-e21101781308.png)

Here is the output when executing `netlify build`:

![image](https://user-images.githubusercontent.com/219448/224591786-afd8c1cc-cc0a-4baa-a4c7-32fde35fe58a.png)





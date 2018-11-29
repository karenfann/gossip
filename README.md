# gossip

## Commands
`make build`
* Builds docker image, tagged `karenfann/gossip`

` make run`
* Runs webpack-dev-server on port 8080

`make down`
* kills the docker-compose network

## Installing a new Node Module
* install the module locally `npm i -S <module>`
* run `make down` to stop docker
* run `make build` to rebuild the docker image with new node module
* run `make run`

## If node modules still aren't there in docker
* enter docker container with `docker exec -it $(docker ps -lq) sh`
* run `npm install`

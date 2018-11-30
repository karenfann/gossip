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

## Store
```
{
    User: {
        location: {
            latitude: null,
            longitude: null,
        },
        _internal: {
            loading: false,
            error: false
        },
        text: null
    },
    Gossip: {
        gossips: [],
        _internal: {
            loading: false,
            error: false
        }
    }
}
```


## Actions

## Fetch User's Location
```js
import actions from 'actions'

const { userActions } = actions
dispatch(userActions.fetchLocation())
```

### Create a new Gossip (should be done after user's location is fetched)
```js
import actions from 'actions'

const { gossipActions } = actions
dispatch(gossipActions.createGossip(text))
```

### Fetch Gossips within range
```js
import actions from 'actions'

const { gossipActions } = actions
dispatch(gossipActions.fetchGossip(radius))
```
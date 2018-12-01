import { 
    POST_GOSSIP_START, POST_GOSSIP_SUCCESS, POST_GOSSIP_ERROR,
    GET_GOSSIP_START, GET_GOSSIP_SUCCESS, GET_GOSSIP_ERROR 
} from '../constants/gossip'
import { postGossip, getGossip } from './firestoreActions'

const createGossip = text => {
    return async (dispatch, getState) => {
        dispatch({
            type: POST_GOSSIP_START
        })
        try {
            const { User } = getState()
            if (!(User.location.latitude && User.location.longitude)) {
                throw new Error('User location is not set')
            }

            await postGossip(text, User.location) 
            dispatch({
                type: POST_GOSSIP_SUCCESS
            })
        } catch (err) {
            dispatch({
                type: POST_GOSSIP_ERROR,
                error: err.message
            })
        }
    }
}

const fetchGossip = (radius) => {
    return async (dispatch, getState) => {
        dispatch({
            type: GET_GOSSIP_START
        })
        try {
            const { User } = getState()
            if (!(User.location.latitude && User.location.longitude)) {
                throw new Error('User location is not set')
            }

            let gossip = await getGossip(User.location, radius)
            dispatch({
                type: GET_GOSSIP_SUCCESS,
                gossip: gossip
            })
        } catch (err) {
            dispatch({
                type: GET_GOSSIP_ERROR,
                error: err.message
            })
        }
    }
}

export {
    createGossip,
    fetchGossip,
}

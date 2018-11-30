import { 
    POST_GOSSIP_START, POST_GOSSIP_SUCCESS, POST_GOSSIP_ERROR,
    GET_GOSSIP_START, GET_GOSSIP_SUCCESS, GET_GOSSIP_ERROR 
} from '../constants/gossip'

const initialState = {
    gossips: [],
    _internal: {
        loading: false,
        error: false
    }
}

const Gossip = (state=initialState, action) => {
    switch (action.type) {
        case POST_GOSSIP_START:
            return {
                ...state,
                _internal: {
                    error: false,
                    loading: true
                }
            }
        case POST_GOSSIP_SUCCESS:
            return {
                ...state,
                _internal: {
                    loading: false,
                    error: false
                }
            }
        case POST_GOSSIP_ERROR:
            return {
                ...state,
                _internal: {
                    loading: false,
                    error: action.error
                }
            }
        case GET_GOSSIP_START:
            return {
                ...state,
                _internal: {
                    error: false,
                    loading: true
                }
            }
        case GET_GOSSIP_SUCCESS:
            return {
                ...state,
                _internal: {
                    loading: false,
                    error: false
                }
            }
        case GET_GOSSIP_ERROR:
            return {
                ...state,
                _internal: {
                    loading: false,
                    error: action.error
                }
            }
        default:
            return state

    }
}

export default Gossip

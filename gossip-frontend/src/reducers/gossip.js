import {
    POST_GOSSIP_START, POST_GOSSIP_SUCCESS, POST_GOSSIP_ERROR,
    GET_GOSSIP_START, GET_GOSSIP_SUCCESS, GET_GOSSIP_ERROR, 
    POST_COMMENT_SUCCESS, POST_COMMENT_START, POST_COMMENT_ERROR,
    UPDATE_REACT_START, UPDATE_REACT_SUCCESS, UPDATE_REACT_ERROR
} from '../constants/gossip'

const initialState = {
    gossip: [],
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
                gossip: [...state.gossip, action.gossip],
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
                gossip: action.gossip,
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
        case POST_COMMENT_START:
            return {
                ...state,
                _internal: {
                    error: false,
                    loading: true
                }
            }
        case POST_COMMENT_SUCCESS:
            const filtered = state.gossip.filter(g => g.id !== action.gossip.id)
            filtered.push(action.gossip)

            return {
                gossip: filtered,
                _internal: {
                    loading: false,
                    error: false
                }
            }
        case POST_COMMENT_ERROR:
            return {
                ...state,
                _internal: {
                    loading: false,
                    error: action.error
                }
            }
        case UPDATE_REACT_START:
            return {
                ...state,
                _internal: {
                    error: false,
                    loading: true
                }
            }
        case UPDATE_REACT_SUCCESS:
            return {
                ...state,
                _internal: {
                    loading: false,
                    error: false
                }
            }
        case UPDATE_REACT_ERROR:
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

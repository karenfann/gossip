import { FETCH_LOCATION_START, FETCH_LOCATION_SUCCESS, FETCH_LOCATION_ERROR } from '../constants/user'

const initialState = {
    location: {
        latitude: null,
        longitude: null,
    },
    _internal: {
        loading: false,
        error: false
    },
    text: null
}

const User = (state=initialState, action) => {
    switch (action.type) {
        case FETCH_LOCATION_START:
            return {
                ...state,
                _internal: {
                    error: false,
                    loading: true,
                }
            }
        case FETCH_LOCATION_SUCCESS: 
            return {
                ...state,
                _internal: {
                    error: false,
                    loading: false
                },
                location: {
                    latitude: action.position.latidude,
                    longitude: action.position.longitude
                }
            }
        case FETCH_LOCATION_ERROR:
            return {
                location: null,
                text: null,
                _internal: {
                    loading: false,
                    error: true
                }
            }
        default:
          return state
    }
}

export default User

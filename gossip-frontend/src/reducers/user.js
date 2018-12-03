import { FETCH_LOCATION_START, FETCH_LOCATION_SUCCESS, FETCH_LOCATION_ERROR } from '../constants/user'

const initialState = {
    location: {
        latitude: null,
        longitude: null,
    },
    _internal: {
        loading: false,
        error: false,
        fetched: false
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
                    fetched: false
                }
            }
        case FETCH_LOCATION_SUCCESS: 
            return {
                ...state,
                _internal: {
                    error: false,
                    loading: false,
                    fetched: true
                },
                location: {
                    latitude: action.position.latitude,
                    longitude: action.position.longitude
                }
            }
        case FETCH_LOCATION_ERROR:
            return {
                location: null,
                text: null,
                _internal: {
                    loading: false,
                    error: true,
                    fetched: false
                }
            }
        default:
          return state
    }
}

export default User

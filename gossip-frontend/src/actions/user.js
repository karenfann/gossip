import { FETCH_LOCATION_START, FETCH_LOCATION_SUCCESS, FETCH_LOCATION_ERROR } from '../constants/user'

const successHandler = (position, dispatch) => {
    dispatch({
        type: FETCH_LOCATION_SUCCESS,
        position: {
            longitude: position.coords.longitude,
            latitude: position.coords.latitude
        }
    })
}

const errorHandler = dispatch => {
    dispatch({
        type: FETCH_LOCATION_ERROR
    })
}

const fetchLocation = () => {
    return dispatch => {
        dispatch({
            type: FETCH_LOCATION_START
        })

        navigator.geolocation.getCurrentPosition(
            position => successHandler(position, dispatch),
            () => errorHandler(dispatch)
        )
    }
}

export {
    fetchLocation
}

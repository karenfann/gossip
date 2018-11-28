import { FETCH_LOCATION_START, FETCH_LOCATION_SUCCESS, FETCH_LOCATION_ERROR } from '../constants/user'

const successHandler = (position, dispatch) => {
    console.log(position)
    dispatch({
        type: FETCH_LOCATION_SUCCESS,
        position: {
            longitude: position.coords.longitude,
            latitude: position.coords.latitude
        }
    })
}

const errorHandler = dispatch => {
    console.log('HERE')
    dispatch({
        type: FETCH_LOCATION_ERROR
    })
}

const fetchLocation = () => {
    return dispatch => {
        console.log('we are here')
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

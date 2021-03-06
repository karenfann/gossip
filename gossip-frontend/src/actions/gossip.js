import {
    POST_GOSSIP_START, POST_GOSSIP_SUCCESS, POST_GOSSIP_ERROR,
    GET_GOSSIP_START, GET_GOSSIP_SUCCESS, GET_GOSSIP_ERROR,
    POST_COMMENT_START, POST_COMMENT_SUCCESS, POST_COMMENT_ERROR,
    UPDATE_REACT_START, UPDATE_REACT_SUCCESS, UPDATE_REACT_ERROR
} from '../constants/gossip'
import { postGossip, getGossips, updateReact, postComment } from './firestoreActions'

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

            const newGossip = await postGossip(text, User.location)
            const newData = await newGossip.get()
            dispatch({
                type: POST_GOSSIP_SUCCESS,
                gossip: newData
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

            let gossip = await getGossips(User.location, radius)
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

const postCommentOnPost = (postId, commentText) => {
    return async (dispatch) => {
        dispatch({
            type: POST_COMMENT_START
        })
        try {
            const gossipPromise = await postComment(postId, commentText)
            const gossipData = await gossipPromise
            dispatch({
                type: POST_COMMENT_SUCCESS,
                gossip: gossipData
            })
        } catch (err) {
            dispatch({
                type: POST_COMMENT_ERROR,
                error: err.message
            })
        }
    }
}

const updatePostReact = (docID, react = true) => {
    return async (dispatch) => {
        dispatch({
            type: UPDATE_REACT_START
        })
        try {
            await updateReact(docID, react)
            dispatch({
            type: UPDATE_REACT_SUCCESS
            })
        } catch (err) {
            dispatch({
                type: UPDATE_REACT_ERROR,
                error: err.message
            })
        }
    }
}

export {
    createGossip,
    fetchGossip,
    postCommentOnPost, 
    updatePostReact
}

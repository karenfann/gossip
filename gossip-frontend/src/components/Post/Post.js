import React from 'react'
import { connect } from 'react-redux'

import actions from '../../actions'
import './Post.scss'

import CommentSection from '../CommentSection'
import computeRadius from '../../helpers/MathHelpers'

class Post extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            showComments: false,
            reacted: false,
            positive_reacts: this.props.gossip.data().positive_reacts,
            negative_reacts: this.props.gossip.data().negative_reacts
        }
        this.toggleComments = this.toggleComments.bind(this)
        this.handleReact = this.handleReact.bind(this)
    }

    toggleComments = () => {
        this.setState(prevState => {
            return {showComments: !prevState.showComments}
        })
    }

    handleReact = (react) => {
        const { gossip } = this.props
        const { id }  = gossip
        if (!this.state.reacted) {
            this.props.updatePostReact(id, react)
            this.setState(prevState => ({
                reacted: true,
                positive_reacts: react ? prevState.positive_reacts + 1 : prevState.positive_reacts,
                negative_reacts: react ? prevState.negative_reacts : prevState.negative_reacts + 1
            }))
        }
    }

    render() {
        const { 
            text,
            comments, 
            timestamp, 
            location
        } = this.props.gossip.data()
        const {
            positive_reacts, 
            negative_reacts
        } = this.state
        
        // Calculate location
        const postDistance = computeRadius(this.props.userLocation.latitude, this.props.userLocation.longitude, location.latitude, location.longitude);   
        
        // format timestamp
        const t = new Date(1970, 0, 1) // Epoch
        t.setSeconds(timestamp.seconds)

        // Get all posts
        return (
            <div className="post">
                <div className="post-header">
                    <div className="post-timestamp-wrapper">
                        <h5 className="post-timestamp">{t.toDateString()}</h5>
                    </div>
                    <div className="post-distance-wrapper">
                        <h5 className="post-distance">{postDistance} mi</h5>
                    </div>
                </div>
                <p className="post-message">{text}</p>
                <div className="post-footer">
                    <div className="post-react">
                        <button className="react-button" onClick={() => this.handleReact(true)}>
                            <span className="react-icon">👍</span>
                            {positive_reacts}
                        </button>
                        <button className="react-button" onClick={() => this.handleReact(false)}>
                            <span className="react-icon">👎</span>
                            {negative_reacts}
                        </button>
                    </div>
                    <div className="post-comment-toggle" onClick={this.toggleComments}>
                        <h5>Comments ({comments.length})</h5>
                    </div>
                </div>
                { this.state.showComments && 
                    <CommentSection comments={comments}/>
                }
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => {
    const { gossipActions } = actions
    return {
        updatePostReact: (docId, react) => {
            return dispatch(gossipActions.updatePostReact(docId, react))
        }  
    }
}

export default connect(null, mapDispatchToProps)(Post)

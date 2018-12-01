import React from 'react'
import './Post.scss'

import CommentSection from '../CommentSection'
import computeRadius from '../../helpers/MathHelpers'

class Post extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            showComments: false,
            reacted: false
        }
        this.toggleComments = this.toggleComments.bind(this)
        this.handleLike = this.handleLike.bind(this)
        this.handleDislike = this.handleDislike.bind(this)
        this.handleReact = this.handleReact.bind(this)
    }

    toggleComments = () => {
        this.setState(prevState => {
            return {showComments: !prevState.showComments}
        })
    }

    handleLike = () => {
        if (!this.state.reacted) {
            console.log('liked')
            this.handleReact()
        }
    }

    handleDislike = () => {
        if (!this.state.reacted) {
            console.log('disliked')
            this.handleReact()
        }
    }

    handleReact = () => {
        this.setState({
            reacted: true
        })
    }

    render() {
        const { 
            text,
            comments, 
            positive_reacts, 
            negative_reacts, 
            timestamp, 
            location 
        } = this.props.gossip.data()
        console.log(this.props.userLocation)
        
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
                        <button className="react-button" onClick={this.handleLike}>
                            <span className="react-icon">👍</span>
                            {positive_reacts}
                        </button>
                        <button className="react-button" onClick={this.handleDislike}>
                            <span className="react-icon">👎</span>
                            {negative_reacts}
                        </button>
                    </div>
                    <div className="post-comment-toggle" onClick={this.toggleComments}>
                        <h5>Comments</h5>
                    </div>
                </div>
                { this.state.showComments && 
                    <CommentSection comments={comments}/>
                }
            </div>
        )
    }
}

export default Post
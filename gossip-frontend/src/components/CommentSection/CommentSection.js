import React from 'react'
import './CommentSection.scss'

class CommentSection extends React.Component {
    render() {
        return (
            <div className="post-comment-section">
                <div className="post-comments">{this.props.comments}</div>
            </div>
        )
    }
}

export default CommentSection
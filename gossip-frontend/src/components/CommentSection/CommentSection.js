import React from 'react'
import './CommentSection.scss'

import CommentInput from '../CommentInput'

class CommentSection extends React.Component {
    render() {
        let comments = this.props.comments.map(text => {
            return (
                <div className="post-comment">
                    {text}
                </div>
            )
        })
        return (
            <div className="post-comment-section">
                <div className="post-comments">{comments}</div>
                <CommentInput docId={this.props.docId}/>
            </div>
        )
    }
}

export default CommentSection
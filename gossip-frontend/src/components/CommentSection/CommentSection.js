import React from 'react'
import './CommentSection.scss'

import CommentInput from '../CommentInput'

class CommentSection extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            displayedComments: this.props.comments
        }
        this.handleNewComment = this.handleNewComment.bind(this);
    }

    handleNewComment() {
        this.setState({
            displayedComments: this.props.comments
        })
    }

    render() {
        let comments = this.state.displayedComments.map(text => {
            return (
                <div className="post-comment">
                    {text}
                </div>
            )
        })
        return (
            <div className="post-comment-section">
                <div className="post-comments">{comments}</div>
                <CommentInput docId={this.props.docId} handleNewComment={this.handleNewComment}/>
            </div>
        )
    }
}

export default CommentSection
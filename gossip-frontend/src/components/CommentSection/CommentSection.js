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

    handleNewComment(comment) {
        this.setState(prevState => ({
            displayedComments: prevState.displayedComments.concat(comment)
        }))
    }

    render() {
        let comments = this.state.displayedComments.map(text => {
            return (
                <p className="post-comment">
                    {text}
                </p>
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
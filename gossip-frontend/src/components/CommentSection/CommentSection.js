import React from 'react'
import './CommentSection.scss'

import CommentInput from '../CommentInput'

class CommentSection extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            displayedComments: this.props.comments
        }
    }

    componentWillReceiveProps(nextProps){
        if (nextProps.comments !== this.props.comments) {
            this.setState({ displayedComments: nextProps.comments })
        }
    } 

    render() {
        let comments = this.state.displayedComments.map((text, index) => {
            return (
                <p className="post-comment" key={index + text}>
                    {text}
                </p>
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
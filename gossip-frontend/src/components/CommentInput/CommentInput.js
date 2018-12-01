import React from 'react'
import { connect } from 'react-redux'

import './CommentInput.scss'
import actions from '../../actions'

class CommentInput extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            value: ""
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleClick = this.handleClick.bind(this)
    }

    handleChange = e => {
        this.setState({
            value: e.target.value
        })
    }

    handleClick = () => {
        let comment = this.state.value.trim();

        if (comment.length) {
            this.props.postCommentOnPost(this.props.docId, comment);
            this.setState({
                value: ""
            })
            this.props.handleNewComment()
        }
    }

    render() {
        return (
            <div>
                <textarea className="commentInput" placeholder="thoughts?" value={this.state.value} onChange={this.handleChange}></textarea>
                <button className="commentSubmit" onClick={this.handleClick}>post</button>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => {
    const { gossipActions } = actions
    return {
        postCommentOnPost: (docId, text) => {
            dispatch(gossipActions.postCommentOnPost(docId, text));
        }
    }
}

export default connect(null, mapDispatchToProps)(CommentInput)

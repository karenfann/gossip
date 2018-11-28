import React from 'react'
import './Post.scss'

import Comment from '../Comment'

class Post extends React.Component {
    render() {
        const comments = this.props.comments.map(comment => (
            <Comment text={comment}/>
        ));
        return (
            <div className="post">
                <div className="post-header">
                    <div className="post-timestamp-wrapper">
                        <h5 className="post-timestamp">Nov 28 9:32 pm</h5>
                    </div>
                    <div className="post-distance-wrapper">
                        <h5 className="post-distance">1.2 mi</h5>
                    </div>
                </div>
                <p className="post-message">hi this is fake gossip</p>
                <div className="post-footer">
                    <div className="post-react">
                        <button className="react-like">👍</button>
                        <button className="react-dislike">👎</button>
                    </div>
                    <div className="post-comment-toggle">
                        <h5>Comments</h5>
                    </div>
                </div>
                {/* <div className="post-comment-section">
                    <p>Comments</p>
                    <div className="post-comments">{comments}</div>
                </div> */}
            </div>
        )
    }
}

export default Post
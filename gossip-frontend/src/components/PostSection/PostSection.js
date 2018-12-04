import React from 'react'

import './PostSection.scss'
import Post from '../Post'

class PostSection extends React.Component {

    render() {
        const compareFunction = (a, b) => {
            let a_popularity = a.data().comments.length + a.data().negative_reacts + a.data().positive_reacts
            let b_popularity = b.data().comments.length + b.data().negative_reacts + b.data().positive_reacts
            if (a_popularity <= b_popularity) {
                if (this.props.sortBy == "least") return -1
                else return 1
            }
            else if (a_popularity > b_popularity) {
                if (this.props.sortBy == "least") return 1
                else return -1
            }
            else return 0
        }

        const gossips = this.props.gossips.sort(compareFunction).map(gossip => 
            <Post key={gossip.data().timestamp} gossip={gossip} userLocation={this.props.userLocation}/>
        )

        return (
            <section className="gossip-posts">
                {gossips}
            </section>
        )
    }
}

export default PostSection
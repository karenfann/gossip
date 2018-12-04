import React from 'react'

import './PostSection.scss'
import Post from '../Post'

class PostSection extends React.Component {

    render() {
        const compareFunction = (a, b) => {
            let a_popularity = a.comments.length + a.negative_reacts + a.positive_reacts
            let b_popularity = b.comments.length + b.negative_reacts + b.positive_reacts
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
            <Post key={gossip.timestamp.seconds} gossip={gossip} userLocation={this.props.userLocation}/>
        )

        return (
            <section className="gossip-posts">
                {gossips}
            </section>
        )
    }
}

export default PostSection

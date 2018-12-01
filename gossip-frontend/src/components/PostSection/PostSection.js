import React from 'react'

import './PostSection.scss'
import Post from '../Post'

class PostSection extends React.Component {
    render() {
        const gossips = this.props.gossips.map(gossip => 
            <Post gossip={gossip} userLocation={this.props.userLocation}/>
        )

        return (
            <section className="gossip-posts">
                {gossips}
            </section>
        )
    }
}

export default PostSection
import React from 'react';
import { connect } from 'react-redux'

import actions from './actions'
import './index.scss'

/* COMPONENTS */
import Dropdown from './components/Dropdown'
import Input from './components/Input'
import Post from './components/Post'
import PostSection from './components/PostSection'

const radiusOptions = ["0.5", "1", "2"];
const popularityOptions = ["Least Popular", "Most Popular"];
const comments = ["hi", "hello", "hey"];

class Home extends React.Component {
    constructor(props) {
        super(props)
        props.fetchLocation()

        this.state = {
            sortBy: "least"
        }
    }

    componentDidUpdate(prevProps) {
        if (!prevProps.fetched && this.props.fetched) {
            this.props.fetchGossip(2)
        }
    }

    handleRadiusChange = (e) => {
        this.props.fetchGossip(e.target.value)
    }

    handleSortByChange = (e) => {
        this.setState({
            sortBy: e.target.value == "Least Popular" ? "least" : "most"
        })
    }

    render() {
        return (
        <div className="App">
            <header className="App-header">
                <h1 className="gossip-title">
                    <i>gossip.</i>
                </h1>
                <p className="arrow-down">↓</p>
            </header>
            <section className="gossip-input">
                <Input/>
            </section>
            <section className="gossip-filters">
                <Dropdown filterType="radius" default="2" unit="mi" options={radiusOptions} onChange={this.handleRadiusChange}/>
                <Dropdown filterType="sort by" options={popularityOptions} onChange={this.handleSortByChange}/>
            </section>
            {this.props.gossips.length ? 
                <PostSection gossips={this.props.gossips} userLocation={this.props.location} sortBy={this.state.sortBy}/> :
                <div className="lds-ring"><div></div><div></div><div></div><div></div></div>
            }
        </div>
        );
    }
}

const mapStateToProps = state => {
    const { User, Gossip } = state
    return {
        fetched: User._internal.fetched,
        gossips: Gossip.gossip,
        location: User.location
    }
}

const mapDispatchToProps = dispatch => {
    const { userActions, gossipActions } = actions
    return {
        fetchLocation: () => {
            return dispatch(userActions.fetchLocation())
        },
        fetchGossip: (radius) => {
            dispatch(gossipActions.fetchGossip(radius))
        },        

        // TODO: remove!!
        postCommentOnPost: (postId, commentText) => {
            dispatch(gossipActions.postCommentOnPost(postId, commentText))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)

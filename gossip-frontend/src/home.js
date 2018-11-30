import React from 'react';
import { connect } from 'react-redux'

import actions from './actions'
import './index.scss'

/* COMPONENTS */
import Dropdown from './components/Dropdown'
import Input from './components/Input'
import Post from './components/Post'

const radiusOptions = ["0.5 miles", "1 mile", "2 miles"];
const popularityOptions = ["Least Popular", "Most Popular"];
const comments = ["hi", "hello", "hey"];

class Home extends React.Component {
    constructor(props) {
        super(props)
    }
    componentDidMount() {
        this.props.fetchLocation()
    }
    render() {
        console.log(this.props)
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
                <Dropdown filterType="radius" options={radiusOptions}/>
                <Dropdown filterType="sort by" options={popularityOptions}/>
            </section>
            <section className="gossip-posts">
                <Post comments={comments}/>
                <Post comments={comments}/>
                <Post comments={comments}/>
                <Post comments={comments}/>
                <Post comments={comments}/>
                <Post comments={comments}/>
                <Post comments={comments}/>
                <Post comments={comments}/>
                <Post comments={comments}/>
            </section>
        </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        ...state
    }
}

const mapDispatchToProps = dispatch => {
    const { userActions } = actions
    return {
        fetchLocation: () => {
            dispatch(userActions.fetchLocation())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)

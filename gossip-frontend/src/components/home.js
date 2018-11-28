import React from 'react';
import { render } from 'react-dom';
import { connect } from 'react-redux'

import {fetchLocation} from '../actions/user'


class HomeScreen extends React.Component {
    componentDidMount() {
        this.props.fetchLocation()
    }

    render() {
        return (
            <h1>Gossip Bro!</h1>
        );
    }
}

const mapStateToProps = state => {
    return {
        ...state
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchLocation: () => {
            dispatch(fetchLocation())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen)

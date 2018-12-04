import React from 'react'
import { connect } from 'react-redux'

import actions from '../../actions'

import './Input.scss'

class Input extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            value: ""
        }
        this.handleValueChange = this.handleValueChange.bind(this)
        this.handleClick = this.handleClick.bind(this)
    }

    handleValueChange = e => {
        this.setState({
            value: e.target.value
        })
    }

    handleClick = () => {
        let gossip = this.state.value.trim()
        if (gossip.length) {
            this.props.createGossip(gossip)
            this.setState({
                value: ""
            })
        }
    }

    render() {

        return (
            <div className="input-wrapper">
                <button className="form-button" type="button" onClick={this.handleClick}>submit</button>
                <div className="form-input-wrapper">
                    <input className="form-input" placeholder="spill the tea" onChange={this.handleValueChange} value={this.state.value}/>
                </div>
            </div>
        );
    }
}

const mapDispatchToProps = dispatch => {
    const { gossipActions } = actions
    return {
        createGossip: (text) => {
            return dispatch(gossipActions.createGossip(text))
        }
    }
}

export default connect(null, mapDispatchToProps)(Input)

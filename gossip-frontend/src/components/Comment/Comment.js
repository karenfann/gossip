import React from 'react'
import { render } from 'react-dom'
import './Comment.scss'

class Comment extends React.Component {
    render() {
        return <p>{this.props.text}</p>;
    }
}

export default Comment
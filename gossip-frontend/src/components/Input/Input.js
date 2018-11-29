import React from 'react'
import { render } from 'react-dom'

import './Input.scss'

class Input extends React.Component {
    render() {
        return (
            <div className="input-wrapper">
                <button className="form-button" type="button">submit</button>
                <div className="form-input-wrapper">
                    <input className="form-input" placeholder="spill the tea" />
                </div>
            </div>
        );
    }
}

export default Input;
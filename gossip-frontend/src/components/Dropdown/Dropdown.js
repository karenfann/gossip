import React from 'react'
import { render } from 'react-dom'

import './Dropdown.scss'

class Dropdown extends React.Component {
    render() {
        const options = this.props.options.map(option => (
            <option value={option}>{option}</option>
        ))

        return (
            <select className="dropdown-select">
                <option value="default">{this.props.filterType}</option>
                {options}
            </select>
        );
    }
}

export default Dropdown
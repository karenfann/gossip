import React from 'react'

import './Dropdown.scss'

class Dropdown extends React.Component {
    render() {
        const options = this.props.options.map(option => (
            <option value={option} key={option}>{option}</option>
        ))

        return (
            <select className="dropdown-select" onChange={this.props.handleValueChange} defaultValue="radius">
                {options}
            </select>
        );
    }
}

export default Dropdown
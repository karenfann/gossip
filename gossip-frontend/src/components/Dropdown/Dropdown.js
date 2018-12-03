import React from 'react'

import './Dropdown.scss'

class Dropdown extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            value: this.props.default
        }
    }

    handleValueChange = (e) => {
        this.props.onChange(e)
        this.setState({
            value: e.target.value
        })
    }

    render() {
        const options = this.props.options.map(option => {
            const text = option + " " + (this.props.unit ? this.props.unit : '')
            return (
                <option value={option} key={option}>{text}</option>
            )
        })

        return (
            <select className="dropdown-select" onChange={this.handleValueChange} value={this.state.value} >
                {options}
            </select>
        );
    }
}

export default Dropdown

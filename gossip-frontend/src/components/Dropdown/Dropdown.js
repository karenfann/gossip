import React from 'react'

import './Dropdown.scss'

class Dropdown extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            value: this.props.default
        }
        this.handleValueChange = this.handleValueChange.bind(this)
    }

    handleValueChange = (e) => {
        this.props.onChange(e)
        console.log(e)
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

        console.log(this.props)

        return (
            <select className="dropdown-select" onChange={this.handleValueChange} value={this.state.value} >
                {options}
            </select>
        );
    }
}

export default Dropdown
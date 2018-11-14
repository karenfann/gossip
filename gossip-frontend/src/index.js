import React from 'react'
import { render } from 'react-dom'

class Home extends React.Component {
  render() {
    return (
      <div className='main'>
        <h1>Hello Father</h1>
      </div>
    )
  }
}

render(<Home />, document.getElementById('mount'))

import React from 'react'
import { render } from 'react-dom'
import './index.scss'

/* COMPONENTS */
import Dropdown from './components/Dropdown'
import Input from './components/Input'
import Post from './components/Post'

const radiusOptions = ["0.5 miles", "1 mile", "2 miles"];
const popularityOptions = ["Least Popular", "Most Popular"];
const comments = ["hi", "hello", "hey"];

class Home extends React.Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="bounce">
            <i>gossip.</i>
          </h1>
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
        </section>
      </div>
    );
  }
}

render(<Home />, document.getElementById('mount'))

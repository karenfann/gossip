import React, { Component } from 'react';
import './App.css';
import firebase from "firebase/app";

const config = {
    apiKey: "AIzaSyA8JK0NeMnrbHoFD0GEndZ1_K7njoWg2kg",
    authDomain: "gossip-8188d.firebaseapp.com",
    databaseURL: "https://gossip-8188d.firebaseio.com",
    projectId: "gossip-8188d",
    storageBucket: "gossip-8188d.appspot.com",
    messagingSenderId: "23354869566"
};

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="bounce">
            <i>gossip.</i>
          </h1>
        </header>
      </div>
    );
  }
}

export default App;

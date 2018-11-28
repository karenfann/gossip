import React from 'react';
import { render } from 'react-dom';
import HomeScreen from './components/home';
import firebase from './config';

class Home extends React.Component {
    constructor() {
        super()

        this.state = {
            speed: 10
        }
    }

    fetchDocumentProperty(){

        const db = firebase.firestore();
        db.settings({timestampsInSnapshots: true});
        let gossips = db.collection('gossips');
        gossips.get().then(snapshot => {
            snapshot.forEach(doc => {
                console.log( doc.data().text );
            })
        })
    }

    fetchAllDocuments(){
        const db = firebase.firestore();
        db.settings({timestampsInSnapshots: true});
        db.collection("gossips").get().then(function(querySnapshot) {
    querySnapshot.forEach(function(doc) {
        // doc.data() is never undefined for query doc snapshots
        console.log(doc.id, " => ", doc.data());
        });
    });
    }

    render() {
        return (
          <div className='main'>
            <h1>The value is {this.state.speed}</h1>
            {this.fetchDocumentProperty()}
            {this.fetchAllDocuments()}
          </div>
    );
  }
}


render(<Home />, document.getElementById('mount'))

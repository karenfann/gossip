import React from 'react'
import { render } from 'react-dom'
import firebase from 'firebase'
import { getGossip } from '../../actions/firestoreActions'

import './Input.scss'

class Input extends React.Component {
    render() {

        return (
            <div className="input-wrapper">
                <button className="form-button" 
                        type="button" 
                        onClick={ () => {
                            getGossip(new firebase.firestore.GeoPoint(34.0650788, -118.4502537), 100)
                            .then(responsesInRange => {
                                console.log("Got allll the gossip: ", responsesInRange)
                            })
                        }}>submit</button>
                <div className="form-input-wrapper">
                    <input className="form-input" placeholder="spill the tea" />
                </div>
            </div>

            
        );
    }
}

export default Input;
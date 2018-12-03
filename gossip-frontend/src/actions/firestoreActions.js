import firebase from 'firebase/app'
import 'firebase/firestore'

const db = firebase.firestore()

import computeRadius from '../helpers/MathHelpers'

// Disable deprecated features
db.settings({
  timestampsInSnapshots: true
});


/**
 * Fetch gossip
 * Returns a promise containing a list of the docs in the collection gossips
 * which are within the specified radius.
 * @param {Geolocation} userLocation
 * @param {int} radius in miles
 */
export const getGossips = (userLocation, radius=2, timeLimit=24) => {
        // Get all the documents, for each compute the distance between userLocation and
        // the location specified by the document

        // TODO: convert radius in miles to lat/long
        // TODO: verify the redux action works correctly

    const secondsLimit = 3600 * timeLimit
    const now = Math.round((new Date).getTime() / 1000) 
    const query = db.collection('gossips').where('timestamp', '<=', now - secondsLimit)

    return db.collection('gossips').get().then(querySnapshot => {
        return querySnapshot.docs.reduce((acc, doc) => {
            const distance = computeRadius(userLocation.latitude, userLocation.longitude, doc.data().location.latitude, doc.data().location.longitude)
            if (distance <= radius) {
                acc.push(doc)
            }
            return acc
        }, [])
    })
}

//
export const updateReact = (docID, react = true) => {
        return new Promise((resolve) => {
            db.collection("gossips").doc(docID)
              .get()
              .then(doc => {
                var updates = {};
                if (react == true) {
                    updates['positive_reacts'] = doc.data().positive_reacts + 1
                }
                else {
                    updates['negative_reacts'] = doc.data().negative_reacts + 1
                }
                // Build doc ref from doc.id
                db.collection("gossips").doc(docID).update(updates).then(() => {
                    resolve(true)
                }).catch(e => {
                    resolve(false)
                })
             })
        }
    )
}

export const postGossip = (text, location) => {
    return db.collection('gossips').add({
        text,
        location: new firebase.firestore.GeoPoint(location.latitude, location.longitude),
        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
        comments: [],
        negative_reacts: 0,
        positive_reacts: 0
    })
}

export const postComment = (postId, commentText) => {
    return new Promise(resolve => {
        const postRef = db.collection('gossips').doc(postId)
        postRef.get()
        .then(doc => {
            let updatedComments = doc.data().comments 
            updatedComments.push(commentText)
            postRef.update({
                comments: updatedComments
            })
            .then(() => {
                resolve(true)
            })
            .catch(e => {
                resolve(false)
            })
        })
        .catch(e => {
            console.log("Error getting doc from firestore: ", e)
        })
    })
}

const fetchAllDocuments = () => {
      db.collection("gossips").get().then(function(querySnapshot) {
      querySnapshot.forEach(function(doc) {
          // doc.data() is never undefined for query doc snapshots
          console.log(doc.id, " => ", doc.data());
          });
      });
}

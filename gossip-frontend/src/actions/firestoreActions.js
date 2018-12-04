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
    const hours24 = new Date().getTime() - (24 * 3600 * 1000)
    const query = db.collection('gossips').where('timestamp', '>', hours24)

    return query.get().then(querySnapshot => {
        return querySnapshot.docs.reduce((acc, doc) => {
            const data = doc.data()
            const { location } = data
            const distance = computeRadius(userLocation.latitude, userLocation.longitude, location.latitude, location.longitude)
            if (distance <= radius) {
                acc.push(doc)
            }

            return acc
        }, [])
    })
}

//
export const updateReact = (docID, react = true) => {
    return db.collection('gossips').doc(docID).get().then(doc => {
        const data = doc.data()
        const updates = {}

        if (react) {
            updates['positive_reacts'] = data.positive_reacts + 1
        }
        else {
            updates['negative_reacts'] = data.negative_reacts + 1
        }
        // Build doc ref from doc.id
        return db.collection('gossips').doc(docID).update(updates)
    })
}

export const postGossip = (text, location) => {
    return db.collection('gossips').add({
        text,
        location: new firebase.firestore.GeoPoint(location.latitude, location.longitude),
        timestamp: new Date().getTime(),
        comments: [],
        negative_reacts: 0,
        positive_reacts: 0
    })
}

export const postComment = (postId, commentText) => {
    const postRef = db.collection('gossips').doc(postId)

    return postRef.get().then(doc => {
        let updatedComments = doc.data().comments 
        updatedComments.push(commentText)

        return postRef.update({
            comments: updatedComments
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

import firebase from 'firebase'
const db = firebase.firestore()

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
export const getGossip = (userLocation, radius) => {
    return new Promise((resolve) => {
        // Get all the documents, for each compute the distance between userLocation and
        // the location specified by the document

        // TODO: convert radius in miles to lat/long
        // TODO: verify the redux action works correctly

        db.collection('gossips').get()
        .then(querySnapshot => {
            let docsInRange = []
            querySnapshot.forEach(doc => {
                // Compute distance between
                let dx = doc.data().location.longitude - userLocation.longitude
                let dy = doc.data().location.latitude - userLocation.latitude
                let distance = Math.sqrt(Math.pow(dx, 2) + Math.pow(dy, 2))
                console.log("Distance between: ", distance)

                if (distance <= radius) {
                    docsInRange.push(doc)
                }
            })

            console.log('Documents in range', docsInRange)
            resolve(docsInRange)
        })
        .catch(e => {
            console.log("Error getting gossips: ", e)
        })
    })
}

//
export const updateReact = (docID, react = true) => {
        return new Promise((resolve) => {
            db.collection("gossips").doc(docID)
              .get()
              .then(doc => {
                console.log(doc.id, " => ", doc.data());
                var updates = {};
                if (react == true) {
                    updates['positive_reacts'] = doc.data().positive_reacts + 1
                }
                else {
                    updates['negative_reacts'] = doc.data().negative_reacts + 1
                }
                // Build doc ref from doc.id
                db.collection("gossips").doc(docID).update(updates).then(() => {
                    console.log('updateReact function worked!')
                    resolve(true)
                }).catch(e => {
                    console.log("Error updating reacts: ", e)
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
        postRef = db.collection('gossips').doc(postId)
        postRef.get()
        .then(doc => {
            updatedComments = doc.data().comments 
            updatedComments.push(commentText)
            postRef.update({
                comments: updatedComments
            })
            .then(() => {
                resolve(true)
            })
            .catch(e => {
                console.log("Error posting comment to firestore: ", e)
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

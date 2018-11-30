import firebase from 'firebase'
const db = firebase.firestore()

// Disable deprecated features
db.settings({
  timestampsInSnapshots: true
});

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

const fetchAllDocuments = () => {
      db.collection("gossips").get().then(function(querySnapshot) {
      querySnapshot.forEach(function(doc) {
          // doc.data() is never undefined for query doc snapshots
          console.log(doc.id, " => ", doc.data());
          });
      });
  }


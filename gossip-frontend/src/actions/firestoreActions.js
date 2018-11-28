const fetchDocumentProperty = () => {

      const db = firebase.firestore();
      db.settings({timestampsInSnapshots: true});
      let gossips = db.collection('gossips');
      gossips.get().then(snapshot => {
          snapshot.forEach(doc => {
              console.log( doc.data().text );
          })
      })
  }

const fetchAllDocuments = () => {
      const db = firebase.firestore();
      db.settings({timestampsInSnapshots: true});
      db.collection("gossips").get().then(function(querySnapshot) {
      querySnapshot.forEach(function(doc) {
          // doc.data() is never undefined for query doc snapshots
          console.log(doc.id, " => ", doc.data());
          });
      });
  }

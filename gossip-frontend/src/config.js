import firebase from 'firebase'

const config = {
  apiKey: "AIzaSyAhhDuqQXK_gu3XLQiFc6GRYSIJFd9OLxo",
  authDomain: "gossip-9fb8c.firebaseapp.com",
  databaseURL: "https://gossip-9fb8c.firebaseio.com",
  projectId: "gossip-9fb8c",
  storageBucket: "gossip-9fb8c.appspot.com",
  messagingSenderId: "152144982801"
};
firebase.initializeApp(config);
export default firebase;

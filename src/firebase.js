import firebase from "firebase";
const { firestore } = require("firebase");

const firebaseConfig = {
    apiKey: "AIzaSyDyrXHMARagK3p2cafgxyQPBG1OcFKB5qw",
    authDomain: "whatsapp-clone-b97ac.firebaseapp.com",
    databaseURL: "https://whatsapp-clone-b97ac.firebaseio.com",
    projectId: "whatsapp-clone-b97ac",
    storageBucket: "whatsapp-clone-b97ac.appspot.com",
    messagingSenderId: "1026731367081",
    appId: "1:1026731367081:web:fa3ab0af541346e8e427b8",
    measurementId: "G-M7XLZ5316J"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebaseApp.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export { auth, provider };
  export default db;
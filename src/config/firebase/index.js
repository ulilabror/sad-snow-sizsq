import firebase from "firebase/app";
import "firebase/auth";
//import "firebase/firestore";
// Initialize Firebase
try {
  firebase.initializeApp({
    apiKey: "AIzaSyD7RDoi5lRNqHAytoDvBQ6RG20E6j9pxOE",
    authDomain: "latihan-7b774.firebaseapp.com",
    databaseURL: "https://latihan-7b774.firebaseio.com",
    projectId: "latihan-7b774",
    storageBucket: "latihan-7b774.appspot.com",
    messagingSenderId: "1093495020342",
    appId: "1:1093495020342:web:681d75f8e1afb8e75db197",
    measurementId: "G-48S65D1E3S"
  });
} catch (err) {
  // we skip the "already exists" message which is
  // not an actual error when we're hot-reloading
  if (!/already exists/.test(err.message)) {
    console.error("Firebase initialization error", err.stack);
  }
}
export default firebase;

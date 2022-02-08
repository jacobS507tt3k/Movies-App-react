import firebase from "firebase/app"
import "firebase/firestore"
import "firebase/auth"
 
 
const firebaseConfig = {
  apiKey: "AIzaSyBUtlyzgQA7sM4EVk3TTr5_8uyoirZOFDA",

  authDomain: "react-app-curso-f71b2.firebaseapp.com",

  projectId: "react-app-curso-f71b2",

  storageBucket: "react-app-curso-f71b2.appspot.com",

  messagingSenderId: "769708257814",

  appId: "1:769708257814:web:a62cc0abec13312e863b37"

};
 
firebase.initializeApp(firebaseConfig);
 
const db = firebase.firestore();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
const facebookAuthProvider = new firebase.auth.FacebookAuthProvider(); 
 export {
     db,
     googleAuthProvider,
     facebookAuthProvider,
     firebase
 }
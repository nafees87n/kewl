import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyDMNRZQaDOENMs85lK8pTVke0Csgu9ExqI",
    authDomain: "kewl-72e10.firebaseapp.com",
    databaseURL: "https://kewl-72e10.firebaseio.com",
    projectId: "kewl-72e10",
    storageBucket: "kewl-72e10.appspot.com",
    messagingSenderId: "128484463098",
    appId: "1:128484463098:web:490730773ba437d0451443",
    measurementId: "G-VC9BKNJ3SP"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore();
// not writing the authentication code
// this seems an easier way for google o auth service

export default db;


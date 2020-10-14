import firebase from "firebase";

var firebaseConfig = {
  apiKey: "AIzaSyBCGYrCW2e-tyvkTPzRkt6hKUzyRuCy7Xs",
  authDomain: "chatapp-284218.firebaseapp.com",
  databaseURL: "https://chatapp-284218.firebaseio.com",
  projectId: "chatapp-284218",
  storageBucket: "chatapp-284218.appspot.com",
  messagingSenderId: "663571945289",
  appId: "1:663571945289:web:a31e1fe6d76ac8d9812c98",
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
// not writing the authentication code
// this seems an easier way for google o auth service

export default db;

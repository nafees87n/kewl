import firebase from 'firebase';
var firebaseConfig = {
  apiKey: 'AIzaSyDSLK5veegtGk4WvE9tZGWPvhEWW5vYedY',
  authDomain: 'kewl-dev.firebaseapp.com',
  databaseURL: 'https://kewl-dev.firebaseio.com',
  projectId: 'kewl-dev',
  storageBucket: 'kewl-dev.appspot.com',
  messagingSenderId: '613883556246',
  appId: '1:613883556246:web:14488b20d56dbe2ccbedb7',
  measurementId: 'G-47YM7ZH9X1'
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
// not writing the authentication code
// this seems an easier way for google o auth service

export default db;

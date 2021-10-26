import firebase from 'firebase';

const firebaseConfig = {

  apiKey: "AIzaSyCgLw4CNN1WHhjDf0hYAXpGXU-xt5snzjM",

  authDomain: "clone-c3683.firebaseapp.com",

  projectId: "clone-c3683",

  storageBucket: "clone-c3683.appspot.com",

  messagingSenderId: "1038341383979",

  appId: "1:1038341383979:web:90f63f413ee9224f50876e",

  measurementId: "G-VXB2B3SVQ9"

};
const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
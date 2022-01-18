import firebase from "firebase";
require("@firebase/firestore");

//Paste your firebaseConfig here
const firebaseConfig = {
    apiKey: "AIzaSyBqyb3yYQE9_uRlygSe9I4qa-jqO5eKuho",
    authDomain: "e-ride-8582d.firebaseapp.com",
    databaseURL: "https://e-ride-8582d-default-rtdb.firebaseio.com",
    projectId: "e-ride-8582d",
    storageBucket: "e-ride-8582d.appspot.com",
    messagingSenderId: "894039616492",
    appId: "1:894039616492:web:c4716d5ed8d0b097862ec9"
  };

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();



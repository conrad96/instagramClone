import firebase from 'firebase'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = 
{
    apiKey: "AIzaSyC1KCyGGbT9fmX65jkv2oUur4CBTHlyMIM",
    authDomain: "clone-instagram-483a3.firebaseapp.com",
    projectId: "clone-instagram-483a3",
    storageBucket: "clone-instagram-483a3.appspot.com",
    messagingSenderId: "167960196557",
    appId: "1:167960196557:web:ac231590fdc619c604c084",
    measurementId: "G-MNZBLWGG67"
};

const instance = firebase.initializeApp(firebaseConfig);

const db = instance.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export  {db, auth, storage};
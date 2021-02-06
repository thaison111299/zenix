import firebase from 'firebase/app'

import 'firebase/storage';
import 'firebase/firestore';

var firebaseConfig = {
    apiKey: "AIzaSyBG0T52ZNl-nyWFd9S3ARk6eNyFo0gVnkE",
    authDomain: "todo-60b13.firebaseapp.com",
    projectId: "todo-60b13",
    storageBucket: "todo-60b13.appspot.com",
    messagingSenderId: "637707986316",
    appId: "1:637707986316:web:062d b7326b2d39b39c22a9",
    measurementId: "G-DPZ3N9Z1PG"
};

firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timestamp };
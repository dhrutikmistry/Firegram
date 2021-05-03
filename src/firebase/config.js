 // Your web app's Firebase configuration
import firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';


 var firebaseConfig = {
    apiKey: "AIzaSyBgAfpxlV3zzu4nN-5VadcTk3XjU7-NMDE",
    authDomain: "test-gallery-41845.firebaseapp.com",
    projectId: "test-gallery-41845",
    storageBucket: "test-gallery-41845.appspot.com",
    messagingSenderId: "180750501715",
    appId: "1:180750501715:web:b95619fcabca1dea5e83a6"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();

export {projectStorage,projectFirestore};
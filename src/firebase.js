import firebase from 'firebase';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDhuYosUib9PvWNDaSkwhzf_0e0U0Br8DQ",
  authDomain: "linkedin-clone-project.firebaseapp.com",
  projectId: "linkedin-clone-project",
  storageBucket: "linkedin-clone-project.appspot.com",
  messagingSenderId: "1058498277612",
  appId: "1:1058498277612:web:fbb74a28119be47ac9b5c9",
  measurementId: "G-CEJXXG610B"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

const auth = firebase.auth();

export{ db, auth };
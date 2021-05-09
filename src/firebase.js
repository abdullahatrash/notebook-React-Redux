import firebase from "firebase"

const firebaseConfig = {
    apiKey: "AIzaSyAfc2_CfL8YuKuDQ4FTdiSWskOxVNHQCqY",
    authDomain: "noteapp-c6a77.firebaseapp.com",
    projectId: "noteapp-c6a77",
    storageBucket: "noteapp-c6a77.appspot.com",
    messagingSenderId: "223826487350",
    appId: "1:223826487350:web:f76a6ab8d4418089edd097"
  };

  firebase.initializeApp(firebaseConfig)

   export const db = firebase.firestore()
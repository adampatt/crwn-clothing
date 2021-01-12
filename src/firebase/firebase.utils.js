import firebase from 'firebase/app';

import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyAfUnTwiohCWHF81RBt-XGUB-Gt0naFRso",
    authDomain: "crwn-db-ff33a.firebaseapp.com",
    projectId: "crwn-db-ff33a",
    storageBucket: "crwn-db-ff33a.appspot.com",
    messagingSenderId: "293088543967",
    appId: "1:293088543967:web:10f942ad5aa2feb38c156a",
    measurementId: "G-WW3Y79204X"
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;

  

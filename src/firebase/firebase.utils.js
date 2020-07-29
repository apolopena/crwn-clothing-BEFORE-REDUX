import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyDtyofw6IcKQh9AnqBaxGH93Yxgzs74zrE",
  authDomain: "crwn-db-d5ab4.firebaseapp.com",
  databaseURL: "https://crwn-db-d5ab4.firebaseio.com",
  projectId: "crwn-db-d5ab4",
  storageBucket: "crwn-db-d5ab4.appspot.com",
  messagingSenderId: "436446874065",
  appId: "1:436446874065:web:a95c76592005bf6571f8f0",
  measurementId: "G-PE54XLS0W9"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
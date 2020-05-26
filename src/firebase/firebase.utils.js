import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyA6hDEx39INqBxbw2jlEFpu11gjdKVwFEU',
  authDomain: 'crown-db-14801.firebaseapp.com',
  databaseURL: 'https://crown-db-14801.firebaseio.com',
  projectId: 'crown-db-14801',
  storageBucket: 'crown-db-14801.appspot.com',
  messagingSenderId: '1054663133275',
  appId: '1:1054663133275:web:d84824f47716295938577e',
  measurementId: 'G-M35LY670Q8',
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;

import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyCkIEM63XUE_7yUa9xkD1YA3X1JTWVZ1Fo',
  authDomain: 'crown-clothing-aede2.firebaseapp.com',
  projectId: 'crown-clothing-aede2',
  storageBucket: 'crown-clothing-aede2.appspot.com',
  messagingSenderId: '697531739379',
  appId: '1:697531739379:web:1638222047237877571b86',
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const userSnapShot = await userRef.get();

  if (!userSnapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log('Error creating user', error.message);
    }
  }

  return userRef;
};

export const addCollectionAndDocuments = async (
  collectionKey,
  objectsToAdd
) => {
  const collectionRef = firestore.collection(collectionKey);

  const batch = firestore.batch();

  objectsToAdd.forEach(obj => {
    const newDocRef = collectionRef.doc();
    batch.set(newDocRef, obj);
  });

  return await batch.commit();
};

export const getCurrentUser = () => {
  return new Promise((resolve, reject) => {
    const unsubscribe = auth.onAuthStateChanged(userAuth => {
      unsubscribe();
      resolve(userAuth);
    }, reject);
  });
};

export const createUserCartRef = async (userId, cartItemsMap) => {
  if (!userId) return;

  const cartRef = firestore.doc(`carts/${userId}`);

  const cartSnapShot = await cartRef.get();

  if (!cartSnapShot.exists) {
    try {
      await cartRef.set({
        cartItems: cartItemsMap,
      });
    } catch (error) {
      console.log('Error creating cart', error.message);
    }
  }

  return cartRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

export const googleProvider = new firebase.auth.GoogleAuthProvider();
googleProvider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(googleProvider);

export default firebase;

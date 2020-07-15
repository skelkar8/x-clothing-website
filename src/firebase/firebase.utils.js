import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyA0lv1WC8Vc1l0a2OwnnGLqi3QEazwKlvg",
  authDomain: "x-clothing-db.firebaseapp.com",
  databaseURL: "https://x-clothing-db.firebaseio.com",
  projectId: "x-clothing-db",
  storageBucket: "x-clothing-db.appspot.com",
  messagingSenderId: "804046579346",
  appId: "1:804046579346:web:f7ac13323819e8075ba84b",
  measurementId: "G-FCXF3L2QBN"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth){
    return;
  }

  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();

  if(!snapShot.exists){
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      })
    } catch(error){
        console.log('error creating user',error.message);
    }
  }

  return userRef;
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
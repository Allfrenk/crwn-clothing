import firebase from "firebase/app";

import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyB4j-C7_7rbpwecfxwbkBiJdHijmaXbiIs",
  authDomain: "crwn-db-allfrenk.firebaseapp.com",
  projectId: "crwn-db-allfrenk",
  storageBucket: "crwn-db-allfrenk.appspot.com",
  messagingSenderId: "154214941592",
  appId: "1:154214941592:web:d9ef9fd2f70bce88e1a1ed",
  measurementId: "G-2RT5G075BL",
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
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
      console.log("error creating user", error.message);
    }
  }

  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;

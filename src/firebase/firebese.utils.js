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
//////////////////////////////////////////////////////////////////////
firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

export default firebase;
/////////////////////////////////////////////////////////////////////////////

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);
  console.log(userRef);

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

// CREA NUOVI COLLECTIONS DANDO IL NOME E GLI OGGETTI DA AGIGUNGERE
export const addCollectionAndDocuments = async (collectionKey, objectToAdd) => {
  const collectionRef = firestore.collection(collectionKey);
  console.log(collectionRef);

  const batch = firestore.batch();
  objectToAdd.forEach((obj) => {
    const newDocRef = collectionRef.doc();
    batch.set(newDocRef, obj);
  });

  return await batch.commit();
};

// SERVE PER CONVERTIRE IN OGGETTO LO SNAPSHOT
export const convertCollectionSnapshotToMap = (collections) => {
  const transformedCollection = collections.docs.map((doc) => {
    const { title, items } = doc.data();

    return {
      routeName: encodeURI(title.toLowerCase()),
      id: doc.id,
      title,
      items,
    };
  });
  // console.log(transformedCollection);

  return transformedCollection.reduce((accumulator, collection) => {
    accumulator[collection.title.toLowerCase()] = collection;
    return accumulator;
  }, {});
};
// --------------------------------

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

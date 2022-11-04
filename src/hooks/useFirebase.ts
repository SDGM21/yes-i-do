//Firebase Functions
import { initializeApp } from "firebase/app";
import {
  signInWithPopup,
  signInWithEmailLink,
  signInWithEmailAndPassword,
  signInAnonymously,
  createUserWithEmailAndPassword,
  signOut,
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  GithubAuthProvider,
  browserSessionPersistence,
} from "firebase/auth";
import { getStorage } from "firebase/storage";
import {
  getFirestore,
  addDoc,
  doc,
  collection,
  collectionGroup,
} from "firebase/firestore";

//Config
const firebaseConfig = {
  apiKey: "AIzaSyDvK91OMFdNBWGSW8smxtqxs8mIzi0Y7gs",
  authDomain: "yes-i-do-5eef4.firebaseapp.com",
  projectId: "yes-i-do-5eef4",
  storageBucket: "yes-i-do-5eef4.appspot.com",
  messagingSenderId: "575879530685",
  appId: "1:575879530685:web:6eacd6d3b5bed30d924fd4",
};

// Initialize Firebase Functions

//Firebase Common Hook
const useFirebase = () => {
  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);
  const db = getFirestore(app);
  const storage = getStorage(app);
  const GoogleProvider = new GoogleAuthProvider();
  const GithubProvider = new GithubAuthProvider();

  return {
    app,
    auth,
    createUserWithEmailAndPassword,
    db,
    GithubProvider,
    GoogleProvider,
    onAuthStateChanged,
    signInWithEmailLink,
    signInWithPopup,
    signInAnonymously,
    signInWithEmailAndPassword,
    signOut,
    storage,
    addDoc,
    doc,
    collection,
    collectionGroup,
  };
};

export default useFirebase;

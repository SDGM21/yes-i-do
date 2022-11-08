//Firebase Functions
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, GithubAuthProvider } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";
import { firebaseConfig } from "./config";

//Firebase Init

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
export const GoogleProvider = new GoogleAuthProvider();
export const GithubProvider = new GithubAuthProvider();

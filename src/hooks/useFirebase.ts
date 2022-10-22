import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDvK91OMFdNBWGSW8smxtqxs8mIzi0Y7gs",
  authDomain: "yes-i-do-5eef4.firebaseapp.com",
  projectId: "yes-i-do-5eef4",
  storageBucket: "yes-i-do-5eef4.appspot.com",
  messagingSenderId: "575879530685",
  appId: "1:575879530685:web:6eacd6d3b5bed30d924fd4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

//Firebase Common Hook
const useFirebase = () => {
    return {
        app,
    };
}
 
export default useFirebase;
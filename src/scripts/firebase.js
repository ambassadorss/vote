//firebase.js
import { initializeApp } from "firebase/app";
import { getAuth,} from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage"; // Import the storage module

const firebaseConfig = {

  apiKey: "AIzaSyBWorBIU61XbCmEWoxlwYsp2ayLT0g9L2I",

  authDomain: "instavotes-dd7fd.firebaseapp.com",

  projectId: "instavotes-dd7fd",

  storageBucket: "instavotes-dd7fd.appspot.com",

  messagingSenderId: "973151490347",

  appId: "1:973151490347:web:a875bd04d75638ec75f56e",

  measurementId: "G-D5W901C5DB"

};

 
// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const storage = getStorage(app);

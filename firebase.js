import firebase from 'firebase/compat/app';
import {getFirestore} from "firebase/firestore"; 
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBQmermzCoqw0PCCMixrPweLOpG3Ng7xT8",
  authDomain: "whatsapp-2-9aebb.firebaseapp.com",
  projectId: "whatsapp-2-9aebb",
  storageBucket: "whatsapp-2-9aebb.appspot.com",
  messagingSenderId: "166194723630",
  appId: "1:166194723630:web:e71fb8aef972b6dcaa98bf"
};

const app = !firebase.apps.length 
? firebase.initializeApp(firebaseConfig) 
: firebase.app();

const db = getFirestore();
const auth = getAuth();
const provider = new GoogleAuthProvider() //noob

export { db, auth, provider };

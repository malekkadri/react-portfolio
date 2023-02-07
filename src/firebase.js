
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { getStorage } from 'firebase/storage';
import { getFirestore } from 'firebase/firestore/lite';

export const firebaseConfig = {
  apiKey: 'AIzaSxxxxxxxxxxxxxxxxxxxxxxx',
  authDomain: 'fir-axxxxxxxxxxxxxxxxxxxxxxxxxx',
  projectId: 'fir-axxxxxxxxxxxxxxxxx',
  storageBucket: 'fir-axxxxxxxxxxxxxxxxxx',
  messagingSenderId: '106xxxxxxxxxxxxxx',
  appId: '1:1064xxxxxxxxxxxxxxxxxxxxxxxxxxxx',
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth();
const provider = new GoogleAuthProvider();
export const db = getFirestore(app);
export const storage = getStorage(app);


export const signInWithGoogle = () => signInWithPopup(auth, provider);
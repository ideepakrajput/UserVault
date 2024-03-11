// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBS5ipGCjHnRsvH0EHOiMelDjSGArnDgng",
    authDomain: "uservault-deepak.firebaseapp.com",
    projectId: "uservault-deepak",
    storageBucket: "uservault-deepak.appspot.com",
    messagingSenderId: "1076329954914",
    appId: "1:1076329954914:web:6b2bc4fb31bc9014325b3b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider(app);
export const storage = getStorage(app);
export const db = getFirestore(app);
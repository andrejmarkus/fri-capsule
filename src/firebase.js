// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDKA1b2-tgxprfN_YIHVpbfHz3Mxc4zwcc",
  authDomain: "fricapsule.firebaseapp.com",
  projectId: "fricapsule",
  storageBucket: "fricapsule.appspot.com",
  messagingSenderId: "247271689152",
  appId: "1:247271689152:web:25ef71545c190006ea5625",
  measurementId: "G-6H9EJ6KX9N"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const db = getFirestore(app);
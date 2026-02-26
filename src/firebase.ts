import "reflect-metadata";
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/analytics";
import "firebase/compat/auth";
import "firebase/compat/storage";
import * as fireorm from "fireorm";
import { browser } from "$app/environment";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  databaseURL: import.meta.env.VITE_FIREBASE_DATABASE_URL,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
  measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID,
};

// Initialize Firebase using the Compat SDK (required for FireORM)
const app = firebase.apps.length === 0 ? firebase.initializeApp(firebaseConfig) : firebase.app();
export const db = firebase.firestore();
export const auth = firebase.auth();
export const storage = firebase.storage();
export const analytics = browser ? firebase.analytics() : undefined;

// Initialize FireORM with the compatible Firestore instance
try {
  fireorm.initialize(db as any);
} catch (e) {
  // FireORM already initialized or other init error
  // We can safely ignore it if it's already initialized, but good to know if it's something else
  if (e instanceof Error && !e.message.includes('FireORM already initialized')) {
    console.error('FireORM initialization error:', e);
  }
}


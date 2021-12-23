import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";

// const app = firebase.initializeApp({
//   apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
//   authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
//   databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
//   projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
//   storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
//   messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
//   appId: process.env.REACT_APP_FIREBASE_APP_ID,
// });

const app = {
  apiKey: "AIzaSyDscZGjIQ3AHRZMSf3RD0nfhq2k-B2r2Ak",
  authDomain: "auth-development-8ada6.firebaseapp.com",
  databaseURL: "https://auth-development-8ada6-default-rtdb.firebaseio.com",
  projectId: "auth-development-8ada6",
  storageBucket: "auth-development-8ada6.appspot.com",
  messagingSenderId: "799913990345",
  appId: "1:799913990345:web:2c0dc619d0d4b075b35518",
};

const firestore = app.firestore();
export const database = {
  folders: firestore.collection("folders"),
  files: firestore.collection("files"),
  formatDoc: (doc) => {
    return { id: doc.id, ...doc.data() };
  },
  getCurrentTimestamp: firebase.firestore.FieldValue.serverTimestamp,
};
export const storage = app.storage();
export const auth = app.auth();
export default app;

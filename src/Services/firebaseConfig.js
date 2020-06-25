import firebase from "@firebase/app";
import "@firebase/firestore";

const config = firebase.initializeApp({
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: "mydform",
});

export default config;

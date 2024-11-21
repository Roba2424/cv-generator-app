import { getFirestore } from "@firebase/firestore";
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: "cv-generator-app-c3219.firebaseapp.com",
  projectId: "cv-generator-app-c3219",
  storageBucket: "cv-generator-app-c3219.firebasestorage.app",
  messagingSenderId: "272634987343",
  appId: "1:272634987343:web:a2bb9d7968ba6a0cd97b3a",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
export { auth, db };

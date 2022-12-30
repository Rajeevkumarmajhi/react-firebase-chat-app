import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBiAMDi9n6Bw1RjoJ5HS6e54sVJ8qFj550",
  authDomain: "chat-d07fe.firebaseapp.com",
  projectId: "chat-d07fe",
  storageBucket: "chat-d07fe.appspot.com",
  messagingSenderId: "674807263015",
  appId: "1:674807263015:web:8417725477ac22a9e34302"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();
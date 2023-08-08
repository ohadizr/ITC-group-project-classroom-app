import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
  onAuthStateChanged,
  signOut,
  setPersistence,
  browserLocalPersistence,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAZFMI_-S5DoePzU_bhHEdtFGAd9OQLx0g",
  authDomain: "itc-extension.firebaseapp.com",
  projectId: "itc-extension",
  storageBucket: "itc-extension.appspot.com",
  messagingSenderId: "1002692361081",
  appId: "1:1002692361081:web:1a4669ac55055783368da8",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth();
export const createUser = createUserWithEmailAndPassword;
export const logInUser = signInWithEmailAndPassword;
export const updateProfileCredentials = updateProfile;
export const authStateChange = onAuthStateChanged;
export const userPersistence = setPersistence;
export const fullPersistence = browserLocalPersistence;
export const signMeOut = signOut;
export const storage = getStorage(app);

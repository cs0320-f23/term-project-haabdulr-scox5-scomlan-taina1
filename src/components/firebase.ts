import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {
  connectAuthEmulator,
  createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut,
  getAuth,
} from "firebase/auth";
import firebase from "firebase/compat/app";
import { getDatabase, ref, set} from "firebase/database";
import "firebase/compat/auth";
import "firebaseui";


// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD80I-8NE3GCrmV1UcQKzd9j7KFrDg-G9g",
  authDomain: "php-digitization.firebaseapp.com",
  projectId: "php-digitization",
  storageBucket: "php-digitization.appspot.com",
  messagingSenderId: "411707208013",
  appId: "1:411707208013:web:6a1dd1dbaedc84fa978704",
  measurementId: "G-935341G0YQ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
connectAuthEmulator(auth, "http://localhost:3232");
const analytics = getAnalytics(app);

const handleSignUp = async (email: string, password: string): Promise<void> => {
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;
    console.log("User signed up:", user);
  } catch (error) {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.error("Error signing up:", errorCode, errorMessage);
    throw error;
  }
};

const handleSignIn = async (email: string, password: string): Promise<void> => {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;
    console.log("User signed in:", user);
  } catch (error) {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.error("Error signing in:", errorCode, errorMessage);
    throw error;
  }
};

const handleLogout = async (): Promise<void> => {
  try {
    await signOut(auth);
    console.log("User signed out");
  } catch (error) {
    console.error("Error signing out:", error);
    throw error;
  }
};

function writeUserData(userId, name, email) {
  const db = getDatabase();
  const reference = ref(db, 'users/' + userId)

  set(reference, {
    username: name,
    email: email,
  });

}


export {app, auth, handleSignUp, handleSignIn, handleLogout };
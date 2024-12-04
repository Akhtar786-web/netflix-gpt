// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC_tIJwT949glmjnnNEYKhbHzqnhu7zSeI",
  authDomain: "netflixgpt-e3350.firebaseapp.com",
  projectId: "netflixgpt-e3350",
  storageBucket: "netflixgpt-e3350.firebasestorage.app",
  messagingSenderId: "797401242121",
  appId: "1:797401242121:web:07cc127bf4d180f42fb6d8",
  measurementId: "G-4R0LBWYPSD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
console.log(analytics);
export const auth = getAuth();
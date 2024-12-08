import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyD8oVCvVZHSoP0B2jCEg1ttQqNqx38mkDI",
  authDomain: "netflixgpt-ee821.firebaseapp.com",
  projectId: "netflixgpt-ee821",
  storageBucket: "netflixgpt-ee821.firebasestorage.app",
  messagingSenderId: "1026867355187",
  appId: "1:1026867355187:web:0408bbe33b59575b248d46",
  measurementId: "G-RJ8J4VV4H0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
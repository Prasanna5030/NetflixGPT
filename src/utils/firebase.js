// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAW9jsfhM9Zdmll5czPukadSJVRwgvtypU",
  authDomain: "netflixgpt-js.firebaseapp.com",
  projectId: "netflixgpt-js",
  storageBucket: "netflixgpt-js.appspot.com",
  messagingSenderId: "72758875842",
  appId: "1:72758875842:web:1357b90c8a379b55290d5b",
  measurementId: "G-J4J6YRNGNQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth= getAuth();
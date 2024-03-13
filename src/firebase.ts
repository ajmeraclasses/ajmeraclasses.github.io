// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC79eWPjOBvDZRN0lXjxWGON988-Fl89aE",
  authDomain: "ajmeraclasses-website.firebaseapp.com",
  projectId: "ajmeraclasses-website",
  storageBucket: "ajmeraclasses-website.appspot.com",
  messagingSenderId: "967781718715",
  appId: "1:967781718715:web:154cdcec8cc09ac9fd279e",
  measurementId: "G-T7P9N3B7EB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
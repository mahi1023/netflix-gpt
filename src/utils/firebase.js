// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCoP5EHFYa6GMpyQqL6yPGA1L9ICVd-Rck",
  authDomain: "netflixgpt-58e9d.firebaseapp.com",
  projectId: "netflixgpt-58e9d",
  storageBucket: "netflixgpt-58e9d.appspot.com",
  messagingSenderId: "876415078068",
  appId: "1:876415078068:web:09e98575e9fdeba23891e1",
  measurementId: "G-HZPT0FWEDH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();

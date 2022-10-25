// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDbouxZcZrBRYXa6Cq9WkW_xnL89qRSQQQ",
  authDomain: "sikkhayon-academy.firebaseapp.com",
  projectId: "sikkhayon-academy",
  storageBucket: "sikkhayon-academy.appspot.com",
  messagingSenderId: "309301856020",
  appId: "1:309301856020:web:bf6977c2d9167a27876401",
  measurementId: "G-CVY2FCSTZN",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;

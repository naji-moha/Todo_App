// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your Firebase configuration object
const firebaseConfig = {
    apiKey: "AIzaSyDVSYMA-reKjcMy9SjPdTA3kt1AxqMAoug",
    authDomain: "your-to-do-list-34f20.firebaseapp.com",
    projectId: "your-to-do-list-34f20",
    storageBucket: "your-to-do-list-34f20.firebasestorage.app",
    messagingSenderId: "745523678323",
    appId: "1:745523678323:web:32f015f63fc0e0e8492e06",
    measurementId: "G-HFGRJ3ZH2Q"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication
const auth = getAuth(app);

export { auth };
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDeaTzLYwkFdyJGKaf4eDzWBf2I3kumKfU",
  authDomain: "digital-product-52ffa.firebaseapp.com",
  projectId: "digital-product-52ffa",
  storageBucket: "digital-product-52ffa.firebasestorage.app",
  messagingSenderId: "614474021408",
  appId: "1:614474021408:web:38736b077d19f2cff61a45",
  measurementId: "G-7DFS9R1DHB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
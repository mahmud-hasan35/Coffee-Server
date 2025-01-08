
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCBSo6lOlkWEcU4ReIpWKFvseOlA7aO-pI",
  authDomain: "coffeeshop-6fc1e.firebaseapp.com",
  projectId: "coffeeshop-6fc1e",
  storageBucket: "coffeeshop-6fc1e.firebasestorage.app",
  messagingSenderId: "387170695868",
  appId: "1:387170695868:web:7a7327420ea4683e676eb9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export {auth}
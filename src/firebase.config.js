// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCiO9IV9b5WtbSLuYv3plQPz4P7Y_bFvsI",
  authDomain: "phrase-craze.firebaseapp.com",
  projectId: "phrase-craze",
  storageBucket: "phrase-craze.firebasestorage.app",
  messagingSenderId: "303822909631",
  appId: "1:303822909631:web:22a5e1ca23254d0e81960a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;
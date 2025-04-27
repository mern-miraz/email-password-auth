// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDpLv97uwTr3weQxf2E2LIGb8f0h6B_JPw",
  authDomain: "email-password-auth-255e8.firebaseapp.com",
  projectId: "email-password-auth-255e8",
  storageBucket: "email-password-auth-255e8.firebasestorage.app",
  messagingSenderId: "907672285894",
  appId: "1:907672285894:web:2e0eb86de15275233d1dc7",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

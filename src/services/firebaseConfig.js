// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAJhLJv5Ea4mqDW6U_y2FdEYEzVL4utzsQ",
  authDomain: "fir-projects-4becc.firebaseapp.com",
  projectId: "fir-projects-4becc",
  storageBucket: "fir-projects-4becc.firebasestorage.app",
  messagingSenderId: "500490974111",
  appId: "1:500490974111:web:1ba0230a492975f9cb83aa",
  measurementId: "G-S9E8MH8EPC",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

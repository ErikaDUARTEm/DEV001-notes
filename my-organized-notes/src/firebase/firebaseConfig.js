import { initializeApp } from "firebase/app";
import {getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBujYPFX_7MIS0WhXjnJl2Kbpb2mk8IOno",
  authDomain: "react-firebase-71290.firebaseapp.com",
  projectId: "react-firebase-71290",
  storageBucket: "react-firebase-71290.appspot.com",
  messagingSenderId: "914161063948",
  appId: "1:914161063948:web:f383bb3c54ebd6f783f629"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
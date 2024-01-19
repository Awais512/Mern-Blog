// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-blog-595cf.firebaseapp.com",
  projectId: "mern-blog-595cf",
  storageBucket: "mern-blog-595cf.appspot.com",
  messagingSenderId: "1025893079846",
  appId: "1:1025893079846:web:2b8d254bd7d625704dffe7",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

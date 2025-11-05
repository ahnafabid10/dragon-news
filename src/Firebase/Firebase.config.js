// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAMPpZCRaftl7zJYypYl65hQiCHRAWQSAg",
  authDomain: "dragon-news-fe4d2.firebaseapp.com",
  projectId: "dragon-news-fe4d2",
  storageBucket: "dragon-news-fe4d2.firebasestorage.app",
  messagingSenderId: "510707873237",
  appId: "1:510707873237:web:04d7c04d344b189375795c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;
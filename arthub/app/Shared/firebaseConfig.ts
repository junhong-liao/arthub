// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: "arthub-mvp.firebaseapp.com",
  projectId: "arthub-mvp",
  storageBucket: "arthub-mvp.appspot.com",
  messagingSenderId: "122100761230",
  appId: "1:122100761230:web:a500714d0ca017e3f17fdf",
  measurementId: "G-9Q34BSNBWR",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Note: Firebase Analytics not yet enabled!
// const analytics = getAnalytics(app);

export default app;

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBZ9uhpLf-vVEVKqXkT_Fsz6S7lGeMFM58",
  authDomain: "mymovieshosted.firebaseapp.com",
  projectId: "mymovieshosted",
  storageBucket: "mymovieshosted.appspot.com",
  messagingSenderId: "971672344235",
  appId: "1:971672344235:web:f2d1586efbadfd919f09ee",
  measurementId: "G-JE9R195C42"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app;
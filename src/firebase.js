// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBLXJh6psO1JBbDFjHlpPhMCpKedY6fPy8",
  authDomain: "hedrick-ses.firebaseapp.com",
  projectId: "hedrick-ses",
  storageBucket: "hedrick-ses.appspot.com",
  messagingSenderId: "980843768935",
  appId: "1:980843768935:web:f25a0c36412a4a88eb38c2",
  measurementId: "G-85YHJ875H5"
};

// Initialize Firebase and Firestore
const app = initializeApp(firebaseConfig)
const db = getFirestore(app)
export {db}
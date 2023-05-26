// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth,GoogleAuthProvider} from 'firebase/auth'
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAz65ZSfTVXlo5c154pogSQdrMlSWMXSFg",
  authDomain: "blog-44f94.firebaseapp.com",
  projectId: "blog-44f94",
  storageBucket: "blog-44f94.appspot.com",
  messagingSenderId: "867616584937",
  appId: "1:867616584937:web:85f50665b805eef38dac78",
  measurementId: "G-P1SDKPLT35"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider()
export {auth,provider};
// const analytics = getAnalytics(app);
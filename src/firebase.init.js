// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDWM4-BpsFurxKvV1OZkoqiaqDmIpPKbXA",
  authDomain: "ema-jhon-simple-3c092.firebaseapp.com",
  projectId: "ema-jhon-simple-3c092",
  storageBucket: "ema-jhon-simple-3c092.appspot.com",
  messagingSenderId: "241952748255",
  appId: "1:241952748255:web:e27ecd57bd8f8fde6b6f6a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth(app)
export default auth
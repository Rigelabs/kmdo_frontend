// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
    getAuth
} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
export default function firebase_auth(){
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDCzCbdU1BWFGhVNrtNun5DB92q9R3uT7c",
  authDomain: "auth-92b3b.firebaseapp.com",
  databaseURL: "https://auth-92b3b.firebaseio.com",
  projectId: "auth-92b3b",
  storageBucket: "auth-92b3b.appspot.com",
  messagingSenderId: "511273087798",
  appId: "1:511273087798:web:01251dfe85ccba1638f997"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
return getAuth(app);
}


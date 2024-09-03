// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCYrlFONO1N6UE-vbVEQRUUbxDeoCfeyR8",
  authDomain: "netflixgpt-30942.firebaseapp.com",
  projectId: "netflixgpt-30942",
  storageBucket: "netflixgpt-30942.appspot.com",
  messagingSenderId: "826250150310",
  appId: "1:826250150310:web:d1e9db85fef8623dfb0f67",
  measurementId: "G-V8CS081CST"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
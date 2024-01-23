import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyDVy0yRfC9hBxftFgzI8J-9hzacW90FBxM",
    authDomain: "simple-loginform-auth.firebaseapp.com",
    projectId: "simple-loginform-auth",
    storageBucket: "simple-loginform-auth.appspot.com",
    messagingSenderId: "317374120244",
    appId: "1:317374120244:web:7be0d1f89280758218a561"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth;
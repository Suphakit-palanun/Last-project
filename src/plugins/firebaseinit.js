import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseApp = initializeApp({
    apiKey: "AIzaSyDfn0JZiGvgDc28hiixq-qhb28ZxysyzZo",
    authDomain: "lastapp-47273.firebaseapp.com",
    projectId: "lastapp-47273",
    storageBucket: "lastapp-47273.appspot.com",
    messagingSenderId: "424129372647",
    appId: "1:424129372647:web:de7967e4874cdf32721d42",
    measurementId: "G-424TW6Y4YF"
});

const auth = getAuth(firebaseApp);
export { auth };

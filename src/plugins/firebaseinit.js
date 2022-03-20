import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseApp = initializeApp({
  apiKey: "AIzaSyA3Vh8MeNBItOOZZjapD2Xm9fvha4f0_m8",
  authDomain: "data-firebase-a8a9a.firebaseapp.com",
  projectId: "data-firebase-a8a9a",
  storageBucket: "data-firebase-a8a9a.appspot.com",
  messagingSenderId: "777048889675",
  appId: "1:777048889675:web:68668535f29a5c671cf0ce",
  measurementId: "G-NRFM1ZZT6C",
});

const auth = getAuth(firebaseApp);
export { auth };

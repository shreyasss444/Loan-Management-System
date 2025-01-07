// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyANBC4ikqZuntMDaPCdWcTLkBeQSeJ7T14",
    authDomain: "loan-management-system-app.firebaseapp.com",
    projectId: "loan-management-system-app",
    storageBucket: "loan-management-system-app.firebasestorage.app",
    messagingSenderId: "239464939873",
    appId: "1:239464939873:web:669b3a344d94959568c520",
    measurementId: "G-59TRMNJ805"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const provider = new GoogleAuthProvider(auth);

provider.setCustomParameters({
    prompt: "select_account"
});

const signInWithGooglePopup = () => signInWithPopup(auth, provider);
const db = getFirestore(app);

// const analytics = getAnalytics(app);

export { auth, signInWithGooglePopup, db };
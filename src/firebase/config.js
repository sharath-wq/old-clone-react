// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCi-Ew-fGt1muESAw-PMGws28mJEXGCzig",
    authDomain: "olx-clone-react-7da81.firebaseapp.com",
    projectId: "olx-clone-react-7da81",
    storageBucket: "olx-clone-react-7da81.appspot.com",
    messagingSenderId: "75299453206",
    appId: "1:75299453206:web:8f6c06d6c4674cc4db7837",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export const db = getFirestore(app);

export default app;

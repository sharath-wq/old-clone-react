import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyCi-Ew-fGt1muESAw-PMGws28mJEXGCzig",
    authDomain: "olx-clone-react-7da81.firebaseapp.com",
    projectId: "olx-clone-react-7da81",
    storageBucket: "olx-clone-react-7da81.appspot.com",
    messagingSenderId: "75299453206",
    appId: "1:75299453206:web:8f6c06d6c4674cc4db7837",
};

export default firebase.initializeApp(firebaseConfig);

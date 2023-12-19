import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { FirebaseContext } from "./context/firebaseContext";
import firebase from "./firebase/config";
import { AuthProvider } from "./context/AuthContext";

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <FirebaseContext.Provider value={{ firebase }}>
            <AuthProvider>
                <App />
            </AuthProvider>
        </FirebaseContext.Provider>
    </React.StrictMode>
);

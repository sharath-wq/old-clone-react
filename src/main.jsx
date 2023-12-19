import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { FirebaseContext } from "./store/Context";
import firebase from "./firebase/config";
import Context from "./store/Context";
import Post from "./store/PostContext";

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <FirebaseContext.Provider value={{ firebase }}>
            <Context>
                <Post>
                    <App />
                </Post>
            </Context>
        </FirebaseContext.Provider>
    </React.StrictMode>
);

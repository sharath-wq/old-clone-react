import { useContext, useEffect } from "react";
import router from "./router.jsx";

import { RouterProvider } from "react-router-dom";
import { AuthContext, FirebaseContext } from "./store/Context.jsx";

const App = () => {
    const { setUser } = useContext(AuthContext);
    const { firebase } = useContext(FirebaseContext);
    useEffect(() => {
        firebase.auth().onAuthStateChanged((user) => {
            setUser(user);
        });
    });

    return <RouterProvider router={router}></RouterProvider>;
};

export default App;

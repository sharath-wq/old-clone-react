import { createBrowserRouter } from "react-router-dom";
import Root from "./pages/Root";
import Home from "./pages/home/Home";
import Product from "./Pages/product/Product";
import Login from "./pages/Auth/Login";
import Register from "./pages/Auth/Register";
import Form from "./pages/form/Form";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        children: [
            {
                path: "",
                element: <Home />,
            },
            {
                path: "product",
                element: <Product />,
            },
            {
                path: "login",
                element: <Login />,
            },
            {
                path: "register",
                element: <Register />,
            },
            {
                path: "sell",
                element: <Form />,
            },
        ],
    },
]);

export default router;

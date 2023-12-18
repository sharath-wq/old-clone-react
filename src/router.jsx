import { createBrowserRouter } from "react-router-dom";
import Root from "./pages/Root";
import Home from "./pages/home/Home";
import Product from "./Pages/product/Product";

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
        ],
    },
]);

export default router;

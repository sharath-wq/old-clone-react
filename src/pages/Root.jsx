import { Outlet } from "react-router-dom";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";
import { Toaster } from "react-hot-toast";

const Root = () => {
    return (
        <>
            <Navbar />
            <Toaster position="bottom-right" />
            <Outlet />
            <Footer />
        </>
    );
};

export default Root;

import { Outlet } from "react-router-dom";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";
import { Toaster } from "react-hot-toast";

const Root = () => {
    return (
        <>
            <Navbar />
            <Toaster />
            <Outlet />
            <Footer />
        </>
    );
};

export default Root;

import Logo from "./Logo";
import { FaSearch, FaAngleDown } from "react-icons/fa";
import Search from "./Search";
import CustomButton from "./CustomButton";
import { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext, FirebaseContext } from "../../store/Context";

const Navbar = () => {
    const [country, setCountry] = useState("India");

    const { user } = useContext(AuthContext);
    const { firebase } = useContext(FirebaseContext);

    const navigate = useNavigate();

    const handleChange = (e) => {
        setCountry(e.target.value);
    };

    return (
        <div className="w-full h-16 bg-[#eff1f3] flex justify-center border-2 border-b-white shadow-lg fixed top-0 z-[999]">
            <div className="flex items-center h-full gap-3 w-[75%]">
                <Link to={"/"}>
                    <Logo />
                </Link>

                <Search
                    style={"w-72"}
                    leftIcon={<FaSearch className="absolute left-4" />}
                    rightIcon={<FaAngleDown className="absolute right-4" />}
                    input={
                        <input
                            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-full p-4 outline-none"
                            type="text"
                            value={country}
                            onChange={handleChange}
                        />
                    }
                />

                <Search
                    rightIcon={
                        <div className="h-full w-[10%] flex justify-center bg-[#002f34]">
                            <FaSearch className=" text-2xl text-white h-full" />
                        </div>
                    }
                    input={
                        <input
                            className="h-full w-[80%] outline-none"
                            type="text"
                            placeholder="Find Cars, Mobile Phones and more..."
                        />
                    }
                    style={"w-[40rem] justify-between pl-2"}
                />

                <div className="flex items-center gap-2 font-semibold">
                    <span>ENGLISH</span>
                    <FaAngleDown />
                </div>

                {user ? (
                    <div className="flex flex-col group">
                        <span>{user.displayName}</span>

                        <div className="hidden main-color rounded-md group-hover:flex flex-col absolute">
                            <button
                                className="hidden main-color rounded-md group-hover:flex flex-col absolute pt-10 cursor-pointer"
                                onClick={() => {
                                    firebase.auth().signOut();
                                    navigate("/login");
                                }}
                            >
                                Logout
                            </button>
                        </div>
                    </div>
                ) : (
                    <Link to={"/login"} className="font-semibold underline">
                        Login
                    </Link>
                )}

                <CustomButton />
            </div>
        </div>
    );
};

export default Navbar;

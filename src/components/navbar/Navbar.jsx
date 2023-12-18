import Logo from "./Logo";
import { FaSearch, FaAngleDown } from "react-icons/fa";
import Search from "./Search";
import CustomButton from "./CustomButton";

const Navbar = () => {
    return (
        <div className="w-full h-16  bg-[#eff1f3] flex justify-center">
            <div className="flex items-center h-full gap-3 w-[75%]">
                <Logo />

                <Search
                    style={"w-72"}
                    leftIcon={<FaSearch className="absolute left-4" />}
                    rightIcon={<FaAngleDown className="absolute right-4" />}
                    input={
                        <input
                            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-full p-4 outline-none"
                            type="text"
                            value="India"
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

                <button className="font-semibold underline">Login</button>

                <CustomButton />
            </div>
        </div>
    );
};

export default Navbar;

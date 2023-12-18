import { FaChevronDown } from "react-icons/fa";
import { submenu } from "../../constents";

const Submenu = () => {
    return (
        <div className="flex w-full justify-center h-10  mt-1 pt-20">
            <div className="flex items-center h-full gap-3 w-[75%]">
                <div className="flex gap-2 items-center">
                    <span className="text-sm font-bold">ALL CATEGORIES</span>
                    <FaChevronDown />
                </div>

                <ul className="flex ml-5 gap-4">
                    {submenu.map((item, idx) => (
                        <li className="text-sm font-normal text-[#002f34]" key={idx}>
                            {item}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Submenu;

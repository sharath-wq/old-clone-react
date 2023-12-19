import { CiHeart } from "react-icons/ci";
import calculteDate from "../../utils/calculateDate";

const Item = ({ name, imageLinks, price, createdAt, idx }) => {
    return (
        <div className="w-72 h-60 rounded-md mt-10">
            <div className="p-2 border-t border-r border-l border-[#cecdcd] relative ">
                <img className="w-full h-40 object-contain" src={imageLinks[0]} alt="" />
                {idx % 2 === 0 && (
                    <span className="px-2 w-20 h-4 text-xs uppercase py-0.5 rounded-sm bg-[#ffce32] font-light absolute top-2 flex items-center left-3">
                        featured
                    </span>
                )}
                <div className="w-9 h-9 bg-white absolute top-3 right-3 rounded-full p-1">
                    <CiHeart className="w-full h-full" />
                </div>
            </div>
            <div
                className={`border-b ${
                    idx % 2 === 0 ? "border-l-[#ffce32] border-l-4" : "border-[#cecdcd] border-l"
                } border-r border-[#cecdcd] p-2 flex flex-col gap-0.5`}
            >
                <span className="text-xl font-bold">₹ {price}</span>
                {/* <span className="text-sm">2016 78000km</span> */}
                <span className="text-sm font-normal">{name}</span>
                <div className="flex justify-between">
                    {/* <span className="text-xs text-[#002f34a3]">MALAD WEST, MUMBAI</span> */}
                    <span className="text-xs text-[#002f34a3]">{calculteDate(createdAt)}</span>
                </div>
            </div>
        </div>
    );
};

export default Item;

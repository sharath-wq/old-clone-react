import { IoIosFlash } from "react-icons/io";

const Details = ({ name, description, price }) => {
    return (
        <div className="w-[75%]">
            <div className="mx-16 mt-10 flex justify-between">
                <div className="w-[65%] h-40 bg-white rounded-lg pl-4 flex flex-col justify-center ">
                    <span className="px-2 w-24 h-8 text-xs uppercase py-0.5 rounded-sm bg-[#ffce32] font-semibold  flex items-center justify-around">
                        <IoIosFlash />
                        featured
                    </span>
                    <span className="text-4xl font-bold mt-2">{name}</span>
                    {/* <span className="mt-2 text-base font-light">2015-2019 1.5 110 PS RxZ 4x2 AMT Diesel</span> */}
                </div>
                <div className="h-36 bg-white w-[33%] rounded-lg p-4 flex flex-col justify-between box-border">
                    <span className="text-5xl font-bold text-[#002f34]">₹ {price}</span>
                    <button className="w-full bg-[#002f34] text-white py-2 rounded-md border-4 hover:bg-white border-[#002f34] text-base font-semibold hover:text-[#002f34] hover:font-bold">
                        Make offer
                    </button>
                </div>
            </div>
            <div className="mx-16 mt-5 flex justify-between flex-col">
                {" "}
                <div className="w-[65%] h-16 flex items-center text-2xl font-bold text-[#406367] bg-white rounded-t-lg pl-4 border-b-2 border[#d8dfe0]">
                    <span>Description</span>
                </div>
                <div className="w-[65%] bg-white rounded-b-lg pl-5 py-4 text-[#406367] text-base">
                    <span>ADDITIONAL VEHICLE INFORMATION:</span>
                    <ul>
                        {description.split(" ").map((sentance) => (
                            <li key={sentance}>{sentance}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Details;

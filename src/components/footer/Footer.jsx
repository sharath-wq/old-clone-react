import { aboutUS, olx, popularLocations, treadingLocations } from "../../constents";
import FooterSections from "./FooterSections";

const Footer = () => {
    return (
        <div className="w-full h-40 bg-[#eceeef] flex justify-center">
            <div className="w-[75%] flex justify-between">
                <FooterSections key={"Popular Locations"} heading={"Popular Loations"} items={popularLocations} />
                <FooterSections key={"Treanding Locations"} heading={"Trending Loations"} items={treadingLocations} />
                <FooterSections key={"About US"} heading={"About US"} items={aboutUS} />
                <FooterSections key={"olx"} heading={"OLX"} items={olx} />
            </div>
        </div>
    );
};

export default Footer;

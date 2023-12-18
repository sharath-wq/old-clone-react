import ImageSlider from "../../components/ImageSlider/ImageSlider";
import Details from "../../components/Details/Details";

const Product = () => {
    return (
        <div className="w-full flex items-center flex-col pt-20 bg-[#f2f4f5] pb-10">
            <ImageSlider />
            <Details />
        </div>
    );
};

export default Product;

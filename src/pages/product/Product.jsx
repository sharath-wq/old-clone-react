import ImageSlider from "../../components/ImageSlider/ImageSlider";
import Details from "../../components/Details/Details";
import { useContext } from "react";
import { PostContext } from "../../store/PostContext";

const Product = () => {
    const { postDetails } = useContext(PostContext);

    return (
        <div className="w-full flex items-center flex-col pt-20 bg-[#f2f4f5] pb-10">
            <ImageSlider imageLinks={postDetails.imageLinks} />
            <Details {...postDetails} />
        </div>
    );
};

export default Product;

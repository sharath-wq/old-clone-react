import Item from "../Item/Item";
import { FirebaseContext } from "../../store/Context";
import { PostContext } from "../../store/PostContext";
import { useNavigate } from "react-router-dom";
import { useContext, useEffect, useState } from "react";

const ItemList = () => {
    const { firebase } = useContext(FirebaseContext);
    const [products, setProducts] = useState([]);
    const { setPostDetails } = useContext(PostContext);
    const navigate = useNavigate();

    useEffect(() => {
        firebase
            .firestore()
            .collection("products")
            .get()
            .then((result) => {
                const allpost = result.docs.map((product) => {
                    return {
                        ...product.data(),
                        id: product.id,
                    };
                });
                setProducts(allpost);
            });
    }, []);

    console.log(products);
    return (
        <div className="flex justify-center w-full">
            <div className="w-[75%] h-screen  mt-10">
                <h2 className="text-2xl ">Fresh Recommendations</h2>
                <div className="flex justify-start flex-wrap gap-5">
                    {products.map((product) => (
                        <div
                            key={product.id}
                            onClick={() => {
                                setPostDetails(product);
                                navigate("/product");
                            }}
                        >
                            <Item {...product} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ItemList;

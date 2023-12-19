import Item from "../Item/Item";
import { FirebaseContext } from "../../store/Context";
import { PostContext } from "../../store/PostContext";
import { useNavigate } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import Skelton from "../skelton/Skelton";

const ItemList = () => {
    const { firebase } = useContext(FirebaseContext);
    const [products, setProducts] = useState([]);
    const { setPostDetails } = useContext(PostContext);
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(true);

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
                setIsLoading(false);
            });
    }, []);

    console.log(products);
    return (
        <div className="flex justify-center w-full">
            <div className="w-[75%] h-screen  mt-10">
                <h2 className="text-2xl ">Fresh Recommendations</h2>
                <div className="flex justify-start flex-wrap gap-5">
                    {isLoading
                        ? Array.from({ length: 8 }, (_, index) => <Skelton key={index} />)
                        : products.map((product, idx) => (
                              <div
                                  key={product.id}
                                  onClick={() => {
                                      setPostDetails(product);
                                      navigate("/product");
                                  }}
                                  className="cursor-pointer"
                              >
                                  <Item key={product.id} idx={idx} {...product} />
                              </div>
                          ))}
                </div>
            </div>
        </div>
    );
};

export default ItemList;

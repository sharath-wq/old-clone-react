import { useContext, useState } from "react";
import { FirebaseContext, AuthContext } from "../../store/Context";
import { useNavigate } from "react-router-dom";

const Form = () => {
    const { firebase } = useContext(FirebaseContext);
    const { user } = useContext(AuthContext);

    const [name, setName] = useState();
    const [price, setPrice] = useState();
    const [description, setDescription] = useState();
    const [imageLinks, setImageLinks] = useState();

    const naviage = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            await firebase.firestore().collection("products").add({
                name,
                price,
                description,
                imageLinks: imageLinks,
                userId: user.uid,
                createdAt: Date.now(),
            });

            return naviage("/");
        } catch (error) {}
    };

    const handleInputChange = (e) => {
        const inputValue = e.target.value;
        setImageLinks(inputValue.split(",").map((link) => link.trim()));
    };

    console.log(imageLinks);

    return (
        <form>
            <div className="w-full h-screen flex justify-center items-center bg-[#eff1f3]">
                <form className="w-[50%] h-[70vh]  flex flex-col justify-center items-center rounded-lg bg-white gap-5">
                    <input
                        className="w-[90%] p-3 outline-none rounded-lg border-2 border-[#002f34] ring-2 ring-transparent focus:ring-4 focus:ring-[#001f24] transition duration-300"
                        type="text"
                        placeholder="Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />

                    <input
                        className="w-[90%] p-3 outline-none rounded-lg border-2 border-[#002f34] ring-2 ring-transparent focus:ring-4 focus:ring-[#001f24] transition duration-300"
                        type="number"
                        placeholder="Price"
                        value={price}
                        onChange={(e) => setPrice(e.target.value)}
                    />

                    <textarea
                        className="w-[90%] p-3 outline-none rounded-lg border-2 border-[#002f34] ring-2 ring-transparent focus:ring-4 focus:ring-[#001f24] transition duration-300"
                        type="text"
                        placeholder="Description"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                    />

                    <textarea
                        className="w-[90%] p-3 outline-none rounded-lg border-2 border-[#002f34] ring-2 ring-transparent focus:ring-4 focus:ring-[#001f24] transition duration-300"
                        type="text"
                        placeholder="Image Link (sepereated by commas)"
                        value={imageLinks}
                        onChange={handleInputChange}
                    />

                    <button
                        onClick={handleSubmit}
                        className="bg-[#002f34] w-[90%] p-3 rounded-lg capitalize border-4 border-transparent hover:border-[#002f34] hover:bg-white hover:text-[#002f34] text-white relative "
                    >
                        Add
                    </button>
                </form>
            </div>
        </form>
    );
};

export default Form;

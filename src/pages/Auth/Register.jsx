import { useState } from "react";
import { FaGoogle } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../../firebase/config";

const Register = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [password, setPassword] = useState("");
    const [rePassword, setrePassword] = useState("");
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    const navigate = useNavigate();

    const { signup } = useAuth();

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (password !== rePassword) {
            return setError("Password do not match");
        }
        try {
            setError("");
            setLoading(true);
            const result = await signup(email, password);

            await addDoc(collection(db, "users"), {
                id: result.user.uid,
                phone: phone,
            });

            return navigate("/login");
        } catch (error) {
            setError("Faild to create and account");
            console.log(error);
        }
        setLoading(false);
    };

    return (
        <div className="w-full h-screen flex justify-center items-center bg-[#eff1f3]">
            <form
                onSubmit={handleSubmit}
                className="w-[400px] h-[800px]  flex flex-col justify-center items-center rounded-lg bg-white gap-5"
            >
                <img
                    src="https://seeklogo.com/images/O/olx-logo-20F1656D13-seeklogo.com.png"
                    alt="olx logo"
                    className="w-36"
                />
                <input
                    className="w-[90%] p-3 outline-none rounded-lg border-2 border-[#002f34] ring-2 ring-transparent focus:ring-4 focus:ring-[#001f24] transition duration-300"
                    type="text"
                    placeholder="Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />

                <input
                    className="w-[90%] p-3 outline-none rounded-lg border-2 border-[#002f34] ring-2 ring-transparent focus:ring-4 focus:ring-[#001f24] transition duration-300"
                    type="text"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />

                <input
                    className="w-[90%] p-3 outline-none rounded-lg border-2 border-[#002f34] ring-2 ring-transparent focus:ring-4 focus:ring-[#001f24] transition duration-300"
                    type="text"
                    placeholder="Phone"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                />

                <input
                    className="w-[90%] p-3 outline-none rounded-lg border-2 border-[#002f34] ring-2 ring-transparent focus:ring-4 focus:ring-[#001f24] transition duration-300"
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />

                <input
                    className="w-[90%] p-3 outline-none rounded-lg border-2 border-[#002f34] ring-2 ring-transparent focus:ring-4 focus:ring-[#001f24] transition duration-300"
                    type="password"
                    placeholder="Confirm Password"
                    value={rePassword}
                    onChange={(e) => setrePassword(e.target.value)}
                />

                <button
                    type="submit"
                    className={`bg-[#002f34] w-[90%] p-3 rounded-lg capitalize border-4 border-transparent hover:border-[#002f34] hover:bg-white hover:text-[#002f34] text-white relative ${
                        loading ? "h-[50px]" : ""
                    }`}
                    disabled={loading}
                    style={{ minHeight: "56px" }}
                >
                    <div
                        style={{
                            visibility: loading ? "visible" : "hidden",
                            position: "absolute",
                            top: "50%",
                            left: "50%",
                            transform: "translate(-50%, -50%)",
                        }}
                    >
                        <div className="spinner border-t-2 border-b-2 border-[#002f34] rounded-full h-6 w-6 animate-spin"></div>
                    </div>
                    {!loading && "Register"} {/* Display 'Register' text only when not loading */}
                </button>

                <button className="p-2 border w-[90%]">
                    <div className="flex items-center justify-center gap-5">
                        <FaGoogle />
                        <span>Contunue with Google</span>
                    </div>
                </button>

                <span>
                    Have an account{" "}
                    <Link className="font-medium underline" to={"/login"}>
                        Login
                    </Link>
                </span>
            </form>
        </div>
    );
};

export default Register;

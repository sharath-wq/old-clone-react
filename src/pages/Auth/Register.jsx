import { useContext, useState } from "react";
import { FaGoogle } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { FirebaseContext } from "../../store/Context";
import toast from "react-hot-toast";

const Register = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [password, setPassword] = useState("");
    const [rePassword, setrePassword] = useState("");
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    const { firebase } = useContext(FirebaseContext);

    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!name) {
            toast.error("Name is required");
            return;
        }

        if (!email) {
            toast.error("Email is required");
            return;
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(email)) {
            toast.error("Invalid email address");
            return;
        }

        if (!phone) {
            toast.error("Phone number is required");
        }

        if (!password) {
            toast.error("Password is required");
            return;
        } else if (password.length < 6) {
            toast.error("Password must be at least 6 characters");
            return;
        }

        if (!rePassword) {
            toast.error("Please confirm your password");
            return;
        } else if (rePassword !== password) {
            toast.error("Passwords do not match");
            return;
        }

        setLoading(true);
        firebase
            .auth()
            .createUserWithEmailAndPassword(email, password)
            .then((result) => {
                result.user.updateProfile({ displayName: name }).then(() => {
                    firebase
                        .firestore()
                        .collection("users")
                        .add({ id: result.user.uid, username: name, phone: phone })
                        .then(() => {
                            navigate("/login");
                        });
                });
            });
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
                    {!loading && "Register"}
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

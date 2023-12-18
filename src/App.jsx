import Navbar from "./components/navbar/Navbar";
import Submenu from "./components/submenu/Submenu";
import ItemList from "./components/itemList/ItemList";
import Footer from "./components/footer/Footer";

const App = () => {
    return (
        <div>
            <Navbar />
            <Submenu />
            <ItemList />
            <Footer />
        </div>
    );
};

export default App;

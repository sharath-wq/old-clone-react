import Navbar from "./components/navbar/Navbar";
import Submenu from "./components/submenu/Submenu";
import ItemList from "./components/itemList/ItemList";

const App = () => {
    return (
        <div>
            <Navbar />
            <Submenu />
            <ItemList />
        </div>
    );
};

export default App;

import Item from "../Item/Item";

const ItemList = () => {
    return (
        <div className="flex justify-center w-full">
            <div className="w-[75%] h-screen  mt-10">
                <h2 className="text-2xl ">Fresh Recommendations</h2>
                <div className="flex justify-center flex-wrap gap-5">
                    <Item />
                    <Item />
                    <Item />
                    <Item />
                    <Item />
                    <Item />
                    <Item />
                    <Item />
                    <Item />
                    <Item />
                    <Item />
                    <Item />
                </div>
            </div>
        </div>
    );
};

export default ItemList;

const Search = ({ leftIcon, rightIcon, input, style }) => {
    return (
        <div className={`relative flex items-center h-12 bg-white border-2 rounded-md border-[#002f34] ` + style}>
            {leftIcon}
            {input}
            {rightIcon}
        </div>
    );
};

export default Search;

const FooterSections = ({ heading, items }) => {
    return (
        <div className="">
            <h3 className="font-bold my-3">{heading}</h3>
            <ul className="flex flex-col gap-1">
                {items.map((item) => (
                    <li className="text-xs text-[#002F34A3]" key={item}>
                        {item}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default FooterSections;

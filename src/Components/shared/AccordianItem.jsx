import { useState } from "react";
import { FaChevronDown } from "react-icons/fa";

const AccordianItem = ({ data }) => {
  const [showItem, setShowItem] = useState(false);

  const toggle = () => {
    setShowItem((prevState) => !prevState);
  };

  return (
    <>
      <div className="overflow-hidden">
        <button
          className="flex items-start text-left gap-2 cursor-pointer border-b border-gray-200 py-2 outline-none focus-within:outline-none"
          onClick={toggle}
        >
          <FaChevronDown className="min-w-[20px] text-primary" />
          <span className="w-full text-primary text-lg md:text-xl font-medium">
            {data.title}
          </span>
        </button>
        {showItem && <p className={`text-gray-700 mt-3 pl-8`}>{data.desc}</p>}
      </div>
    </>
  );
};

export default AccordianItem;

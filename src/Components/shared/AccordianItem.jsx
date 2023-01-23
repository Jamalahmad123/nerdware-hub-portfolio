import { useState } from "react";
import { FaChevronDown } from "react-icons/fa";

const AccordianItem = ({ data }) => {
  const [showItem, setShowItem] = useState(false);

  const toggle = () => setShowItem((prev) => setShowItem(!prev));

  return (
    <div className="border-b border-gray-200 py-2 overflow-hidden">
      <div
        className="w-full flex items-start gap-2 cursor-pointer"
        onClick={toggle}
      >
        <FaChevronDown className="min-w-[20px] text-primary" />
        <span className="w-full text-primary text-lg md:text-xl font-medium">
          {data.title}
        </span>
      </div>
      <div
        className={`${
          showItem ? "max-h-0 opacity-0" : "max-h-fit opacity-100"
        } height__transition pl-6`}
      >
        <p className={`text-gray-700 mt-3`}>{data.desc}</p>
      </div>
    </div>
  );
};

export default AccordianItem;

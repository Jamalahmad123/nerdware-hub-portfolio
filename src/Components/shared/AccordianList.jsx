import { accodianData } from "../../Data/constant";
import AccordianItem from "./AccordianItem";

const AccordianList = () => {
  return (
    <div className="space-y-6 mt-10">
      {accodianData.map((item) => (
        <AccordianItem key={item.id} data={item} />
      ))}
    </div>
  );
};

export default AccordianList;

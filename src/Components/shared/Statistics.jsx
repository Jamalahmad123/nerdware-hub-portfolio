import { commonStyles } from "../../Styles";

const Statistics = ({ styles = "" }) => {
  return (
    <div className={`lg:relative lg:mx-auto rounded-xl z-[999] ${styles}`}>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-between gap-8">
        <div className="space-y-3">
          <h2 className="text-orange-600">
            150 <span className="font-medium">+</span>
          </h2>
          <p className={`${commonStyles.sectionpara} text-gray-700`}>
            Professional Team
          </p>
        </div>
        <div className="space-y-3">
          <h2 className="text-orange-600">
            15 <span className="font-medium">+</span>
          </h2>
          <p className={`${commonStyles.sectionpara} text-gray-700`}>
            Years of Average Experience
          </p>
        </div>
        <div className="space-y-3">
          <h2 className="text-orange-600">
            120 <span className="font-medium">k</span>
          </h2>
          <p className={`${commonStyles.sectionpara} text-gray-700`}>
            Successful Projects Delivered
          </p>
        </div>
        <div className="space-y-3">
          <h2 className="text-orange-600">
            50 <span className="font-medium">k</span>
          </h2>
          <p className={`${commonStyles.sectionpara} text-gray-700`}>
            Successful Projects Delivered
          </p>
        </div>
      </div>
    </div>
  );
};

export default Statistics;

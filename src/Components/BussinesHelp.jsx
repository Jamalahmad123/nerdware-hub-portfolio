import { features } from "../Data/constant";
import Button from "./shared/Button";

const BusinessCard = ({ title, content, Icon, iconStyle }) => (
  <div
    className={`bg-black-gradient rounded-lg py-4 px-8 space-y-3 text-center shadow-lg`}
  >
    <div className="bg-dimBlue p-4 inline-block rounded-full w-16 h-16">
      <Icon color="#00f6ff" size={35} />
    </div>
    <h3 className="text-white text-xl font-medium">{title}</h3>
    <p className="font-normal text-dimWhite text-base">{content}</p>
  </div>
);

const BussinesHelp = () => {
  return (
    <section className="py-12">
      <div className="container mx-auto px-4 flex flex-col items-center justify-center gap-10 md:flex-row md:gap-0">
        <div className="space-y-4 flex-1">
          <h2 className="text-3xl font-bold text-gradient md:text-4xl">
            How can we help <br className="hidden md:block" /> your Business ?
          </h2>
          <p className="font-normal text-dimWhite text-lg max-w-md">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed itaque
            distinctio a minima aliquam animi laborum facere. Animi itaque modi
            laudantium doloribus illo quas ut?
          </p>
          <Button styles="bg-blue-gradient rounded-md">Get Started</Button>
        </div>
        <div className="grid grid-cols-1 flex-1 md:grid-cols-2 gap-6 md:gap-4 lg:gap-6">
          {features.map((feature) => (
            <BusinessCard key={feature.id} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BussinesHelp;

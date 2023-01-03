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
  const scrollToView = () => {
    const element = document.getElementById("contact");
    if (element) element.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <section id="about" className="py-12">
      <div className="container mx-auto px-4 flex flex-col justify-center gap-10 lg:flex-row">
        <div className="space-y-4 flex-1">
          <h2 className="text-3xl font-bold text-gradient md:text-4xl">
            How can we help <br className="hidden md:block" /> your Business ?
          </h2>
          <p className="font-normal text-dimWhite text-lg max-w-md">
            One of the things that sets us apart from our competitors is our
            commitment to quality. We take pride in delivering reliable and
            user-friendly software that meets the needs of our clients. To
            ensure that our products meet the highest standards, we have a
            rigorous testing and quality assurance process in place.
          </p>
          <Button onClick={scrollToView} styles="bg-blue-gradient rounded-md">
            Get Started
          </Button>
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

const ServicesCards = ({ service }) => (
  <div
    className="rounded-br-lg bg-white shadow-lg w-full md:w-56 card-hover"
    title={service.titleComp}
  >
    <h3 className="text-sm py-4 px-2 font-medium capitalize">
      {service.title}
    </h3>
  </div>
);

export default ServicesCards;

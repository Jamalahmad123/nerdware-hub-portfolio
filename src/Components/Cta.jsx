import Button from "./shared/Button";

const Cta = () => {
  return (
    <section id="contact" className="py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col justify-start items-center gap-8 rounded-2xl px-6 py-14 md:justify-between md:flex-row md:gap-0 bg-black-gradient-2">
          <div>
            <h2 className="text-2xl font-bold text-center text-white md:text-3xl md:text-left">
              Let's Create an Amazing
              <br className="hidden md:block" /> Project Together!
            </h2>
          </div>
          <div>
            <Button styles="text-gray-800 bg-white rounded-full">
              <a href="mailto:Info@nerdwarehub.com">get started</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cta;

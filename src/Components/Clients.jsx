import { useState } from "react";
import Wrapper from "./shared/Wrapper";

const Clients = () => {
  const [current, setCurrent] = useState(0);

  function onRight() {
    if (current < projects.length - 1) {
      setCurrent(current + 1);
    }
  }

  function onLeft() {
    if (current > 0) {
      setCurrent(current - 1);
    }
  }
  return (
    <section>
      <Wrapper>
        <header className="text-center">
          <h2 className="text-3xl text-white md:text-4xl">Our Client Say</h2>
        </header>

        {/* slider */}
        <div className="relative flex justify-center items-center overflow-hidden h-[500px]"></div>
        {/* <button
          className="bg-white p-2 rounded-full absolute -bottom-4 left-1/2"
          onClick={onRight}
        >
          <FaArrowRight />
        </button>
        <button
          className="bg-white p-2 rounded-full absolute -bottom-4 right-1/2 mr-2"
          onClick={onLeft}
        >
          <FaArrowLeft />
        </button> */}
      </Wrapper>
    </section>
  );
};

export default Clients;

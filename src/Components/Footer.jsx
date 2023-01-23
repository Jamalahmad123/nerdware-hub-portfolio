import React from "react";
import { FaWhatsapp } from "react-icons/fa";
import Wrapper from "./shared/Wrapper";

const Footer = () => {
  return (
    <footer className="py-12 bg-black-gradient-2">
      <a
        href="https://wa.me/+923176440066"
        className="fixed right-6 bottom-10 text-2xl text-green-600 z-[9999] p-2 bg-white shadow-md rounded-[50%]"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaWhatsapp />
      </a>
      <Wrapper>
        <div className="flex justify-center flex-col gap-10 md:justify-between lg:flex-row lg:gap-20">
          <div className="space-y-3 flex items-center flex-col justify-center md:items-start md:justify-start flex-1">
            <h3 className="text-white text-xl font-semibold">
              <span className="text-orange-500">{`</>`}</span> Nerdware Hub
            </h3>
            <p className="font-normal text-dimWhite text-center md:text-left">
              Overall, our goal is to help our clients succeed in the digital
              world by providing them with the tools and support they need to
              thrive.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-8 flex-1">
            <div className="space-y-5 text-center md:text-left">
              <h3 className="uppercase text-white font-semibold text-lg">
                services
              </h3>
              <div className="flex flex-col gap-2 text-dimWhite">
                <p>App Dev</p>
                <p>Web Dev</p>
                <p>UI/UX Design</p>
                <p>Branding</p>
              </div>
            </div>
            <div className="space-y-5 text-center md:text-left">
              <h3 className="uppercase text-white font-semibold text-lg">
                company
              </h3>
              <div className="flex flex-col gap-2 text-dimWhite">
                <a href="#">About us</a>
                <a href="#">Contact</a>
              </div>
            </div>
            <div className="space-y-5 text-center md:text-left">
              <h3 className="uppercase text-white font-semibold text-lg">
                legal
              </h3>
              <div className="flex flex-col gap-2 text-dimWhite">
                <a href="#">Terms of use</a>
                <a href="#">Privacy Policy</a>
              </div>
            </div>
          </div>
        </div>
      </Wrapper>
    </footer>
  );
};

export default Footer;

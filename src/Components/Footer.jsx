import React from "react";
import { FaHashtag } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="py-12 bg-black-gradient-2">
      <div className="container mx-auto p-6">
        <div className="flex items-center justify-center flex-col gap-10 md:justify-between md:flex-row">
          <div className="space-y-3 flex items-center flex-col justify-center md:items-start md:justify-start">
            <FaHashtag color="#fff" size={30} />
            <p className="font-normal text-dimWhite text-lg text-center md:text-left">
              ACME Industries Ltd. <br /> Providing reliable tech since 1992
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-8">
            <div className="space-y-5 text-center md:text-left">
              <h3 className="uppercase text-white font-semibold text-lg">
                services
              </h3>
              <div className="flex flex-col gap-2 text-dimWhite">
                <a href="#">App Dev</a>
                <a href="#">Web Dev</a>
                <a href="#">UI/UX Design</a>
                <a href="#">Branding</a>
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
      </div>
    </footer>
  );
};

export default Footer;

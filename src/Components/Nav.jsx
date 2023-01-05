import { useState } from "react";
import { FaBrain, FaRegLightbulb } from "react-icons/fa";
import { menu, close, logo } from "../assets/index";
import { navLinks } from "../Data/constant";
import Wrapper from "./shared/Wrapper";
import { commonStyles } from "../Styles";
// import logo from "../assets/logo.png";

const Nav = () => {
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => {
    setToggle((prevState) => !prevState);
  };

  return (
    <nav className="navbar flex justify-between items-center py-6">
      <Wrapper className={`${commonStyles.flexBetween}`}>
        <h3 className="text-dimWhite text-lg font-semibold">
          <span className="text-orange-500">{`</>`}</span> NH
        </h3>
        <div className="hidden md:flex items-center gap-6 text-white">
          {navLinks.map((item) => (
            <a href={`#${item.link}`} key={item.id} className="capitalize">
              {item.link}
            </a>
          ))}
        </div>

        {/* side navbar */}
        <aside className="md:hidden flex items-center justify-end flex-1">
          <img
            src={toggle ? close : menu}
            alt="manu"
            className="w-[24px] h-[24px] object-contain cursor-pointer"
            onClick={handleToggle}
          />
          <div
            className={`${
              toggle ? "flex" : "hidden"
            } text-white flex-col justify-center items-center gap-4 bg-black-gradient py-6 absolute top-14 mx-4 my-2 rounded-xl min-w-[200px] z-50 sidebar`}
          >
            {navLinks.map((item) => (
              <a href={`#${item.link}`} key={item.id}>
                {item.link}
              </a>
            ))}
          </div>
        </aside>
      </Wrapper>
    </nav>
  );
};

export default Nav;

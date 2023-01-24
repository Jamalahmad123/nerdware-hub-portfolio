import { Link, NavLink, useLocation } from "react-router-dom";
import { useState } from "react";
import { menu, close, logo } from "../assets/index";
import { navLinks } from "../Data/constant";
import Wrapper from "./shared/Wrapper";
import { commonStyles } from "../Styles";
import { useEffect } from "react";

const Nav = () => {
  const [toggle, setToggle] = useState(false);
  const location = useLocation();

  const handleToggle = () => {
    setToggle((prevState) => !prevState);
  };

  useEffect(() => {
    setToggle(false);
  }, [location.pathname]);

  return (
    <nav className={`navbar ${commonStyles.flexBetween}`}>
      <Wrapper className={`${commonStyles.flexBetween}`}>
        <Link to="/" className="w-16">
          {/* <h3 className="text-dimWhite text-lg font-semibold">
            <span className="text-orange-500">{`</>`}</span> NH
          </h3> */}
          <img src={logo} alt="nerdware hub logo" className="w-full" />
        </Link>
        <div className="hidden md:flex items-center gap-6 text-white">
          {navLinks.map((item) => (
            <NavLink
              to={`${item.link}`}
              key={item.id}
              className="capitalize font-semibold text-lg nav-link border-none outline-none"
            >
              {item.name}
            </NavLink>
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
              <NavLink
                to={`${item.link}`}
                key={item.id}
                className="capitalize font text-lg nav-link"
              >
                {item.name}
              </NavLink>
            ))}
          </div>
        </aside>
      </Wrapper>
    </nav>
  );
};

export default Nav;

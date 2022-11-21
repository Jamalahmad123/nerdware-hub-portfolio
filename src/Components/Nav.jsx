import { useState } from "react";
import { menu, close, logo } from "../assets/index";
import { navLinks } from "../Data/constant";

const Nav = () => {
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => {
    setToggle((prevState) => !prevState);
  };

  return (
    <nav className="navbar flex justify-between items-center py-6">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <h1 className="font-bold text-white">Nerdware Hub</h1>
        <div className="hidden md:flex items-center gap-6 text-white">
          {navLinks.map((item) => (
            <a href="#" key={item.id}>
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
              <a href="#" key={item.id}>
                {item.link}
              </a>
            ))}
          </div>
        </aside>
      </div>
    </nav>
  );
};

export default Nav;

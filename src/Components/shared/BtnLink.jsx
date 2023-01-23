import { Link } from "react-router-dom";

const BtnLink = ({ children, styles, path }) => {
  return (
    <Link
      to={path}
      className={`font-medium text-lg outline-none py-4 px-6 capitalize ${styles}`}
    >
      {children}
    </Link>
  );
};

export default BtnLink;

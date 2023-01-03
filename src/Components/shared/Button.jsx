const Button = ({ children, version, styles, onClick }) => {
  return (
    <button
      className={`font-medium text-lg outline-none py-4 px-6 capitalize ${styles}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;

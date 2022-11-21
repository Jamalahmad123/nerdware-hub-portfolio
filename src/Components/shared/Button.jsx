const Button = ({ children, version, styles }) => {
  return (
    <button
      className={`font-medium text-lg outline-none py-4 px-6 capitalize ${styles}`}
    >
      {children}
    </button>
  );
};

export default Button;

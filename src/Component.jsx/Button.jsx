const Button = ({ onClick, children }) => {
  return (
    <button
      className={"bg-yellow-600 px-4 rounded py-2 text-white font-medium"}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;

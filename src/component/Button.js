const Button = ({ color, text, onAdd }) => {
  return (
    <button className="btn" onClick={onAdd}>
      {text}
    </button>
  );
};

Button.defaultProps = {
  color: "steelblue",
  text: "add",
};

export default Button;

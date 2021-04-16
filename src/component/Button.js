const Button = ({ color, text, onAdd }) => {
  return (
    <button style={{ backgroundColor: color }} onClick={onAdd}>
      {text}
    </button>
  );
};

Button.defaultProps = {
  color: "steelblue",
  text: "add",
};

export default Button;

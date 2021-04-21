import Button from "./Button";
const Header = ({ title, onAdd }) => {
  return (
    <div className="header">
      <h1>{title}</h1>
      <Button color="green" text="Add" onAdd={onAdd} />
    </div>
  );
};

Header.defaultProps = {
  title: "Task Tracker",
};

export default Header;

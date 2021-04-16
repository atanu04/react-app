import Button from "./Button";
const Header = ({ title, onAdd }) => {
  return (
    <>
      <h1>{title}</h1>
      <Button color="green" text="Add" onAdd={onAdd} />
    </>
  );
};

Header.defaultProps = {
  title: "Task Tracker",
};
//css in js
// const headingStyle = {
//     color : 'blue',
// }

export default Header;

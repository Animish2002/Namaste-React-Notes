import logo from "../../../Images/logo.png";

const Header = () => {
  return (
    <div className="header-components">
      <img className="food-app-logo" src={logo} alt="food-app-logo" />

      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Contact-Us</li>
        <li>Cart</li>
      </ul>
    </div>
  );
};

export default Header;

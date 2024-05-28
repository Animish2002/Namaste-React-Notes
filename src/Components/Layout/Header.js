import { useState } from "react";
import logo from "../../../Images/logo.png";
import { Link } from "react-router-dom";

const Header = () => {
  const [loginButton, setLoginButton] = useState("Login");

  return (
    <div className="header-components">
      <img className="food-app-logo" src={logo} alt="food-app-logo" />

      <ul>
        <li>
          <Link to={"/"}>Home</Link>
        </li>
        <li>
          <Link to={"/about"}>About</Link>
        </li>
        <li>
          <Link to={"/contact"}>Contact-Us</Link>
        </li>
        <li>Cart</li>
        <button
          className="login-btn"
          onClick={() => {
            loginButton === "Login"
              ? setLoginButton("Logout")
              : setLoginButton("Login");
          }}
        >
          {loginButton}
        </button>
      </ul>
    </div>
  );
};

export default Header;

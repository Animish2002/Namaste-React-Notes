import { useState } from "react";
import logo from "../../../Images/logo.png";

const Header = () => {
  const [loginButton, setLoginButton] = useState("Login");

  return (
    <div className="header-components">
      <img className="food-app-logo" src={logo} alt="food-app-logo" />

      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Contact-Us</li>
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

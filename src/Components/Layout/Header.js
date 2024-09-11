import { useState } from "react";
import logo from "../../../Images/logo.png";
import { Link } from "react-router-dom";

const Header = () => {
  const [loginButton, setLoginButton] = useState("Login");

  return (
    <div className="flex flex-wrap justify-between py-2 items-center bg-blue-100 shadow-lg border-collapse">
      <img className="w-[170px]" src={logo} alt="food-app-logo" />

      <ul className="flex gap-4">
        <li className="text-xl px-4 py-6 hover:underline ">
          <Link to={"/"}>Home</Link>
        </li>
        <li className="text-xl px-4 py-6 hover:underline">
          <Link to={"/about"}>About</Link>
        </li>
        <li className="text-xl px-4 py-6 hover:underline">
          <Link to={"/contact"}>Contact-Us</Link>
        </li>
        <li className="text-xl px-4 py-6 hover:underline">Cart</li>
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

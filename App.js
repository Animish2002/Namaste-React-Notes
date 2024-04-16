import React from "react";
import ReactDOM from "react-dom";
import logo from "./Images/logo.png";

const Header = () => {
  return (
    <div className="header-components">
      <img src={logo} alt="food app logo" />
      
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Contact-Us</li>
        <li>Cart</li>
      </ul>
    </div>
  );
};
const Footer = () => {
  return <div>This is the footer</div>;
};
const Layout = () => {
  return (
    <div>
      <Header />
     
    </div>
  );
};
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<Layout />);

// root.render(heading);

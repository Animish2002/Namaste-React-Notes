import React from "react";
import ReactDOM from "react-dom";
import logo from "./Images/logo.png";
import pizza from "./Images/pizza.png";
import kfc from "./Images/kfc.png";
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
const FoodCarts = ({ Images, resName, dishes, rating, time }) => {
  return (
    <div className="res-Container">
      <img className="res-foods" src={Images} alt="res-foods" />
      <div className="res-info">
        <h1>{resName}</h1>
        <h3>Rating: {rating}</h3>
        <h3>{dishes}</h3>

        <h4>{time}</h4>
      </div>
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
      <FoodCarts
        resName="Pizzeria"
        Images={pizza}
        dishes="Italian dishes"
        rating="4.5"
        time="25 min"
      />
      <FoodCarts
        resName="KFC"
        Images={pizza}
        dishes="Fried-chicken"
        rating="4.3"
        time="34 min"
      />
     
    </div>
  );
};
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<Layout />);

// root.render(heading);

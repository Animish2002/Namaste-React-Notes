import React from "react";
import { useState, useEffect } from "react";
import Shimmer from "../Layout/Shimmer";
import { useParams } from "react-router-dom";

const RestaurantMenu = () => {
  const [resInfo, setResInfo] = useState(null);
  const  {restId}  = useParams();

  
  useEffect(() => {
    fetchMenus();
  }, []);

  const fetchMenus = async () => {
    const data = await fetch(
      `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=17.6599188&lng=75.9063906&restaurantId=${restId}&catalog_qa=undefined&submitAction=ENTER`
    );
  
    const json = await data.json();
    console.log(json);
    setResInfo(json.data);
  };

  if (resInfo === null) {
    return <Shimmer />;
  }

  const { name, cuisines, costForTwoMessage, avgRating, totalRatingsString } =
    resInfo?.cards?.[2]?.card?.card?.info || {};

  return (
    <div>
      <h1>{name}</h1>
      <h2>{cuisines?.join(", ")}</h2>
      <p>{costForTwoMessage}</p>
      <p>Rating: {avgRating} ({totalRatingsString})</p>
      <h3>Menu</h3>
      <h3>{}</h3>
      {/* You'll need to map through the menu items here once you have that data */}
      
    </div>
  );
};

export default RestaurantMenu;
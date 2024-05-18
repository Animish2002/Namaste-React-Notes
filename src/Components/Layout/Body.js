import React from "react";
import FoodCarts from "../Restaurents/FootCarts";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
const Body = () => {
  const [restaurantList, setRestaurantList] = useState([]);
  const [searchtext, setSearchtext] = useState("");
  const [filterRes, setFilterRes] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);

  // console.log("React component");

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.5204303&lng=73.8567437&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    // console.log(json);
    setRestaurantList(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilterRes(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  //Conditional Rendering
  // if (restaurantList.length === 0) {
  //   return <Shimmer />;
  // }

  return restaurantList.length === 0 ? (
    <Shimmer />
  ) : (
    <div>
      <div>
        <input
          className="search-bar"
          type="text"
          placeholder="  search here....."
          value={searchtext}
          onChange={(e) => {
            setSearchtext(e.target.value);
          }}
        />
        <button
          className="filter-btn"
          onClick={() => {
            // console.log(searchtext);
            const filteredRes = restaurantList.filter((restaurants) =>
              restaurants.info.name
                .toLowerCase()
                .includes(searchtext.toLowerCase())
            );

            setFilterRes(filteredRes);
          }}
        >
          Search🔍
        </button>

        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = restaurantList.filter(
              (restaurants) => restaurants.info.avgRating > 4.3
            );
            setRestaurantList(filteredList);
          }}
        >
          Top Rated
        </button>
      </div>
      {filterRes.map((restaurants, index) => (
        <FoodCarts key={index} resData={restaurants} />
      ))}
    </div>
  );
};

export default Body;


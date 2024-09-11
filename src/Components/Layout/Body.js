import React, { useEffect, useState } from "react";
import FoodCarts from "../Restaurents/FootCarts"; // corrected "FootCarts" to "FoodCarts"
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";

const Body = () => {
  const [restaurantList, setRestaurantList] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [filterRes, setFilterRes] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.5204303&lng=73.8567437&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();

    setRestaurantList(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilterRes(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  return restaurantList.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="p-4">
      {/* Search and Filter Section */}
      <div className="flex py-6 items-center mb-4">
        <input
          className="bg-gray-200 w-1/3 rounded-md p-2"
          type="text"
          placeholder="Search here..."
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        />
        <button
          className="bg-blue-500 text-white p-2 rounded-md ml-2 px-5"
          onClick={() => {
            const filteredRes = restaurantList.filter((restaurant) =>
              restaurant.info.name
                .toLowerCase()
                .includes(searchText.toLowerCase())
            );
            setFilterRes(filteredRes);
          }}
        >
          Search🔍
        </button>

        <button
          className="bg-green-500 text-white p-2 rounded-md ml-2 px-4"
          onClick={() => {
            const filteredList = restaurantList.filter(
              (restaurant) => restaurant.info.avgRating > 4.3
            );
            setFilterRes(filteredList);
          }}
        >
          Top Rated
        </button>
      </div>

      {/* Display Grid of Food Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {filterRes.map((restaurant, index) => (
          <Link key={index} to={"/resturantMenu/" + restaurant.info.id}>
            <FoodCarts resData={restaurant} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;

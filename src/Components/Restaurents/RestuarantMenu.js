import React from "react";
import { useState, useEffect } from "react";
import Shimmer from "../Layout/Shimmer";
import { useParams } from "react-router-dom";
import RestaurentCategory from "./RestaurentCategory";

const RestaurantMenu = () => {
  const [resInfo, setResInfo] = useState(null);
  const [showIndex, setshowIndex] = useState(null);
  const { restId } = useParams();

  useEffect(() => {
    fetchMenus();
  }, []);

  const fetchMenus = async () => {
    const data = await fetch(
      `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=17.6599188&lng=75.9063906&restaurantId=${restId}&catalog_qa=undefined&submitAction=ENTER`
    );

    const json = await data.json();

    setResInfo(json.data);
  };

  if (resInfo === null) {
    return <Shimmer />;
  }
  const { itemCards } =
    resInfo.cards[4].groupedCard.cardGroupMap.REGULAR.cards[1].card.card;

  const categories =
    resInfo.cards[4].groupedCard.cardGroupMap.REGULAR.cards.filter(
      (cat) =>
        cat.card?.card?.["@type"] ==
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  const { name, cuisines, costForTwoMessage, avgRating, totalRatingsString } =
    resInfo?.cards?.[2]?.card?.card?.info || {};

  return (
    <div className="mt-12 text-center ">
      <span className="text-2xl font-bold">{name}</span>
      <p className="text-lg ">{cuisines?.join(", ")}</p>
      <p className="text-lg inline-block">{costForTwoMessage}</p>

      {categories.map((category, index) => (
        <div key={index}>
          <RestaurentCategory
            data={category?.card?.card}
            showItems={index === showIndex ? true : false}
            setshowIndex={() => setshowIndex(index)}
          />
        </div>
      ))}
    </div>
  );
};

export default RestaurantMenu;

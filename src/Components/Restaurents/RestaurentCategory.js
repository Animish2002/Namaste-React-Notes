import React, { useState } from "react";
import RestaurantMenuList from "./RestauranMenuList";

const RestaurantCategoryComponent = ({ data, showItems, setshowIndex }) => {
  const handleClick = () => {
    setshowIndex();
  };

  return (
    <>
      {/* Header */}
      <div className="w-6/12 bg-gray-50 mx-auto my-4 border-gray-300 border-b-2 p-4 shadow-lg ">
        <div
          className="flex justify-between cursor-pointer"
          onClick={handleClick}
        >
          <span className="text-lg font-bold">
            {data.title} ({data.itemCards.length})
          </span>
          <span>{open ? "⬆️" : "⬇️"}</span> {/* Icon changes based on `open` */}
        </div>

        {/* Accordion Body */}
        {showItems && (
          <div className="py-2">
            <RestaurantMenuList items={data.itemCards} />
          </div>
        )}
      </div>
    </>
  );
};

export default RestaurantCategoryComponent;

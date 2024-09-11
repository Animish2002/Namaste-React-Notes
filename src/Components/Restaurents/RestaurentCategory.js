import React from "react";
import RestaurantCategory from "./RestaurantCategory";

const RestaurentCategory = ({ data }) => {
  return (
    <>
      {/*  Header */}
      <div className="w-6/12 bg-gray-50 mx-auto my-4 border-gray-300 border-b-2 p-4 shadow-lg ">
        <div className="flex justify-between">
          <span className="text-lg font-bold">
            {data.title} ({data.itemCards.length})
          </span>
          <span>⬇️</span>
        </div>
        {/* Accordion Body */}
        <div className="py-2">
          
          <RestaurantCategory items={data.itemCards} />
        </div>
      </div>
    </>
  );
};

export default RestaurentCategory;

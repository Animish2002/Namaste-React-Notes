import React, { useState } from "react";
import { CON_URL } from "../../utils/contents";

const RestaurantMenuList = ({ items }) => {
  return (
    <div className="space-y-6">
      {items.map((menu) => (
        <div
          key={menu.card.info.id}
          className="p-4 border-gray-400 border-b-2 hover:shadow-lg transition-shadow duration-300"
        >
          <div className="flex justify-between text-start text-balance">
            <div className="flex-1">
              <span className="text-lg font-semibold text-gray-900">
                {menu.card.info.name}
              </span>
              <span className="text-lg font-medium text-gray-800 mt-1">
                - ₹
                {menu.card.info.price
                  ? menu.card.info.price / 100
                  : menu.card.info.defaultPrice / 100}
              </span>
              <p className="text-gray-500 text-sm mt-2">
                {menu.card.info.description}
              </p>
            </div>

            <div className="relative w-40 h-40 shadow-xl">
              <img
                src={CON_URL + menu.card.info.imageId}
                alt="menu-item"
                className="w-full h-full object-cover rounded-lg shadow-md"
              />
              <button className="bg-black text-white px-4 py-1 absolute bottom-2 right-2 text-sm rounded-lg hover:bg-gray-800 transition-colors duration-200">
                Add +
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default RestaurantMenuList;

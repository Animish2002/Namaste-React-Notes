import React from "react";
import { CON_URL } from "../../utils/contents";
import { Plus } from "lucide-react";

const RestaurantCategory = ({ items }) => {
  return (
    <div className="space-y-6">
      {items.map((menu, index) => (
        <div
          key={index}
          className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:scale-[1.02]"
        >
          <div className="flex flex-col md:flex-row">
            <div className="md:w-2/3 p-6">
              <h3 className="text-2xl font-bold text-gray-800 mb-2">
                {menu.card.info.name}
              </h3>
              <p className="text-lg font-semibold text-emerald-600 mb-3">
                ₹
                {menu.card.info.price
                  ? menu.card.info.price / 100
                  : menu.card.info.defaultPrice / 100}
              </p>
              <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                {menu.card.info.description}
              </p>
              <button className="bg-black text-white py-2 px-4 rounded-full hover:bg-gray-800 transition-colors duration-300 flex items-center space-x-2">
                <Plus size={18} />
                <span>Add to cart</span>
              </button>
            </div>
            <div className="md:w-1/3">
              <img
                src={CON_URL + menu.card.info.imageId}
                alt={menu.card.info.name}
                className="w-full h-48 md:h-full object-cover"
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default RestaurantCategory;

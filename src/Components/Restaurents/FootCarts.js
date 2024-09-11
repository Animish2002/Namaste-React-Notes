import { CON_URL } from "../../utils/contents";

const FoodCarts = (props) => {
  const { resData } = props;

  const { cloudinaryImageId, name, cuisines, costForTwo, avgRating } =
    resData?.info;

  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 ease-in-out">
      <img
        className="object-cover w-full h-48"
        src={CON_URL + cloudinaryImageId}
        alt={name}
      />
      <div className="p-4 flex flex-col justify-between">
        <h3 className="text-xl font-semibold text-gray-800">{name}</h3>
        <h4 className="text-sm text-gray-600">{cuisines.join(", ")}</h4>
        <h5 className="text-lg text-gray-700 mt-2">{costForTwo}</h5>
        <div className="flex items-center mt-4">
          <span className="text-yellow-500 text-lg">★</span>
          <span className="ml-2 text-gray-800 font-bold">{avgRating}</span>
          <span className="text-gray-500 text-sm ml-1">/ 5 stars</span>
        </div>
      </div>
    </div>
  );
};

export default FoodCarts;

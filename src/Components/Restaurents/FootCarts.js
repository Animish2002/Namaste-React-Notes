
const FoodCarts = (props) => {
  const { resData } = props;

  const { cloudinaryImageId, name, cuisines, costForTwo, avgRating } =
    resData?.info;

  return (
    <div className="res-Container">
      <div className="restaurant">
        <img
          className="res-foods"
          src={
            "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
            cloudinaryImageId
          }
          alt="res-foods"
          style={{ width: "200px", height: "200px" }} // Adjust width and height as needed
        />

        <div className="res-info">
          <h3>{name}</h3>
          <h3>{cuisines.join(", ")}</h3>
          <h3>{costForTwo}</h3>
          <h3>Rating: {avgRating} stars</h3>
        </div>
      </div>
    </div>
  );
};


export default FoodCarts;
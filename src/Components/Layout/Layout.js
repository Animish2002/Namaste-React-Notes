import Header from "./Header";
import FoodCarts from "../Restaurents/FootCarts";
import resObj from "../../utils/resData";
import { useState } from "react";

const Layout = () => {
  //state variable declaration
  const [restaurantList, setRestaurantList] = useState(resObj);

  // const restaurantList = [
  //   {
  //     info: {
  //       id: "421568",
  //       name: "Pizza Hut",
  //       cloudinaryImageId: "2b4f62d606d1b2bfba9ba9e5386fabb7",
  //       locality: "Ashwath infotech Building",
  //       areaName: "Central Solapur",
  //       costForTwo: "₹350 for two",
  //       cuisines: ["Pizzas", "Italian", "Pastas", "Desserts"],
  //       avgRating: 4.2,
  //       parentId: "721",
  //       avgRatingString: "4.2",
  //       totalRatingsString: "1K+",
  //       sla: {
  //         deliveryTime: 35,
  //         lastMileTravel: 1.9,
  //         serviceability: "SERVICEABLE",
  //         slaString: "35-40 mins",
  //         lastMileTravelString: "1.9 km",
  //         iconType: "ICON_TYPE_EMPTY",
  //       },
  //       availability: {
  //         nextCloseTime: "2024-04-19 01:00:00",
  //         opened: true,
  //       },
  //       badges: {},
  //       isOpen: true,
  //       type: "F",
  //       badgesV2: {
  //         entityBadges: {
  //           imageBased: {},
  //           textBased: {},
  //           textExtendedBadges: {},
  //         },
  //       },
  //       aggregatedDiscountInfoV3: {
  //         header: "50% OFF",
  //         subHeader: "UPTO ₹100",
  //       },
  //       differentiatedUi: {
  //         displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
  //         differentiatedUiMediaDetails: {
  //           mediaType: "ADS_MEDIA_ENUM_IMAGE",
  //           lottie: {},
  //           video: {},
  //         },
  //       },
  //       reviewsSummary: {},
  //       displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
  //       restaurantOfferPresentationInfo: {},
  //     },
  //     analytics: {},
  //     cta: {
  //       link: "https://www.swiggy.com/restaurants/pizza-hut-ashwath-infotech-building-central-solapur-solapur-421568",
  //       type: "WEBLINK",
  //     },
  //   },
  //   {
  //     info: {
  //       id: "103299",
  //       name: "The Only Place",
  //       cloudinaryImageId: "rk81lho32n7yr3ehcuka",
  //       locality: "Ramlal Chowk",
  //       areaName: "Ramlal Chowk",
  //       costForTwo: "₹300 for two",
  //       cuisines: [
  //         "Mughlai",
  //         "Chinese",
  //         "Kebabs",
  //         "Maharashtrian",
  //         "Hyderabadi",
  //         "Indian",
  //         "Punjabi",
  //       ],
  //       avgRating: 3.9,
  //       parentId: "21016",
  //       avgRatingString: "3.9",
  //       totalRatingsString: "1K+",
  //       sla: {
  //         deliveryTime: 34,
  //         lastMileTravel: 1.5,
  //         serviceability: "SERVICEABLE",
  //         slaString: "30-35 mins",
  //         lastMileTravelString: "1.5 km",
  //         iconType: "ICON_TYPE_EMPTY",
  //       },
  //       availability: {
  //         nextCloseTime: "2024-04-19 00:00:00",
  //         opened: true,
  //       },
  //       badges: {},
  //       isOpen: true,
  //       type: "F",
  //       badgesV2: {
  //         entityBadges: {
  //           imageBased: {},
  //           textBased: {},
  //           textExtendedBadges: {},
  //         },
  //       },
  //       aggregatedDiscountInfoV3: {
  //         header: "₹125 OFF",
  //         subHeader: "ABOVE ₹249",
  //         discountTag: "FLAT DEAL",
  //       },
  //       differentiatedUi: {
  //         displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
  //         differentiatedUiMediaDetails: {
  //           mediaType: "ADS_MEDIA_ENUM_IMAGE",
  //           lottie: {},
  //           video: {},
  //         },
  //       },
  //       reviewsSummary: {},
  //       displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
  //       restaurantOfferPresentationInfo: {},
  //     },
  //     analytics: {},
  //     cta: {
  //       link: "https://www.swiggy.com/restaurants/the-only-place-ramlal-chowk-solapur-103299",
  //       type: "WEBLINK",
  //     },
  //   },
  //   {
  //     info: {
  //       id: "165463",
  //       name: "Hotel Ismail Bhai's Chacha (Navi Peth)",
  //       cloudinaryImageId: "dcgvcsdm4lheza4gwliu",
  //       locality: "Gold Pinch Peth",
  //       areaName: "Navi Peth",
  //       costForTwo: "₹250 for two",
  //       cuisines: [
  //         "Biryani",
  //         "Kebabs",
  //         "Maharashtrian",
  //         "North Indian",
  //         "Malwani",
  //       ],
  //       avgRating: 4.3,
  //       parentId: "488080",
  //       avgRatingString: "4.3",
  //       totalRatingsString: "5K+",
  //       sla: {
  //         deliveryTime: 27,
  //         lastMileTravel: 1.4,
  //         serviceability: "SERVICEABLE",
  //         slaString: "25-30 mins",
  //         lastMileTravelString: "1.4 km",
  //         iconType: "ICON_TYPE_EMPTY",
  //       },
  //       availability: {
  //         nextCloseTime: "2024-04-18 23:00:00",
  //         opened: true,
  //       },
  //       badges: {},
  //       isOpen: true,
  //       type: "F",
  //       badgesV2: {
  //         entityBadges: {
  //           imageBased: {},
  //           textBased: {},
  //           textExtendedBadges: {},
  //         },
  //       },
  //       aggregatedDiscountInfoV3: {
  //         header: "₹125 OFF",
  //         subHeader: "ABOVE ₹249",
  //         discountTag: "FLAT DEAL",
  //       },
  //       differentiatedUi: {
  //         displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
  //         differentiatedUiMediaDetails: {
  //           mediaType: "ADS_MEDIA_ENUM_IMAGE",
  //           lottie: {},
  //           video: {},
  //         },
  //       },
  //       reviewsSummary: {},
  //       displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
  //       restaurantOfferPresentationInfo: {},
  //     },
  //     analytics: {},
  //     cta: {
  //       link: "https://www.swiggy.com/restaurants/hotel-ismail-bhais-chacha-navi-peth-gold-pinch-peth-navi-peth-solapur-165463",
  //       type: "WEBLINK",
  //     },
  //   },
  // ];

  return (
    <div>
      <Header />
      <div>
        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = restaurantList.filter(
              (item) => item.info.avgRating > 4
            );
            setRestaurantList(filteredList);
          }}
        >
          Top Rated
        </button>
      </div>
      {restaurantList.map((item, index) => (
        <FoodCarts key={index} resData={item} />
      ))}
    </div>
  );
};

export default Layout;

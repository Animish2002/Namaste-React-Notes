import React from "react";

const Shimmer = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4 py-20">
      {[...Array(12)].map((_, index) => (
        <div key={index} className="bg-gray-200 p-4 rounded-lg animate-pulse">
          <div className="h-48 bg-gray-300 mb-4 rounded-md"></div>
          <div className="h-4 bg-gray-300 mb-2 rounded w-3/4"></div>
          <div className="h-4 bg-gray-300 mb-2 rounded w-1/2"></div>
          <div className="h-4 bg-gray-300 rounded w-full"></div>
        </div>
      ))}
    </div>
  );
};

export default Shimmer;

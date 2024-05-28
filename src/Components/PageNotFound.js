import React from "react";

const NotFoundPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-800 to-pink-700 flex flex-col justify-center items-center px-8">
      <div className="max-w-3xl mx-auto text-center">
        <h1 className="text-9xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-yellow-400 mb-8 animate-pulse">
          404
        </h1>
        <p className="text-4xl font-bold text-white mb-4">
          Oops! Looks like you got lost in the cosmos.
        </p>
        <p className="text-2xl text-gray-300 mb-8">
          The galaxy you're searching for seems to have vanished into the black
          hole.
        </p>
        <a
          href="/"
          className="inline-block bg-gradient-to-r from-pink-500 to-yellow-400 text-white px-8 py-4 rounded-full hover:scale-105 transition-transform duration-300"
        >
          Warp Back to Home
        </a>
      </div>
      <div className="mt-20 relative">
        <div className="absolute inset-0 bg-pink-500 rounded-full opacity-25 animate-ping"></div>
        <div className="relative bg-pink-500 rounded-full w-96 h-96 flex justify-center items-center">
          <svg
            className="text-white w-48 h-48 animate-spin-slow"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"></path>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;

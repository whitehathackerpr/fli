import React from "react";

const Header = () => (
  <header className="bg-gradient-to-r from-blue-600 to-indigo-600 py-12 px-4 text-white">
    <div className="container mx-auto flex flex-col items-center">
      <h1 className="text-4xl md:text-5xl font-bold mb-2">
        Google Flights Clone
      </h1>
      <p className="text-lg md:text-xl">
        Find the best flights for your next adventure
      </p>
    </div>
  </header>
);

export default Header;

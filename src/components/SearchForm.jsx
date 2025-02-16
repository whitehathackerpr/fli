import React, { useState } from "react";
import { FiMapPin, FiCalendar, FiUser } from "react-icons/fi";

const SearchForm = ({ onSearch }) => {
  const [origin, setOrigin] = useState("");
  const [destination, setDestination] = useState("");
  const [date, setDate] = useState("");
  const [adults, setAdults] = useState(1);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(origin, destination, date, adults);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white p-8 rounded-lg shadow-xl max-w-4xl mx-auto transform -translate-y-1/2"
    >
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="flex items-center border-b border-gray-300">
          <FiMapPin className="text-gray-500 mr-2" size={20} />
          <input
            type="text"
            placeholder="Origin"
            value={origin}
            onChange={(e) => setOrigin(e.target.value)}
            className="w-full p-2 focus:outline-none"
            required
          />
        </div>
        <div className="flex items-center border-b border-gray-300">
          <FiMapPin className="text-gray-500 mr-2" size={20} />
          <input
            type="text"
            placeholder="Destination"
            value={destination}
            onChange={(e) => setDestination(e.target.value)}
            className="w-full p-2 focus:outline-none"
            required
          />
        </div>
        <div className="flex items-center border-b border-gray-300">
          <FiCalendar className="text-gray-500 mr-2" size={20} />
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="w-full p-2 focus:outline-none"
            required
          />
        </div>
        <div className="flex items-center border-b border-gray-300">
          <FiUser className="text-gray-500 mr-2" size={20} />
          <input
            type="number"
            min="1"
            value={adults}
            onChange={(e) => setAdults(e.target.value)}
            className="w-full p-2 focus:outline-none"
            required
          />
        </div>
      </div>
      <button
        type="submit"
        className="w-full bg-blue-600 text-white py-3 mt-6 rounded-lg hover:bg-blue-700 transition"
      >
        Search Flights
      </button>
    </form>
  );
};

export default SearchForm;

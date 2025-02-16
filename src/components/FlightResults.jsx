import React from "react";

const FlightResults = ({ flights }) => {
  if (!flights || flights.length === 0) {
    return (
      <div className="text-center text-gray-600 mt-6">
        <p>No flights found. Try different search criteria.</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 mt-10">
      <h2 className="text-2xl font-bold mb-6">Flight Results</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {flights.map((flight, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
          >
            <h3 className="text-xl font-bold mb-2">{flight.airline}</h3>
            <p className="text-gray-700 mb-1">
              <span className="font-semibold">Price:</span> ${flight.price}
            </p>
            <p className="text-gray-700 mb-1">
              <span className="font-semibold">Departure:</span> {flight.departure_time}
            </p>
            <p className="text-gray-700 mb-1">
              <span className="font-semibold">Arrival:</span> {flight.arrival_time}
            </p>
            <button className="mt-4 bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600 transition">
              Book Now
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FlightResults;

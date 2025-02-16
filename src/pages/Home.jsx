import React, { useState } from "react";
import Header from "../components/Header";
import SearchForm from "../components/SearchForm";
import FlightResults from "../components/FlightResults";
import Footer from "../components/Footer";
import fetchFlights from "../utils/fetchFlights";

const Home = () => {
  const [flights, setFlights] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSearch = async (origin, destination, date, adults) => {
    setLoading(true);
    setError("");
    try {
      const data = await fetchFlights(origin, destination, date, adults);
      setFlights(data.flights || []);
    } catch (err) {
      setError("Failed to fetch flight data. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Header />
      <main className="relative">
        <div className="container mx-auto px-4">
          <SearchForm onSearch={handleSearch} />
        </div>
        {loading && (
          <div className="container mx-auto text-center mt-4">
            <p className="text-blue-600">Loading...</p>
          </div>
        )}
        {error && (
          <div className="container mx-auto text-center mt-4">
            <p className="text-red-500">{error}</p>
          </div>
        )}
        <FlightResults flights={flights} />
      </main>
      <Footer />
    </>
  );
};

export default Home;

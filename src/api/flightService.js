import axiosInstance from "./axiosConfig";

export const fetchFlights = async (origin, destination, date, adults) => {
  try {
    const response = await axiosInstance.get("/search-flights", {
      params: {
        origin,
        destination,
        date,
        adults,
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching flight data:", error);
    throw error;
  }
};

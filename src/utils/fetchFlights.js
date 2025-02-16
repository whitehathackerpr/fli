const fetchFlights = async (origin, destination, date, adults) => {
    const API_URL = "https://rapidapi.com/apiheya/api/sky-scrapper";
    const options = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "X-RapidAPI-Host": "apiheya-sky-scrapper.p.rapidapi.com",
        "X-RapidAPI-Key": "df45b5acb5mshcd569a8e899e76ep169969jsndc62c5881bdf",
      },
    };
  
    const url = `${API_URL}/flights?origin=${origin}&destination=${destination}&date=${date}&adults=${adults}`;
  
    try {
      const response = await fetch(url, options);
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Error fetching flights:", error);
      throw error;
    }
  };
  
  export default fetchFlights;
  
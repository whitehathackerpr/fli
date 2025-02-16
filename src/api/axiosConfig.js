import axios from "axios";

const API_BASE_URL = "https://sky-scrapper.p.rapidapi.com";

const axiosInstance = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
    "X-RapidAPI-Host": "sky-scrapper.p.rapidapi.com",
    "X-RapidAPI-Key": process.env.REACT_APP_API_KEY,
  },
});

export default axiosInstance;

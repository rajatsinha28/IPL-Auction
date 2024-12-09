const axios = require("axios");

const url =
  process.env.NODE_ENV === "production"
    ? "https://ipl-mega-auction.herokuapp.com/"
    : "http://localhost:8000/";

// const axiosInstance = axios.create({
//   withCredentials: true,
//   baseURL: url,
// });

const axiosInstance = axios.create({
  withCredentials: true,
  baseURL: "https://ipl-auction-website.onrender.com",
});

export default axiosInstance;

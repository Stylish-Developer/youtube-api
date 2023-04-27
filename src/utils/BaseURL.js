import axios from "axios";

// --> Base URL for this application.
const url = "https://youtube-search-results.p.rapidapi.com";

export const axiosInstance = axios.create({
  baseURL: url,
});

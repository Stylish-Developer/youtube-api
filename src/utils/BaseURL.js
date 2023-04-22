import axios from "axios";

// --> Base URL for this application.
const url = "https://youtube-search-results.p.rapidapi.com/youtube-search/";

const axiosInstance = axios.create({
  baseURL: url,
});

export default axiosInstance;

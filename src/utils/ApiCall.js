import { axiosInstance } from "./BaseURL";

// --> api call for common
export const SearchedVideos = async (value) => {
  const headers = {
    "X-RapidAPI-Key": "81dd749f4dmshf23b9ac8cad5495p10c5e9jsn67e4271bb872",
    "X-RapidAPI-Host": "youtube-search-results.p.rapidapi.com",
  };

  const response = await axiosInstance({
    method: "get",
    url: `/youtube-search/?q=${value}`,
    headers,
  })
    .then((res) => res.data)
    .catch((err) => {
      if (err.response) {
        //the server responded with a status code other than 200 range
      } else if (err.request) {
        //request was made but no response "err.request"
      } else {
        //"err.message"
      }
    });

  return response;
};

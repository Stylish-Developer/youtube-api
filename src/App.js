import { useState } from "react";
import "./App.css";
import SearchBox from "./components/searchbox";
import VideoList from "./components/videolist";
import { SearchedVideos } from "./utils/ApiCall";

// --> app component
const App = () => {
  const [inputText, setInputText] = useState("");
  const [videosResponse, setVideosResponse] = useState([]);
  const [id, setId] = useState("");

  const handleChange = (e) => {
    setInputText(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const videosData = await SearchedVideos(inputText);
    setVideosResponse(videosData);
  };

  const receiveHandler = (value) => {
    setId(value);
  };

  return (
    <>
      <div className="container">
        <div className="searchContainer">
          <SearchBox
            inputText={inputText}
            handleChange={handleChange}
            handleSubmit={handleSubmit}
          />
        </div>
        <div className="bodyOfTheContent">
          <div className="leftSection">
            <iframe
              width={"80%"}
              height="400"
              src={`https://www.youtube.com/embed/${id}`}
              allow="autoplay; encrypted-media"
              allowFullScreen
            ></iframe>
          </div>
          <div className="rightSection">
            <VideoList
              videosResponse={videosResponse}
              receiveHandler={receiveHandler}
            />
          </div>
        </div>
        <div className="disclaimerContainer">
          <p>disclaimer section</p>
        </div>
      </div>
    </>
  );
};

export default App;

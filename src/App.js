import { useState } from "react";
import "./App.css";
import SearchBox from "./components/searchbox";
import VideoList from "./components/videolist";
import { SearchedVideos } from "./utils/ApiCall";

// --> app component
const App = () => {
  const [inputText, setInputText] = useState("");
  const [videosResponse, setVideosResponse] = useState([]);

  const handleChange = (e) => {
    setInputText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const videosData = SearchedVideos(inputText);
    setTimeout(() => {
      setVideosResponse(videosData);
    }, 1000);
  };

  return (
    <>
      <div className="container">
        <div className="searchContainer">
          <SearchBox
            inputText={inputText}
            setInputText={setInputText}
            handleChange={handleChange}
            handleSubmit={handleSubmit}
          />
        </div>
        <div className="bodyOfTheContent">
          <div className="leftSection">01</div>
          <div className="rightSection">
            <VideoList
              videosResponse={videosResponse}
              emptyHeading={`No matches for “${inputText}”`}
            />
          </div>
        </div>
        <div className="disclaimerContainer">
          <p>disclaimer section</p>
        </div>
      </div>

      <h2>{inputText}</h2>
    </>
  );
};

export default App;

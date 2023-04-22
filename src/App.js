import "./App.css";
import SearchBox from "./components/searchbox";

// --> app component
const App = () => {
  return (
    <>
      <div className="container">
        <div className="searchContainer">
          <SearchBox />
        </div>
        <div className="bodyOfTheContent">
          <div className="leftSection">01</div>
          <div className="rightSection">02</div>
        </div>
        <div className="disclaimerContainer">
          <p>disclaimer section</p>
        </div>
      </div>
    </>
  );
};

export default App;

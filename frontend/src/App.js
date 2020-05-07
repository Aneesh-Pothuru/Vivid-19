import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import AppNavBar from "./components/AppNavbar/AppNavbar";
import Description from "./components/Description/Description";
import Map from "./components/Map/Map";
import Data from "./components/TheData/Data";

const App = () => {
  return (
    <div className="App">
      <AppNavBar />
      <Map />
      <Data />
      <Description />
    </div>
  );
};

export default App;

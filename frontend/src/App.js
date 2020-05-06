import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import AppNavBar from "./components/AppNavbar/AppNavbar";
import Description from "./components/Description/Description";
import Map from "./components/Map/Map";

const App = () => {
  return (
    <div className="App">
      <AppNavBar />
      <Map />
      <Description />
    </div>
  );
};

export default App;

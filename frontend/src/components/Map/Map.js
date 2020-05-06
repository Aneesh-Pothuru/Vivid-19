import React from "react";
import "./Map.css";
import map from "../../map.jpg";

const Map = () => {
  return (
    <div>
      <h1 align="right">
        <img className="map" src={map}></img>
      </h1>
    </div>
  );
};

export default Map;

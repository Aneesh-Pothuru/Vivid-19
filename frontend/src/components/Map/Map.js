import React from "react";
import "./Map.css";
import map from "../../map.png";

const Map = () => {
  return (
    <div>
      <h1>
        <img className="map" src={map}></img>
      </h1>
    </div>
  );
};

export default Map;

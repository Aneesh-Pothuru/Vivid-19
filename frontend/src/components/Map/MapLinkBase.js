import React from "react";
import "./Map.css";
import Iframe from "react-iframe";

const Map = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Iframe
        src="https://createaclickablemap.com/map.php?&id=91659&maplocation=false&online=true"
        width="1000"
        height="525"
        frameBorder="0"
        className="newMap"
      />
    </div>
  );
};

export default Map;

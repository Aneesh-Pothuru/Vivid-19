import React, { Component } from "react";
import "./Map.css";
import "./MapColor.css";
import USAMap from "react-usa-map";

class App extends Component {
  mapHandler = (event) => {
    alert(event.target.dataset.name);
  };

  render() {
    return (
      <div className={["map", "path"].join(" ")}>
        <USAMap onClick={this.mapHandler} />
      </div>
    );
  }
}

export default App;

// import React from "react";
// import "./Map.css";
// import map from "../../map.png";

// const Map = () => {
//   return (
//     <div>
//       <h1>
//         <img className="map" src={map}></img>
//       </h1>
//     </div>
//   );
// };

// export default Map;

// import React from "react";
// import "./Map.css";
// import Iframe from "react-iframe";

// const Map = () => {
//   return (
//     <div
//       style={{
//         display: "flex",
//         justifyContent: "center",
//       }}
//     >
//       <Iframe
//         src="https://createaclickablemap.com/map.php?&id=91659&maplocation=false&online=true"
//         width="1000"
//         height="525"
//         frameBorder="0"
//         className="newMap"
//       />
//     </div>
//   );
// };

// export default Map;

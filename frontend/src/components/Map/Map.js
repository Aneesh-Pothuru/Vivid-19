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

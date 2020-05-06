import React from "react";
import "./Description.css";

const Description = (props) => {
  return (
    <div className="background">
      <h4 className="title" align="justify">
        {" "}
        What is Vivid?{" "}
      </h4>
      <p className="description" align="justify">
        VIVID is a data-visualization web-app which displays COVID-cases in
        real-time, using all information from trusted data sources and even
        reports from users.
      </p>
      <h4 className="title" align="justify">
        {" "}
        What is Our Goal?{" "}
      </h4>
      <p className="description" align="justify">
        Our goal is to help people by gathering data for in-depth analysis (e.g.
        time series to monitor the growth, spread of the virus) and localized
        reports.The platform is vital for information consolidation, and all
        gathered information is open to use for the public. This is a 100% open
        source project, all information and publishable data are available on
        Github as well.
      </p>
      <h4 className="title" align="justify">
        {" "}
        Who are our sources?{" "}
      </h4>
      <p className="description" align="justify">
        CDC, The New England Journal of Medicine, and John Hopkins University
      </p>
    </div>
  );
};

export default Description;

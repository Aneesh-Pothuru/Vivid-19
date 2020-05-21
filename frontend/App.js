import React, { useMemo, useState, useEffect } from "react";
import axios from "axios";
import Table from "./Table";
import "./App.css";

function App() {
  
  const [loadingData, setLoadingData] = useState(true);
  const columns = useMemo(() => [
    {
      Header: "State",
      accessor: "state",
    },
    {
      Header: "Positive Cases",
      accessor: "positive",
    },
    {
      Header: "Recovered Cases",
      accessor: "recovered",
      

    },
    {
      Header: "Deaths",
      accessor: "death",
    },
    {
      Header: "Total Tested",
      accessor: "total",
    }
  
  ]);

  const [data, setData] = useState([]);

  useEffect(() => {
    async function getData() {
      await axios
        .get("https://covidtracking.com/api/v1/states/current.json")
        .then((response) => {
      
          console.log(response.data);
          setData(response.data);
          setLoadingData(false);
        });
    }
    if (loadingData) {
      getData();
    }
  }, []);

  return (
    <div className="App">
      {loadingData ? (
        <p>Loading Please wait...</p>
      ) : (
        <Table columns={columns} data={data} />
      )}
    </div>
  );
}

export default App;
import React, { useState, useEffect } from "react";
import "./App.scss";
import Header from "./components/Header";

function App() {
  const [pageData, setPageData] = useState({});

  function loadData(Language) {
    fetch(`/myData${Language}.json`)
      .then((response) => response.json())
      .then((data) => {
        setPageData({
          content: data,
        });
      })
      .catch((err) => console.log(`HTML data not found :() ${err}`));
  }
  useEffect(() => {
    loadData("PL");
  }, []);

  return (
    <div className="app">
      <Header data={pageData.content} />
    </div>
  );
}

export default App;

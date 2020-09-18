import React, { useState, useEffect } from "react";
import "./App.scss";
//components
import Header from "./components/Header";
import WellcomePage from "./components/WellcomePage";
import scroll from "react-scroll";
//icons
import ArrowDropUpIcon from "@material-ui/icons/ArrowDropUp";

function App() {
  const [pageData, setPageData] = useState({});

  const handleClick = () => {
    scroll.animateScroll.scrollToTop();
    console.log(scroll);
  };

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
    <>
      <div className="app">
        <Header data={pageData.content} />
      </div>

      <div className="scrollContainer">
        <WellcomePage data={pageData.content} />
        <section id="page-1" className="section">
          section 1
        </section>
        <section id="page-2" className="section">
          section 2
        </section>
        <section id="page-3" className="section">
          section 3
          <br />
          <br />
          <ArrowDropUpIcon onClick={handleClick} />
        </section>
      </div>
    </>
  );
}

export default App;

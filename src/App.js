import React, { useState, useEffect } from "react";
import "./App.scss";
//components
import Header from "./components/Header";
import WellcomePage from "./components/WellcomePage";
import About from "./components/About";
import Form from "./components/Form";
import Portfolio from "./components/Portfolio";
import Footer from "./components/Footer";

import ArrowDropUpIcon from "@material-ui/icons/ArrowDropUp";
import scroll from "react-scroll";

function App() {
  const [pageData, setPageData] = useState({});
  const handleClick = () => {
    scroll.animateScroll.scrollToTop();
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
          <About data={pageData.content} />
        </section>
        <section id="page-2" className="section">
          <Portfolio data={pageData.content} />
        </section>
        <section id="page-3" className="section">
          <Form data={pageData.content} />
        </section>
        <section id="page-4" className="section">
          <div className="app__footer">
            <Footer />
          </div>
        </section>
        <span className="arrow">
          <ArrowDropUpIcon onClick={handleClick} />
        </span>
      </div>
    </>
  );
}

export default App;

import React from "react";
import PortfolioItem from "./PortfolioItem";

function Portfolio({ data }) {
  return (
    <div className="portfolio">
      {data !== undefined ? (
        <>
          <h3 className="portfolio__title">{data.portfolio}</h3>
          <div className="porfolio__myWorkContainer">
            {data.myWork.map((item, index) => (
              <PortfolioItem key={index} item={item} />
            ))}
          </div>
        </>
      ) : null}
    </div>
  );
}

export default Portfolio;

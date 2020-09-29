import React from "react";

function PortfolioItem({ key, item }) {
  return (
    <>
      <div key={key} div className="portfolio__myWorkItem">
        {item}
      </div>
    </>
  );
}

export default PortfolioItem;

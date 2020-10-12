import React from "react";

function PortfolioItem({ image, link }) {
  return (
    <>
      <div div className="portfolio__myWorkItem">
        <a href={link}>
          <img src={image} alt="" />
        </a>
      </div>
    </>
  );
}

export default PortfolioItem;

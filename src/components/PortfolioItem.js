import React from "react";

function PortfolioItem({ image, link, sourceCode }) {
  return (
    <>
      <div div className="PortfolioItem">
        <a href={link}>
          <img src={image} alt="" />
        </a>
        <a href={sourceCode}>source code</a>
      </div>
    </>
  );
}

export default PortfolioItem;

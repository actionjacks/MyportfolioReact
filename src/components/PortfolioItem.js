import React from "react";

function PortfolioItem({ image, link, sourceCode, isDeployed }) {
  return (
    <>
      <div div className="PortfolioItem">
        <a href={link}>
          <img src={image} alt="" />
        </a>
        {isDeployed === "false" ? (
          <span className="isDeployed">no deployed</span>
        ) : null}
        <a href={sourceCode}>source code</a>
      </div>
    </>
  );
}

export default PortfolioItem;

import React from "react";

function Portfolio({ data }) {
  return (
    <div className="portfolio">
      {data !== undefined ? (
        <>
          <h3>{data.portfolio}</h3>
          <div className="porfolio__myWorkContainer">
            {data.myWork.map((item, index) => (
              <div key={index}>{item}</div>
            ))}
          </div>
        </>
      ) : null}
    </div>
  );
}

export default Portfolio;

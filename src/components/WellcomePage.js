import React from "react";
import GitHubIcon from "@material-ui/icons/GitHub";
import RubberBand from "react-reveal/RubberBand";

function WellcomePage({ data }) {
  return (
    <>
      {data?.wellcomePage ? (
        <section className="wellcomePage">
          <div className="wellcomePage__banerText">
            <RubberBand>
              <h1>{data.wellcomePage.title}</h1>
              <h3>{data.wellcomePage.mydesc}</h3>
            </RubberBand>
            <div className="icons">
              <a href="https://github.com/actionjacks">
                <GitHubIcon className="icon__github" />
              </a>
            </div>
          </div>
        </section>
      ) : (
        <section className="errorDataNotFound">
          <h1>Data.json missing ?</h1>
        </section>
      )}
    </>
  );
}

export default WellcomePage;

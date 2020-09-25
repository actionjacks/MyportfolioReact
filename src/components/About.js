import React from "react";

function About({ data }) {
  return (
    <>
      {data !== undefined ? (
        <div className="about">
          <img
            className="about__profilePic"
            src="../images/avatar.jpg"
            alt="jacek profile pic"
          />
          <div className="about__details">
            <aside className="about__me">
              <h2>{data.about.aboutMe}</h2>
              <p>{data.about.aboutMeDetails}</p>
            </aside>
            <aside className="about__me__details">
              <h2>{data.about.contact}</h2>
              <p className="about__me_details__adress">
                <span>{data.about.contactDetails.name}</span>
                <br />
                <span>{data.about.contactDetails.street}</span>
                <br />
                <span>{data.about.contactDetails.zipcode}</span>
                <br />
                <span>{data.about.contactDetails.town}</span>
                <br />
                <span>{data.about.contactDetails.phone}</span>
                <br />
                <span>{data.about.contactDetails.mail}</span>
                <br />
              </p>
            </aside>
          </div>
        </div>
      ) : null}
    </>
  );
}

export default About;

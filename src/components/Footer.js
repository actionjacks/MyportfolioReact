import React from "react";
import GitHubIcon from "@material-ui/icons/GitHub";
import FacebookIcon from "@material-ui/icons/Facebook";
// import ArrowDropUpIcon from "@material-ui/icons/ArrowDropUp";
import scroll from "react-scroll";

function Footer() {
  const handleClick = () => {
    scroll.animateScroll.scrollToTop();
  };

  return (
    <div className="footer">
      <span className="footer_arrow">
        <img
          src="./images/arrow_icon.png"
          className="arrow__icon"
          onClick={handleClick}
        />
        <p>Up</p>
      </span>
      <div className="footer__icons">
        <GitHubIcon className="githubIcon" />
        <FacebookIcon className="facebookIcon" />
      </div>
      <ul className="footer__copyright">
        <li>
          &copy; All credit goes to Jacek Zablocki - Copyright 2020 Jacek
          Zablocki
        </li>
        <li>
          Design by
          <a title="jaxoo" href="#">
            jaxoo
          </a>
        </li>
        <li className="footer__reactIcon">
          <p>Powered by</p>
          <a href="https://pl.reactjs.org/docs/getting-started.html">
            <img src="./images/react_icon.svg" alt="" />
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Footer;

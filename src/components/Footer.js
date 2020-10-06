import React from "react";
import GitHubIcon from "@material-ui/icons/GitHub";
import FacebookIcon from "@material-ui/icons/Facebook";
import ArrowDropUpIcon from "@material-ui/icons/ArrowDropUp";
import scroll from "react-scroll";

function Footer() {
  const handleClick = () => {
    scroll.animateScroll.scrollToTop();
  };

  return (
    <div className="footer">
      <span className="footer_arrow">
        <ArrowDropUpIcon className="arrow__icon" onClick={handleClick} />
        <p>Up</p>
      </span>
      <div className="footer__icons">
        <GitHubIcon className="githubIcon" />
        <FacebookIcon className="facebookIcon" />
      </div>
      <ul className="footer_copyright">
        <li>
          &copy; All credit goes to Jacek Zabłocki - Copyright 2020 Jacek
          Zabłocki
        </li>
        <li>
          Design by{" "}
          <a title="jaxoo" href="#">
            jaxoo
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Footer;

import React from "react";
import GitHubIcon from "@material-ui/icons/GitHub";
import FacebookIcon from "@material-ui/icons/Facebook";

function Footer() {
  return (
    <div className="footer">
      <div className="footer__icons">
        <GitHubIcon />
        <FacebookIcon />
        <ul>
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
    </div>
  );
}

export default Footer;

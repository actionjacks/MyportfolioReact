import React, { useEffect, useState } from "react";

function Header({ data }) {
  const [show, handleShow] = useState(false);

  useEffect(() => {
    console.log("klik");
    window.addEventListener("scroll", () => {
      if (window.scrollY > 120) {
        handleShow(true);
      } else handleShow(false);
    });
    return () => {
      window.removeEventListener("scroll");
    };
  }, []);

  let idSectionForScroll = 0;

  return (
    <div className={`header ${show && "nav__black"}`}>
      {data !== undefined ? (
        <nav className="header__list">
          <ul className="header__items">
            {data.main.headerOptions.map((menuOption, index) => (
              <li className="header__item">
                <a
                  href={`#page-${++idSectionForScroll}`}
                  className="header__link"
                  key={index}
                >
                  {menuOption}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      ) : null}
    </div>
  );
}

export default Header;

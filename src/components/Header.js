import React, { useEffect, useState } from "react";

function Header({ data }) {
  const [show, handleShow] = useState(false);
  const [active, handleActive] = useState("--inactive");

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 120) {
        handleShow(true);
      } else handleShow(false);
    });
    return () => {
      window.removeEventListener("scroll");
    };
  }, []);

  const handleClick = () => {
    console.log("klik");
    if (active === "--inactive") {
      handleActive("--active");
    } else {
      handleActive("--inactive");
    }
  };
  let idSectionForScroll = 0;

  return (
    <>
      <nav className="header__hamburger">
        <img onClick={handleClick} src="../images/menuBurger.png" alt="" />
        {data !== undefined ? (
          <>
            <nav className="header__hamburger__list">
              <ul className="header__hamburger__items">
                {data.main.headerOptions.map((menuOption, index) => (
                  <li className={`header__hamburger__item${active}`}>
                    <a
                      href={`#page-${++idSectionForScroll}`}
                      className={"header__hamburger__link"}
                      key={index}
                    >
                      {menuOption}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </>
        ) : null}
      </nav>
      <div className={`header ${show && "nav__black"}`}>
        {data !== undefined ? (
          <>
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
          </>
        ) : null}
      </div>
    </>
  );
}

export default Header;

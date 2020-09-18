import React from "react";

function Header({ data }) {
  let idSectionForScroll = 0;
  return (
    <div className="header">
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

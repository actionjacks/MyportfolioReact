import React from "react";

function Header(props) {
  const data = props.data;
  return (
    <div>
      {data !== undefined ? (
        <nav>
          <ul>
            {data.main.headerOptions.map((menuOption, index) => (
              <li key={index}>{menuOption}</li>
            ))}
          </ul>
        </nav>
      ) : null}
    </div>
  );
}

export default Header;

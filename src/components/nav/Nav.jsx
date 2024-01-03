import React from "react";
import "./_nav.sass";

function Nav() {
  const navList = [
    "Home",
    "About",
    "Services",
    "Traners",
    "Classes",
    "Blog",
    "Contact us",
    "Join Now",
  ];

  return (
    <div className="nav-container">
      <h3 className="nav-logo">MotorCityGym</h3>
      <div className="nav-links-wrapper">
        <ul className="nav-lists">
          {navList.map((e) => (
            <li className="nav-list" key={e}>
              <a href="#" className="nav-list-a">
                {e}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Nav;

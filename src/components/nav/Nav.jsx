import React from "react";
import "./_nav.sass";
import { Link } from "react-router-dom";

function Nav() {
  const navList = [
    { titel: "Home", link: "" },
    { titel: "About", link: "about" },
    { titel: "Traners", link: "traners" },
    { titel: "Classes", link: "#" },
    { titel: "Blog", link: "#" },
    { titel: "Contact us", link: "#" },
    { titel: "Join Now", link: "#" },
  ];

  return (
    <div className="nav-container">
      <h3 className="nav-logo">MotorCityGym</h3>
      <div className="nav-links-wrapper">
        <ul className="nav-lists">
          {navList.map((i) => (
            <li className="nav-list" key={i.titel}>
              {console.log(i.link)}
              <Link to={`/${i.link}`} className="nav-list-a">
                {i.titel}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Nav;

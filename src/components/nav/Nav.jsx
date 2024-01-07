import React from "react";
import "./_nav.sass";
import { Link } from "react-router-dom";

function Nav() {
  const navList = [
    { titel: "Home", link: "" },
    { titel: "About", link: "about" },
    { titel: "Price", link: "price" },
    // { titel: "Traners", link: "traners" },
    // { titel: "Classes", link: "#" },
    // { titel: "Blog", link: "#" },
    { titel: "Contact us", link: "contact" },
    { titel: "Join Now", link: "#" },
  ];

  return (
    <div className="nav-container">
      <h3 className="nav-logo">MotorCityGym</h3>
      <div className="nav-links-wrapper">
        <ul className="nav-lists">
          {navList.map((i) => (
            <li className="nav-list" key={i.titel}>
              <Link to={`/gym-v2/${i.link}`} className="nav-list-a">
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

import React from "react";
import "./modalNavBar.sass";
import { Link } from "react-router-dom";

function ModalNavBar({ isOpen, onClose }) {
  const navList = [
    { titel: "Home", link: "" },
    { titel: "About", link: "about" },
    // { titel: "Traners", link: "traners" },
    // { titel: "Classes", link: "#" },
    // { titel: "Blog", link: "#" },
    { titel: "Contact us", link: "contact" },
    { titel: "Join Now", link: "#" },
  ];

  return (
    <div className={`modal-nav-container ${isOpen ? "open" : ""}`}>
      <span className="btn-close" onClick={onClose}>
        &times;
      </span>
      <h3 className="nav-logo">MotorCityGym</h3>
      <div className="modal-nav-links-wrapper">
        <ul className="modal-nav-lists">
          {navList.map((i) => (
            <li className="modal-nav-list" key={i.titel}>
              {console.log(i.link)}
              <Link
                to={`/gym-v2/${i.link}`}
                className="modal-nav-list-a"
                onClick={onClose}
              >
                {i.titel}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default ModalNavBar;

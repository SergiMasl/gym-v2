import React from "react";
import "./_home.sass";
import Insta from "../../../styles/svg/instagram.svg";
import Twitter from "../../../styles/svg/twitter.svg";
import FB from "../../../styles/svg/facebook.svg";
// import { Link } from "react-router-dom";
import ModalMenu from "../../../styles/svg/modal-open.png";

function Home({ openModal }) {
  return (
    <div className="container">
      <button onClick={openModal} className="btn-modal-open">
        <img src={ModalMenu} alt="menu" className="modal-img" />
      </button>
      <div className="home-wrapper">
        <div className="home-content">
          <h3 className="home-title">BUILD YOUR BODY STRONG</h3>
          <p className="home-tetx">
            Achieve your health & fitness goals at any stage
          </p>
          <button className="home-start">Get Started</button>
        </div>
        <div className="home-socials">
          <a href="#" className="social-link">
            <img src={Insta} alt="" />
          </a>
          <a href="#" className="social-link">
            <img src={Twitter} alt="" />
          </a>
          <a href="#" className="social-link">
            <img src={FB} alt="" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Home;

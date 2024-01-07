import React from "react";
import "./price.sass";
import PriceCard from "./PriceCard";
import ModalMenu from "../../../styles/svg/modal-open.png";

function Price({ openModal }) {
  return (
    <div className="price-conteiner">
      <button onClick={openModal} className="btn-modal-open">
        <img src={ModalMenu} alt="menu" className="modal-img" />
      </button>
      <div className="price-title">
        <h4>Our Price</h4>
        <div className="line"></div>
        <p>
          CHOOSE YOUR <span>PRICING</span> PLAN
        </p>
      </div>
      <div className="price-content">
        <PriceCard />
      </div>
    </div>
  );
}

export default Price;

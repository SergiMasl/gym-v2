import React from "react";
import "./ourservices.sass";
import ReactPlayer from "react-player";

function OurServices() {
  return (
    <div className="ourservices-wrapper">
      <div className="os-content-wrapper">
        <h3>What We Do</h3>
        <p>Our Services</p>
        <div></div>
      </div>
      <div className="os-video">
        <ReactPlayer
          className="react-player"
          url="https://www.youtube.com/watch?v=Osd4DLpMNp4"
          width="100%"
          height="100%"
        />
      </div>
    </div>
  );
}

export default OurServices;
//https://www.youtube.com/watch?v=Osd4DLpMNp4

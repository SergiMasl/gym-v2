import React from "react";
import "./_aboutus.sass";
import Img from "../../../styles/img/fitness-ua.jpg";
import ImgDone from "../../../styles/svg/done.svg";

function AboutUs() {
  return (
    <div className="aboutus-wrapper">
      <div className="au-img-conteiner">
        <img src={Img} alt="" />
      </div>
      <div className="au-content">
        <div className="au-title-content">
          <h4 className="au-title">About Us</h4>
        </div>
        <p className="ua-text-title">
          WE PROVIDE TRANING AND BEST <span>FITNESS MOTIVATIONS</span>
        </p>
        <p className="ua-text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed commodo
          justo ac justo ultrices, eget fermentum ipsum gravida. Nullam auctor,
          elit vel lacinia consectetur, quam elit accumsan purus, ac tincidunt
          sapien nisl vel justo. In hac habitasse platea dictumst. Sed ut ligula
          et elit bibendum auctor. Integer malesuada quam in justo tincidunt,
          sit amet vestibulum tortor luctus.
        </p>
        <ul className="ua-list">
          <li className="ua-li">
            <img src={ImgDone} alt="" className="img-done-ua" />
            <p>Over 20 years of experience</p>
          </li>
          <li className="ua-li">
            <img src={ImgDone} alt="" className="img-done-ua" />
            <p>Certified trainers</p>
          </li>
          <li className="ua-li">
            <img src={ImgDone} alt="" className="img-done-ua" />
            <p>Exceptional work quality</p>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default AboutUs;

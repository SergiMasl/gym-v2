import "./contacts.sass";
import Insta from "../../../styles/svg/instagram.svg";
import FB from "../../../styles/svg/facebook.svg";
import Twitter from "../../../styles/svg/twitter.svg";
import FormEmailSub from "./FormEmailSub";
import FormContact from "./FormContact";
import ModalMenu from "../../../styles/svg/modal-open.png";

function Contacts({ openModal }) {
  return (
    <div className="contacts-wrapper">
      <button onClick={openModal} className="btn-modal-open">
        <img src={ModalMenu} alt="menu" className="modal-img" />
      </button>
      <div className="footer-wrapper">
        <div className="footer-content">
          <h3 className="footer-title">
            GET IN <span>TOUCH</span>
          </h3>
          <ul className="footer">
            <li>
              <img src="" alt="" />
              <p>Address: </p>
              <a href="#">1047 Woodward Ave, Detroit, MI 48226</a>
            </li>
            <li>
              <img src="" alt="" />
              <p>Tel.:</p>
              <a href="tel:00-555-555-5555">+00 555 555 5555</a>
            </li>
            <li>
              <img src="" alt="" />
              <p>Email: </p>
              <a href="email:xxxxxxxx@xx.xx">MotoCityDetroit@mcd.com</a>
            </li>
          </ul>
        </div>
        <div className="footer-form-wrapper">
          <FormContact />
        </div>
      </div>
      <div className="footer-operation-time">
        <h3 className="footer-logo">MotoCityDetroit</h3>
        <div className="footer-content-operation-time">
          <h4>OPENING HOURS</h4>
          <div className="time-wrap">
            <p>Monday - Friday.............6AM-10AM</p>
            <p>Satuday..........................10AM-10AM</p>
            <p>Sunday............................Closed</p>
          </div>
        </div>
        <div className="footer-content-sub">
          <h4>NEWSLETTER</h4>
          <p>An inspiring newsletter is one click away!</p>
          <FormEmailSub />
        </div>
      </div>
      <div className="underline"></div>
      <div className="footer-icons">
        <div className="icons">
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

export default Contacts;

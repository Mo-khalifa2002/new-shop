import React from "react";
import "./footer.scss";
import { AiFillYoutube } from "react-icons/ai";
import { AiOutlineTwitter } from "react-icons/ai";
import { FaInstagram } from "react-icons/fa";
import { BsFacebook } from "react-icons/bs";
import { RiMessage3Fill } from "react-icons/ri";
import { AiTwotonePhone } from "react-icons/ai";
import { GrLocation } from "react-icons/gr";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-left">
        <h1>Mo-khalifa</h1>
        <p className="footer-desc">
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which don’t look even slightly believable.
        </p>
        <div className="foooter-social">
          <div className="footer-social-conaainer text-center d-flex justify-content-start align-items-center">
            <div className="footer-social-icon face fs-2 m-3">
              <BsFacebook />
            </div>
            <div className="footer-social-icon you fs-2 m-3">
              <AiFillYoutube />
            </div>
            <div className="footer-social-icon ins fs-2 m-3">
              <FaInstagram />
            </div>
            <div className="footer-social-icon twi fs-2 m-3">
              <AiOutlineTwitter />
            </div>
          </div>
        </div>
      </div>
      {/* center */}
      <div className="footer-center">
        <h2 className="footer-center-title">Usefull Links</h2>
        <ul className="footer-list">
          <li className="footer-list-item text-capitalize">home</li>
          <li className="footer-list-item text-capitalize">cart</li>
          <li className="footer-list-item text-capitalize">man fashion</li>
          <li className="footer-list-item text-capitalize">woman fashion</li>
          <li className="footer-list-item text-capitalize">accessories</li>
          <li className="footer-list-item text-capitalize">my account</li>
          <li className="footer-list-item text-capitalize">order tracking</li>
          <li className="footer-list-item text-capitalize">wishlist</li>
          <li className="footer-list-item text-capitalize">terms</li>
          <li className="footer-list-item text-capitalize">shop</li>
        </ul>
      </div>
      {/* right */}
      <div className="footer-right">
        <h2 className="footer-title">contact</h2>
        <div className="footer-contact-item">
          <GrLocation /> 622 Dixie Path , South Tobinchester 98336
        </div>
        <div className="footer-contact-item">
          <AiTwotonePhone /> +1 234 56 78
        </div>
        <div className="footer-contact-item">
          <RiMessage3Fill /> contact@mo.khalifa
        </div>
      </div>
    </div>
  );
};

export default Footer;

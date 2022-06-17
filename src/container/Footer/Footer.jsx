import React from "react";
import { FooterOverlay, Newsletter } from "../../components";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import "./Footer.css";
import { images } from "../../constants";

const Footer = () => (
  <div className="app__footer section__padding">
    <FooterOverlay />
    <Newsletter />
    <div className="app__footer-links">
      <div className="app__footer-links_contacts">
        <h1 className="app__footer-headtext">Contact Us</h1>
        <p className="__opensans">901 S. Main St, Suite 100</p>
        <p className="p__opensans">+1 (844) 567-8989</p>
        <p className="p__opensans">+55 (11) 99999-9999</p>
      </div>
      <div className="app__foot-links_logo">
        <img src={images.gericht} alt="footer_logo" />
        <p className="p__opensans">Lorem, ipsum dolor sit.</p>
        <img
          src={images.spoon}
          alt="spoon"
          className="spoon__img"
          style={{ marginTop: "15px" }}
        />
        <div className="app__footer-links_icons">
          <FaFacebook />
          <FaInstagram />
          <FaTwitter />
        </div>
      </div>
      <div className="app__footer-links-work">
        <h1 className="app__footer-headtext">Working Hours</h1>
        <p className="p__opensans">Monday-Friday</p>
        <p className="p__opensans">9:00-17:00</p>
        <p className="p__opensans">Saturday-Sunday</p>
        <p className="p__opensans">10:00-15:00</p>
      </div>
    </div>
    <div className="footer__copyright">
      <p className="p__opensans">© 2020 All rights reserved.</p>
    </div>
  </div>
);

export default Footer;

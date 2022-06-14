import React from "react";
import { SubHeading } from "../../components";
import { images } from "../../constants";
import "./Header.css";

const Header = () => (
  <div
    className="app__header app__header app__wrapper section__padding"
    id="home"
  >
    <div className="app__wrapper_info">
      <SubHeading title="Chase The New Flavor" />
      <h1 className="app__header-h1"> The Key to Fine Dining</h1>
      <p style={{ margin: "2rem 0" }} className="p__opensans">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eaque, dolorem
        in commodi soluta culpa sequi.
      </p>
      <button type="button" className="custom__button">
        Explore Menu
      </button>
    </div>
    <div className="app__wrapper_img">
      <img src={images.welcome} alt="welcome " />
    </div>
  </div>
);

export default Header;

import React from "react";
import { images } from "../../constants";

const SubHeading = ({ title }) => (
  <div styles={{ marginBottom: "1rem" }}>
    <p className="p__cormorant">{title}</p>
    <img src={images.spoon} alt="spoon" className="spoonImage" />
  </div>
);

export default SubHeading;

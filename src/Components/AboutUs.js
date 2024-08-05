import React from "react";
import Function from "./Function";
import Userclass from "./Userclass";

const AboutUs = () => (
  <div>
    <h1>About Us</h1>
    <div className="aboutUs">
      <Userclass
        name={"Animish Chopade(Class based component)"}
        location={"Pune, Maharashtra"}
        contact={"Animish@92451016"}
      />
    </div>
  </div>
);

export default AboutUs;

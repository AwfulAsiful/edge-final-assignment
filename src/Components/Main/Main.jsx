import React from "react";
import Navbar from "../Navbar/Navbar";
import QuoteSlider from "../QuoteSlider/QuoteSlider";

function Main() {
  return (
    <div className="pt-[2.25rem] px-[3rem]">
      <Navbar />
      <div className="slider-container">
        <QuoteSlider/>
      </div>
    </div>
  );
}

export default Main;

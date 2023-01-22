import React, { useState } from "react";
import { Data } from "./Data";
import "./css/style.css";

const Testimonials = () => {
  const [current, setCurrent] = useState(0);
  const length = Data.length;

  const prevData = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  const nextData = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  return (
    <div>
      <div className="testimonials" id="Testimonials">
        <div className="leftSide">
          <p className="title">Testimonials</p>
          <h2 className="nextHead">What people say</h2>
          <p className="text">
            RKites occupy some of the most important positions in industry and
            academics.
          </p>
        </div>
        <div className="border"></div>
        <div className="rightSide">
          {Data.map((slide, index) => {
            return (
              <div
                className={index === current ? "slide active" : "slide"}
                key={index}
              >
                {index === current && <h4 className="heading">{slide.text}</h4>}
              </div>
            );
          })}
          <div className="rightLower">
            <div className="person">
              {Data.map((slide, index) => {
                return (
                  <div
                    className={index === current ? "slide active" : "slide"}
                    key={index}
                  >
                    {index === current && (
                      <h4 className="name">{slide.name}</h4>
                    )}
                  </div>
                );
              })}
              {Data.map((slide, index) => {
                return (
                  <div
                    className={index === current ? "slide active" : "slide"}
                    key={index}
                  >
                    {index === current && (
                      <p className="company">{slide.position}</p>
                    )}
                  </div>
                );
              })}
            </div>
            <div className="buttons">
              <img
                className="back"
                src={require("./Images/Back button.png")}
                alt="back"
                onClick={prevData}
              />
              <img
                className="next"
                src={require("./Images/Next Button.png")}
                alt="next"
                onClick={nextData}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;

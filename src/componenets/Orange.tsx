import React from "react";

export const Orange = () => {
  return (
    <div className="orange-screen">
      <div className="bg-back"></div>
      <div className="bg-front"></div>
      <div className="slide-card-linear mb-3">
        <i className="bx bx-question-mark"></i>
        <div className="inner">
          <h1>Hello</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe
            facilis suscipit corrupti quidem aliquid veniam repudiandae libero
            distinctio fuga voluptatum?
          </p>
        </div>
      </div>
      <div className="slide-card-circle">
        <span>
          <i className="bx bx-right-arrow-alt"></i>
        </span>
        <h1>Hello</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe
          facilis suscipit corrupti quidem aliquid veniam repudiandae libero
          distinctio fuga voluptatum?
        </p>
      </div>
    </div>
  );
};

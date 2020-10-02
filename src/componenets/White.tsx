import { url } from "inspector";
import React from "react";

export const White = () => {
  return (
    <div className="white-screen">
      <div className="bg-back"></div>
      <div className="bg-front"></div>
      <div className="container">
        <div className="left">
          <h1>Which would you choose?</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam
            tempore illum cumque consectetur placeat id itaque consequuntur
            molestias. Deserunt, facere.
          </p>
        </div>
        <div className="right">
          <ul>
            <li>
              <img src={require("../assets/images/react.svg")} alt="fgdf" />
              <span>
                <strong>React</strong>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
              </span>
            </li>
            <li>
              <img src={require("../assets/images/vue.svg")} alt="fgdf" />
              <span>
                <strong>Vue</strong>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
              </span>
            </li>
            <li>
              <img src={require("../assets/images/angular.svg")} />
              <span>
                <strong>Angular</strong>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

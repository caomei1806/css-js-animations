import React from "react";
import { Link } from "react-router-dom";

export const Navigation: React.FC = () => {
  return (
    <div className="navigation">
      <small>ANIMATION MAP </small>
      <br />
      <Link to="/" className="link yellow">
        Home
      </Link>
      <div className="css-animations" style={{ marginTop: 20 }}>
        <small>CSS Animations</small>
        <br />
        <Link to="/yellow" className="link yellow">
          Yellow
        </Link>
        <br />
        <Link to="/white" className="link">
          White
        </Link>
        <br />
        <Link to="/orange" className="link orange">
          Orange
        </Link>
      </div>
    </div>
  );
};

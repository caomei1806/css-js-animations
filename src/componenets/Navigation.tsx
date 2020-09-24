import React from "react";
import { Link } from "react-router-dom";

export const Navigation: React.FC = () => {
  return (
    <div className="navigation">
      <small>ANIMATION MAP </small>
      <br />
      <Link to="/yellow" className="link yellow">
        Yellow
      </Link>
      <br />
      <Link to="/white" className="link">
        White
      </Link>
    </div>
  );
};

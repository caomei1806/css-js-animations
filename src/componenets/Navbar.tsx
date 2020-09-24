import React from "react";
import { useLocation } from "react-router";

export const Navbar: React.FC = () => {
  const location = useLocation();

  const addRouteColorClass = (): string => {
    switch (location.pathname) {
      case "/yellow":
        return " on-yellow";
      case "/white":
        return " on-white";
      default:
        return "";
    }
  };

  return (
    <nav className={"navbar navbar-dark bg-dark" + addRouteColorClass()}>
      <span className="navbar-brand mb-0 h5" style={{ fontSize: 15 }}>
        CSS & JavaScript{" "}
        <span
          className="font-weight-bold"
          style={{ letterSpacing: 1, fontSize: 20 }}
        >
          ANIMATIONS
        </span>
      </span>
    </nav>
  );
};

import React from "react";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <div className="navigation">
      <NavLink className="link" to="/">
        Accueil
      </NavLink>
    </div>
  );
};

export default Navigation;

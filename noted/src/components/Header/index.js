import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <NavLink to="/">
        <h1>Noted</h1>
      </NavLink>
    </header>
  );
};

export default Header;

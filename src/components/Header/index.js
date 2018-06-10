import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className="header">
      <NavLink to="/" className="header__link">
        <h1 className="header__title">Noted</h1>
      </NavLink>
    </header>
  );
};

export default Header;

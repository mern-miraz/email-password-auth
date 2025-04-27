import React from "react";
import { NavLink } from "react-router";

const Header = () => {
  return (
    <nav>
      <ul className="flex items-center space-x-4 p-5">
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/login">Login</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Header;

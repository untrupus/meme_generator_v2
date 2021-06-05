import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <Link className="headerTitle" to="/">
        Memes Generator Version 2.0
      </Link>
    </div>
  );
};

export default Header;

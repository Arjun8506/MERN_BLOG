import React, {useState} from "react";
import { NavLink, Link } from "react-router-dom";
import { IoMenu } from "react-icons/io5";
import { FaSearch } from "react-icons/fa";
import { IoMdMoon } from "react-icons/io";
import Logo from "./lOGO.JSX";

const Header = () => {
  
  return (
    <div className="header">
        <Logo />
      <div className="searchInput">
        <input type="text" name="search" placeholder="Search..." />
        <FaSearch id="searchIcon"/>
      </div>
      <div className="restPart">
        <div className="menu">
          <ul>
            <li>
              <NavLink to={"/"}  className="link">Home</NavLink>
            </li>
            <li>
              <Link to={"/about"}  className="link">About</Link>
            </li>
            <li>
              <Link to={"/projects"}  className="link">Projects</Link>
            </li>
          </ul>
        </div>
        <div className="signin">
          <button><IoMdMoon /></button>
          <Link to={"sign-in"} className="link" id="signin">Sign In</Link>
        </div>
        <div className="phonemenu">
          <IoMenu />
        </div>
      </div>
    </div>
  );
};

export default Header;

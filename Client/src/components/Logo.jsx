import React from 'react'
import { NavLink } from "react-router-dom";

const Logo = () => {
  return (
    <NavLink to={"/"} id="logo">
        <span>Arjun's</span>Blog
      </NavLink>
  )
}

export default Logo
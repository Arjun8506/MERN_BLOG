import React from "react";
import Logo from "./lOGO.JSX";
import { Link } from "react-router-dom";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaRegCopyright } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer">
      <div className="upperpart">
        <Logo />
        <div className="socialmediaLinks">
          <h3>Follow Me:</h3>
          <Link to={"/"} className="sociallinks">
            <FaInstagram />
          </Link>
          <Link to={"/"} className="sociallinks">
            <FaLinkedin />
          </Link>
          <Link to={"/"} className="sociallinks">
            <FaGithub />
          </Link>
        </div>

        <div className="des">
          <h3>Short Description:</h3>
          <p>
            "Explore a seamless web experience on My blog powered by React.js,
            MongoDB, Express.js, and Node.js. Discover captivating content with
            dynamic interactivity, showcasing the synergy of cutting-edge
            technologies for a modern browsing journey."
          </p>
        </div>
      </div>
      <div className="lowerpart">
        <FaRegCopyright /> All Right's Reserved || <span>Arjun's blog Site</span>
      </div>
    </div>
  );
};

export default Footer;

import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      <p>Copyright</p>
      <Link to="/about">About Us</Link>
    </div>
  );
};

export default Footer;

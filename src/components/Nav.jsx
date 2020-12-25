import React from "react";
import { Link } from "react-router-dom";

export default function Nav() {
  const navStyle = {
    color: "white",
  };
  return (
    <div>
      <nav>
        <div>
          <h2>Company Logo</h2>
        </div>
        <div>
          <ul>
            <li>
              <Link to="/" style={navStyle}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" style={navStyle}>
                About
              </Link>
            </li>
            <li>
              <Link to="/contact" style={navStyle}>
                Contact Us
              </Link>
            </li>
            <li>
              <Link to="/shop" style={navStyle}>
                Shop
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

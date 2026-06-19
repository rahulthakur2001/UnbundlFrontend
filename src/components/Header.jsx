import React from "react";
import "./Header.css";
import logo from "../../images/logo.png";

const Header = () => {
  return (
    <div>
      <div className="ws-nav">
        <div>
          <div className="ws-logo">
            <img src={logo} alt="Logo" />
          </div>
        </div>
        <div className="ws-call-btn">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
            <path d="M6.6 10.8c1.5 3 4 5.4 7 7l2.3-2.3c.3-.3.8-.4 1.1-.2 1.3.6 2.7.9 4.1 1 .6 0 1 .5 1 1V21c0 .6-.4 1-1 1C10.6 22 2 13.4 2 3c0-.6.4-1 1-1h3.7c.6 0 1 .4 1 1 .1 1.4.4 2.8 1 4.1.2.4.1.8-.2 1.1L6.6 10.8z" />
          </svg>
        </div>
      </div>
      <div className="ws-announce">
        Starting at <span className="strike">Rs 69,999</span>
        <span className="strong">Rs 47,999. Hurry! Offer ends soon.</span>
      </div>
    </div>
  );
};

export default Header;

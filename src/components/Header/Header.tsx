import React from "react";
import "./header.scss";

const Header = () => {
  return (
    <header id="header">
      <div className="logo">
        <img />
      </div>
      <div className="buttons">
        <button>
          <a href="#">HOME</a>
        </button>
        <button>
          <a href="#portfolio">PORTFOLIO</a>
        </button>
        <button>
          <a href="#about">ABOUT</a>
        </button>
        <button>
          <a href="#contact">CONTACT</a>
        </button>
      </div>
    </header>
  );
};
export default Header;

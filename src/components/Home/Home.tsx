import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowCircleDown } from "@fortawesome/free-solid-svg-icons";

import React from "react";
import "./home.scss";

const Home = () => {
  return (
    <div className="home">
      <div className="container">
        <text className="title">
          We Build <b>Brand</b>
        </text>
        <text className="text">
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
          nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
          volutpat.{" "}
        </text>
        <button className="button">
          <b>LEARN MORE</b>
        </button>
        <a className="arrow" href="#portfolio">
          <FontAwesomeIcon icon={faArrowCircleDown} />
        </a>
      </div>
    </div>
  );
};
export default Home;

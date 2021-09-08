import React from "react";
import "./about.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee, faBook } from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";

interface PeopleProps {
  img: string;
  text: string;
  title: string;
  subtitle: string;
}
const PeopleCard = (props: PeopleProps) => {
  return (
    <div className="people">
      <div className="img">
        <img src={require("../../img/" + props.img)} />
        <div className="icons">
          <a href="">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="">
            <i className="fab fa-google-plus-g"></i>
          </a>
          <a href="">
            <i className="fab fa-dribbble"></i>
          </a>
        </div>
      </div>

      <div className="textItem">
        <div className="name">{props.title}</div>
        <div className="position">{props.subtitle}</div>
        <div className="text">{props.text}</div>
      </div>
    </div>
  );
};
export default PeopleCard;

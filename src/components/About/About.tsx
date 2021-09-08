import React from "react";

import "./about.scss";
import PeopleCard from "./PeopleCard";

const About = () => {
  return (
    <div id="about" className="about">
      <div className="title">About Us</div>
      <div className="subtitle">
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit.{" "}
      </div>
      <div className="peoples">
        <PeopleCard
          img="ava-1.png"
          text="Ut wisi enim ad minim veniam, quis nostrud exerci tation"
          title="Melannie Doe"
          subtitle="Project Manager"
        />
        <PeopleCard
          img="ava-3.png"
          text="Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat."
          title="Jhonnie Doe"
          subtitle="Graphic Designer"
        />
        <PeopleCard
          img="ava-2.png"
          text="Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo "
          title="Daniel Doe"
          subtitle="Web Designer"
        />
        {/* <PeopleCard />
        <PeopleCard /> */}
      </div>
    </div>
  );
};
export default About;

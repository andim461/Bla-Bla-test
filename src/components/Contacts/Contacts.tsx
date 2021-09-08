import React, { useRef } from "react";
import {
  YMaps,
  Map,
  Placemark,
  YMapsProps,
  RouteButton,
} from "react-yandex-maps";
import "./contact.scss";

const Contacts = () => {
  const mapData = {
    center: [55.798682, 37.695816],
    zoom: 15,
  };

  return (
    <div className="contact" id="contact">
      <div className="title">Contact Us</div>{" "}
      <div className="subtitle">
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
      </div>
      <div className="field">
        <div className="inputs">
          <div className="firstLine">
            <input
              type="text"
              className="input"
              placeholder="Your Name"
            ></input>
            <input
              type="text"
              className="input"
              placeholder="Your Email"
            ></input>
          </div>
          <textarea className="textarea" placeholder="Your message"></textarea>
          <button className="submit">SUBMIT</button>
        </div>

        <YMaps>
          <Map className="map" defaultState={mapData}>
            <Placemark geometry={[55.798682, 37.695816]} />
            <RouteButton />
          </Map>
        </YMaps>
      </div>
    </div>
  );
};
export default Contacts;

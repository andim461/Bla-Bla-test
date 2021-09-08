import React, { useState } from "react";
import "./portfolio.scss";
import PortfolioElement from "../../interfaces/PortfolioElement";
import PortfolioTypes from "../../interfaces/PortfolioTypes";

const Portfolio = () => {
  const [selector, setSelector] = useState<PortfolioTypes>(PortfolioTypes.ALL);
  const portfolioElems: Array<PortfolioElement> = [
    {
      key: PortfolioTypes.WEB,
      img: <img className="pic" src={require("../../img/Col 7.png")} />,
    },
    {
      key: PortfolioTypes.GRAPHIC,
      img: <img className="pic" src={require("../../img/Col 2.png")} />,
    },
    {
      key: PortfolioTypes.FLAT,
      img: <img className="pic" src={require("../../img/Col 3.png")} />,
    },
    {
      key: PortfolioTypes.WEB,
      img: <img className="pic" src={require("../../img/Col 4.png")} />,
    },
    {
      key: PortfolioTypes.GRAPHIC,
      img: <img className="pic" src={require("../../img/Col 5.png")} />,
    },
    {
      key: PortfolioTypes.GRAPHIC,
      img: <img className="pic" src={require("../../img/Col 6.png")} />,
    },
    {
      key: PortfolioTypes.WEB,
      img: <img className="pic" src={require("../../img/Col 7.png")} />,
    },
    {
      key: PortfolioTypes.FLAT,
      img: <img className="pic" src={require("../../img/Col 8.png")} />,
    },
  ];

  return (
    <div id="portfolio" className="portfolio">
      <text className="title">Portfolio</text>
      <text className="text">
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
      </text>
      <div className="buttons">
        <button
          className={
            "button but" + (selector === PortfolioTypes.ALL ? " active" : "")
          }
          onClick={() => setSelector(PortfolioTypes.ALL)}
        >
          <b>ALL</b>
        </button>
        <button
          className={
            "button but" + (selector === PortfolioTypes.WEB ? " active" : "")
          }
          onClick={() => setSelector(PortfolioTypes.WEB)}
        >
          <b>WEB DESIGN</b>
        </button>
        <button
          className={
            "button but" +
            (selector === PortfolioTypes.GRAPHIC ? " active" : "")
          }
          onClick={() => setSelector(PortfolioTypes.GRAPHIC)}
        >
          <b>GRAPHIC DESIGN</b>
        </button>
        <button
          className={
            "button but" + (selector === PortfolioTypes.FLAT ? " active" : "")
          }
          onClick={() => setSelector(PortfolioTypes.FLAT)}
        >
          <b>FLAT DESIGN</b>
        </button>
      </div>
      <div className="elems">
        {(selector === PortfolioTypes.ALL
          ? portfolioElems
          : portfolioElems.filter((val) => val.key === selector)
        ).map((val) => val.img)}
      </div>
    </div>
  );
};
export default Portfolio;

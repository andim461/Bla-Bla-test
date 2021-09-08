import React from "react";
import PortfolioTypes from "./PortfolioTypes";
interface PortfolioElement {
  key: PortfolioTypes;
  img: React.DetailedHTMLProps<
    React.ImgHTMLAttributes<HTMLImageElement>,
    HTMLImageElement
  >;
}
export default PortfolioElement;

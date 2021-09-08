import React from "react";
import Header from "./Header/Header";
import "./app.scss";
import Home from "./Home/Home";
import Portfolio from "./Portfolio/Portfolio";
import About from "./About/About";
import Contacts from "./Contacts/Contacts";
import Footer from "./Footer/Footer";

const App = () => {
  return (
    <div>
      <Header />
      <Home />
      <Portfolio />
      <About />
      <Contacts />
      <Footer />
    </div>
  );
};

export default App;

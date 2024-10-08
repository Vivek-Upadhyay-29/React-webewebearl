import { useState } from "react";
import Accordian from "./component/Accordian";
import "bootstrap/dist/css/bootstrap.min.css";
import NavbarCom from "./component/NavbarCom";
import MainCarousa from "./component/MainCarousa";
import Footer from "./component/Footer";
import MainPopular from "./component/MainPopular";
import Standout from "./component/Standout";
import Testimonial from "./component/Testimonial";
import Service from "./component/Service";

function App() {
  return (
    <>
      <NavbarCom />
      <MainCarousa />
      <MainPopular />
      <Standout />
      <Testimonial />
      <Service />
      <Accordian />
      <Footer />
    </>
  );
}

export default App;

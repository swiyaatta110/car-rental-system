import React from "react";
import { Carousell } from "../components/Carousell";
import { Cart } from "./Cart";
import WhyChooseUs from "../components/WhyChooseUs";
import HowToBook from "../components/HowToBook";
import { Footer } from "../components/Footer copy";
import Navbar from "../components/Navbar";

const Bike = () => {
  return (
    <>
      <Navbar />
      <Carousell />
      <Cart />
      <WhyChooseUs />
      <HowToBook />
      <Footer/>
    </>
  );
};

export default Bike;

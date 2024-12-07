import React from "react";
import { Route, Routes } from "react-router";
import Cars from "../pages/Cars";
import SpecificCar from "../pages/SpecificCar";
import Signup from "../pages/Signup";
import Login from "../pages/Login";
import RentalHistory from "../pages/RentalHistory";
import Home from "../pages/Home";
import Payment from "../pages/Payment";
import PaymentHistory from "../pages/PaymentHistory";
import Bike from "../pages/Bike";
import BikeDetailCard from "../components/BikeDetailCard";
import ReviewSection from "../components/Rating";

const Routing = () => {
  return (
    <React.Fragment>
      <Routes>
        <Route index element={<Signup />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/cars" element={<Cars />} />
        <Route path="/car/:id" element={<SpecificCar />} />
        <Route path="/rental/history" element={<RentalHistory />} />
        <Route path="/payment/history" element={<PaymentHistory />} />
        <Route path="/payment/:id" element={<Payment />} />
        <Route path="/bike/home" element={<Bike />} />

        <Route
          path="/bike-details"
          element={
            <>
              <BikeDetailCard />
              <ReviewSection />
            </>
          }
        />
      </Routes>
    </React.Fragment>
  );
};

export default Routing;

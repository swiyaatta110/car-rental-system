import React from "react";
import { Route, Routes } from "react-router";
import { Dashboard } from "../pages/Dashboard";
import AdminLogin from "../pages/AdminLogin";
import AdminSignup from "../pages/AdminSignup";
import Cars from "../pages/Cars";
import Payments from "../pages/Payments";


const Routing = () => {
  return (
    <React.Fragment>
      <Routes>
      <Route index element={<AdminSignup />} />
      <Route path="/signup" element={<AdminSignup />} />
        <Route path="/login" element={<AdminLogin />} />
        <Route path="/admin-dashboard" element={<Dashboard />} />
        <Route path="/cars" element={<Cars />} />
        <Route path="/payments" element={<Payments />} />
      </Routes>
    </React.Fragment>
  );
};

export default Routing;

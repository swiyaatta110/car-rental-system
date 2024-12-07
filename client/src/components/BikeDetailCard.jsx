import React from "react";
import "./proscons.css";
import { useLocation } from "react-router";
import Navbar from "./Navbar";

const BikeDetailCard = () => {
  const location = useLocation();

  if (!location.state) {
    return <div>Invalid bike data. Please go back and select a bike.</div>;
  }

  const {
    img,
    name,
    isAvailable,
    dailyPrice,
    weeklyPrice,
    features,
    rentalPlan,
    ProsandCons,
  } = location.state || {};

  const finalProsAndCons = ProsandCons || { Pros: [], Cons: [] };

  console.log("ProsandCons Data: ", ProsandCons);
  return (
    <React.Fragment>
      <Navbar />
      <div className="container mx-auto px-4 mt-20">
        <div className="flex flex-col md:flex-row gap-8">
          <div className="md:w-1/2 text-center">
            <div className="border border-gray-300 p-4">
              <img
                src={img}
                alt={`Image of ${name}`}
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="mt-3 space-x-2">
              <button className="px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded">
                Colours
              </button>
              <button className="px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded">
                Images
              </button>
              <button className="px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded">
                Videos
              </button>
            </div>
          </div>

          <div className="md:w-1/2">
            <h2 className="text-2xl font-bold">
              Rent the {name} - Adventure Awaits!
            </h2>
            <p
              className={`${
                isAvailable ? "text-green-600" : "text-red-600"
              } text-sm`}
            >
              {isAvailable ? "Available Now" : "Currently Unavailable"}
            </p>

            <div className="mt-6">
              <h4 className="text-xl font-semibold">
                {dailyPrice} : Affordable and Reliable
              </h4>
              <p className="mt-2">Weekly Price: {weeklyPrice}</p>
              <p className="mt-2">{features}</p>
              <p className="mt-2">Rental Plan: {rentalPlan}</p>
              <button className="mt-4 px-6 py-2 bg-red-600 text-white rounded hover:bg-red-700">
                Get November Offers
              </button>
            </div>

            <div className="mt-8">
              <h5 className="text-lg font-semibold">Contact us</h5>
              <p className="mt-2">
                Reach out to book the {name} for your next ride. Flexible rental
                plans available!
              </p>
              <button className="mt-4 px-6 py-2 border border-blue-600 text-blue-600 rounded hover:bg-blue-600 hover:text-white">
                Rent This Bike
              </button>
            </div>
          </div>
        </div>

        <div className="mt-12">
          <h3 className="text-2xl font-bold">{name} Price</h3>
          <div className="mt-4 overflow-x-auto">
            <table className="w-full border-collapse border border-gray-300">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border border-gray-300 p-3">Rental Plan</th>
                  <th className="border border-gray-300 p-3">Daily Plan</th>
                  <th className="border border-gray-300 p-3">Weekly Plan</th>
                  <th className="border border-gray-300 p-3">Features</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 p-3">{name}</td>
                  <td className="border border-gray-300 p-3">{dailyPrice}</td>
                  <td className="border border-gray-300 p-3">{weeklyPrice}</td>
                  <td className="border border-gray-300 p-3">{features}</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-3">{name}</td>
                  <td className="border border-gray-300 p-3">{dailyPrice}</td>
                  <td className="border border-gray-300 p-3">{weeklyPrice}</td>
                  <td className="border border-gray-300 p-3">{features}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Pros and Cons Section */}
        <div className="pros-cons-container">
          <h2 className="text-2xl font-bold">{name} Pros and Cons</h2>
          <div className="pros-cons">
            {/* Pros Section */}
            <div className="pros">
              <h3>
                <i className="fas fa-thumbs-up"></i> Things We Like
              </h3>
              <ul>
                {ProsandCons.Pros.length > 0 ? (
                  ProsandCons.Pros.map((pro, index) => (
                    <li key={index}>{pro}</li>
                  ))
                ) : (
                  <li>No pros available</li>
                )}
              </ul>
            </div>

            {/* Cons Section */}
            <div className="cons">
              <h3>
                <i className="fas fa-thumbs-down"></i> Things We Don't Like
              </h3>
              <ul>
                {ProsandCons.Cons.length > 0 ? (
                  ProsandCons.Cons.map((con, index) => (
                    <li key={index}>{con}</li>
                  ))
                ) : (
                  <li>No cons available</li>
                )}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default BikeDetailCard;

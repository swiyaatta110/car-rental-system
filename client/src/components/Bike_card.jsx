import React from "react";
import { useNavigate } from "react-router"; 
import "./cart.css";

const Bike_card = ({ img, name, isAvailable, dailyPrice, weeklyPrice, features, rentalPlan,ProsandCons }) => {
  const navigate = useNavigate();

  const handleSeeMore = () => {
    navigate("/bike-details", {
      state: {
        img,
        name,
        isAvailable,
        dailyPrice,
        weeklyPrice,
        features,
        rentalPlan,
        ProsandCons,
      },
    });
  };

  const availabilityText = isAvailable ? "Available Now" : "Currently Unavailable";
  const availabilityColor = isAvailable ? "text-green-500" : "text-red-500";

  return (
    <div className="w-full">
      <div className="card1 w-72 mx-auto rounded-lg shadow-lg overflow-hidden">
        <img className="w-full h-[250px] object-cover" src={img} alt={name} />
        <div className="p-4">
          <h2 className="text-xl font-semibold mb-2">{name}</h2>
          <p className={`text-lg ${availabilityColor}`}>
            {availabilityText}
          </p>
          <button 
            onClick={handleSeeMore}
            className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors"
          >
            View Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default Bike_card;

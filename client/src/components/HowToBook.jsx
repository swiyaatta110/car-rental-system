import React from 'react';
import './HowToBook.css';
import img1 from '../images/imgc6.jpg';

const HowToBook = () => {
  return (
    <div className="how-to-book-page mt-20">
      {/* Left Container */}
      <div className="how-to-book-container">
        <h2 className="text-3xl font-bold mb-4">How to book your ride?</h2>
        <p className="text-lg text-gray-600 mb-8">Book your dream ride in just four simple steps</p>
        <div className="space-y-8">
          <div className="flex items-start gap-4">
            <div className="flex items-center justify-center w-10 h-10 rounded-full bg-blue-500 text-white font-bold">1</div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Find your Ride</h3>
              <p className="text-gray-600">
                Enter the basic details like city, pick-up and drop date and time
                to choose from a list of available two-wheelers at your desired
                go-hub.
              </p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <div className="flex items-center justify-center w-10 h-10 rounded-full bg-blue-500 text-white font-bold">2</div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Book your Ride</h3>
              <p className="text-gray-600">
                Select your package and choose from the available payment options.
              </p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <div className="flex items-center justify-center w-10 h-10 rounded-full bg-blue-500 text-white font-bold">3</div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Get Ready to Ride</h3>
              <p className="text-gray-600">
                You will receive all the ride details via message and email. Reach
                the pickup point in time and pay the security deposit (if
                applicable). Enjoy every moment of your ride.
              </p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <div className="flex items-center justify-center w-10 h-10 rounded-full bg-blue-500 text-white font-bold">4</div>
            <div>
              <h3 className="text-xl font-semibold mb-2">End your Ride</h3>
              <p className="text-gray-600">
                Once you have had the time of your life, drop the vehicle at the
                same pickup point. Security deposit is refunded after checking for
                damages and challans (if any).
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Right Container */}
      <div className="list-your-vehicle-wrapper">
        <img src={img1} alt="Bike" className="background-image" />
        <div className="list-your-vehicle-container">
          <div className="notification">
            <span className="notification-icon">🔔</span>
            List your vehicle
          </div>
          <h2 className="text-2xl font-bold mb-4">
            Want to list your unused two-wheeler and <br />
            <span className="text-blue-500">earn extra income</span>
          </h2>
          <p className="text-gray-600 mb-6">
            List your motorcycles and scooters with India's fastest-growing
            mobility platform - Just connect to turn them into earning members of
            your family.
          </p>
          <button className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition duration-300">
            Know More
          </button>
        </div>
      </div>
    </div>
  );
};

export default HowToBook;

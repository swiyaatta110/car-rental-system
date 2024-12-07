import React from "react";

const metrics = [
  {
    id: 1,
    stat: "5K+",
    emphasis: "Vehicles Rented",
    rest: "across various cities and towns.",
  },
  {
    id: 2,
    stat: "150+",
    emphasis: "Locations Available",
    rest: "for car and bike rentals.",
  },
  {
    id: 3,
    stat: "99%",
    emphasis: "Customer Satisfaction",
    rest: "with our seamless rental process.",
  },
  {
    id: 4,
    stat: "1M+",
    emphasis: "Happy Customers",
    rest: "who trusted us for their trips.",
  },
];

export default function Stat() {
  return (
    <div className="relative bg-gray-900">
      <div className="h-80 w-full absolute bottom-0 xl:inset-0 xl:h-full">
        <div className="h-full w-full xl:grid xl:grid-cols-2">
          <div className="h-full xl:relative xl:col-start-2">
            <img
              className="h-full w-full object-cover opacity-25 xl:absolute xl:inset-0"
              src="https://images.unsplash.com/photo-1516387938699-a93567ec168e?ixlib=rb-1.2.1&auto=format&fit=crop&w=2830&q=80"
              alt="Vehicles parked and ready for rental"
            />
            <div
              aria-hidden="true"
              className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-gray-900 xl:inset-y-0 xl:left-0 xl:h-full xl:w-32 xl:bg-gradient-to-r"
            />
          </div>
        </div>
      </div>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:max-w-7xl lg:px-8 xl:grid xl:grid-cols-2 xl:grid-flow-col-dense xl:gap-x-8">
        <div className="relative pt-12 pb-64 sm:pt-24 sm:pb-64 xl:col-start-1 xl:pb-24">
          <h2 className="text-sm font-semibold text-indigo-300 tracking-wide uppercase">
            Key Metrics
          </h2>
          <p className="mt-3 text-3xl font-extrabold text-white">
            Trusted by Thousands for Reliable Rentals
          </p>
          <p className="mt-5 text-lg text-gray-300">
            Whether you need a car for a weekend trip or a bike for a city
            commute, we have you covered. Explore hassle-free rentals with
            transparent pricing and excellent customer support.
          </p>
          <div className="mt-12 grid grid-cols-1 gap-y-12 gap-x-6 sm:grid-cols-2">
            {metrics.map((item) => (
              <p key={item.id}>
                <span className="block text-2xl font-bold text-white">
                  {item.stat}
                </span>
                <span className="mt-1 block text-base text-gray-300">
                  <span className="font-medium text-white">
                    {item.emphasis}
                  </span>{" "}
                  {item.rest}
                </span>
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

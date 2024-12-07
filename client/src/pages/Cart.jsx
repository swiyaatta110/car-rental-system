import React, { useState } from "react";
import img1 from '../images/imgc9.jpg';
import img2 from '../images/imgc4.jpg';
import img3 from '../images/img11.jpg';
import img4 from '../images/imgn2.jpg';
import img5 from '../images/img13.jpg';
import img6 from '../images/imgn5(1).jpg';
import img7 from '../images/imgn3.jpg';
import img8 from '../images/imgn6.jpg';
import Bike_card from '../components/Bike_card';

export function Cart() {
  const allBikes = [
    {
      img: img1,
      name: "Roadster",
      isAvailable: false,
      dailyPrice: "₹5,500/day",
      weeklyPrice: "₹10,000/week",
      features: "Disc Brakes, Alloy Wheels",
      rentalPlan: "Roadster NS200 Single Channel ABS",
      ProsandCons: {
        Pros: ["Powerful engine performance.", "Great fuel efficiency.", "Stylish and modern design."],
        Cons: ["Slightly expensive maintenance.", "Limited storage space.", "Not ideal for off-road conditions."],
      },
    },
    {
      img: img3,
      name: "KTM Duke",
      isAvailable: false,
      dailyPrice: "₹5,500/day",
      weeklyPrice: "₹10,000/week",
      features: "Disc Brakes, Alloy Wheels",
      rentalPlan: "Roadster NS200 Single Channel ABS",
      ProsandCons: {
        Pros: ["Powerful engine performance.", "Great fuel efficiency.", "Stylish and modern design."],
        Cons: ["Slightly expensive maintenance.", "Limited storage space.", "Not ideal for off-road conditions."],
      }
    },
    {
      img: img2,
      name: "Royal Enfield Thunderbird 350",
      isAvailable: true,
      dailyPrice: "₹4,500/day",
      weeklyPrice: "₹7,000/week",
      features: "Disc Brakes, Alloy Wheels",
      rentalPlan: "Royal Enfield Thunderbird 350 Single Channel ABS",
      ProsandCons: {
        Pros: ["Powerful engine performance.", "Great fuel efficiency.", "Stylish and modern design."],
        Cons: ["Slightly expensive maintenance.", "Limited storage space.", "Not ideal for off-road conditions."],

      }
    },
    {
      img: img4,
      name: "ROYAL Enfield classic 350",
      isAvailable: false,
      dailyPrice: "₹1,500/day",
      weeklyPrice: "₹6,000/week",
      features: "Disc Brakes, Alloy Wheels",
      rentalPlan: "ROYAL Enfield classic 350 Single Channel ABS",
      ProsandCons: {
        Pros: ["Powerful engine performance.", "Great fuel efficiency.", "Stylish and modern design."],
        Cons: ["Slightly expensive maintenance.", "Limited storage space.", "Not ideal for off-road conditions."],
      }
    },
    {
      img: img5,
      name: "Royal Enfield Himalayan",
      isAvailable: true,
      dailyPrice: "₹2,500/day",
      weeklyPrice: "₹6,500/week",
      features: "Disc Brakes, Alloy Wheels",
      rentalPlan: "Royal Enfield Himalayan Single Channel ABS",
      ProsandCons: {
        Pros: ["Powerful engine performance.", "Great fuel efficiency.", "Stylish and modern design."],
        Cons: ["Slightly expensive maintenance.", "Limited storage space.", "Not ideal for off-road conditions."],
      }
    },
    {
      img: img6,
      name: "Royal Enfield METEOR 350",
      isAvailable: false,
      dailyPrice: "₹1,500/day",
      weeklyPrice: "₹6,500/week",
      features: "Disc Brakes, Alloy Wheels",
      rentalPlan: "Royal Enfield METEOR 350 Single Channel ABS",
      ProsandCons: {
        Pros: ["Powerful engine performance.", "Great fuel efficiency.", "Stylish and modern design."],
        Cons: ["Slightly expensive maintenance.", "Limited storage space.", "Not ideal for off-road conditions."],
      }
    },
    {
      img: img7,
      name: "KTM 200 Duke",
      isAvailable: false,
      dailyPrice: "₹900/day",
      weeklyPrice: "₹5,500/week",
      features: "Disc Brakes, Alloy Wheels",
      rentalPlan: " KTM 200 Duke Single Channel ABS",
      ProsandCons: {
        Pros: ["Powerful engine performance.", "Great fuel efficiency.", "Stylish and modern design."],
        Cons: ["Slightly expensive maintenance.", "Limited storage space.", "Not ideal for off-road conditions."],
      }
    },
    {
      img: img8,
      name: "Suzuki Hayabusa",
      isAvailable: false,
      dailyPrice: "₹900/day",
      weeklyPrice: "₹5,500/week",
      features: "Disc Brakes, Alloy Wheels",
      rentalPlan: " KTM 200 Duke Single Channel ABS",
      ProsandCons: {
        Pros: ["Powerful engine performance.", "Great fuel efficiency.", "Stylish and modern design."],
        Cons: ["Slightly expensive maintenance.", "Limited storage space.", "Not ideal for off-road conditions."],
      }
    },
    { img: img1, name: "KTM 1290 Super Duke R", isAvailable: false },
    { img: img2, name: "Bike 10", isAvailable: false },
  ];

  const [visibleBikes, setVisibleBikes] = useState(8);

  const loadMore = () => {
    setVisibleBikes((prev) => prev + 8);
  };

  return (
    <div>
      <div className="container mx-auto mt-20 px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {allBikes.slice(0, visibleBikes).map((bike, index) => (
            <div key={index} className="mt-4">
              <Bike_card
                img={bike.img}
                name={bike.name}
                isAvailable={bike.isAvailable}
                dailyPrice={bike.dailyPrice}
                weeklyPrice={bike.weeklyPrice}
                features={bike.features}
                rentalPlan={bike.rentalPlan}
                ProsandCons={bike.ProsandCons || { Pros: [], Cons: [] }}
              />
            </div>
          ))}
        </div>
        {visibleBikes < allBikes.length && (
          <div className="flex justify-end mt-4 mr-64">
            <button 
              onClick={loadMore} 
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded flex items-center"
            >
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
              See More
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

import React from 'react';
import './WhyChooseUs.css';
import logo1 from '../images/logo1.png';
import logo2 from '../images/logo2(1).png';
import logo3 from '../images/logo3.png';
import logo4 from '../images/logo4.png';
import logo5 from '../images/logo5.png';
import logo6 from '../images/logo6.png';
import logo7 from '../images/logo7(2).png'; 
import logo8 from '../images/logo8(1).png'; 

const WhyChooseUs = () => {
  const features = [
    {
      icon: logo1, 
      title: "Different Flexible Packages",
      description:
        "Grab daily, weekly, fortnight and monthly packages at discounted rates.",
    },
    {
      icon: logo2, 
      title: "Wide Range",
      description:
        "Looking for a particular brand or location? We have probably got it.",
    },
    {
      icon: logo3, 
      title: "Highly Maintained Fleet",
      description: "Get high-quality and serviced vehicles.",
    },
    {
      icon: logo4, 
      title: "24*7 At Service",
      description: "Day or night, rent a bike.",
    },
    {
      icon: logo5, 
      title: "Book Now, Pay Later",
      description: "Flexibility to decide when and how to pay.",
    },
    {
      icon: logo6, 
      title: "Instant Refund",
      description:
        "Facing an issue while booking/pick up? We initiate instant refunds.",
    },
    {
      icon: logo7, 
      title: "Quick Money Back",
      description:
        "We prioritize your convenience with instant refunds for cancellations or issues.",
    },
    {
      icon: logo8, 
      title: "Hassle-Free Cancellations",
      description:
        "Changed your mind? Cancel anytime with ease and get your money back quickly.",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-16">
      <h2 className="text-4xl font-bold text-center mb-12">Why choose Gobikes?</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {features.map((feature, index) => (
          <div className="bg-white rounded-lg shadow-lg p-6 transition duration-300 hover:shadow-xl" key={index}>
            <img
              src={feature.icon}
              alt={`${feature.title} Icon`}
              className="w-16 h-16 mx-auto mb-4"
            />
            <h3 className="text-xl font-semibold text-center mb-3">{feature.title}</h3>
            <p className="text-gray-600 text-center">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhyChooseUs;

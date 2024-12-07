import React from "react";

const reviews = [
  {
    user: "Julia, Berlin",
    date: "Jan 11",
    rating: 5,
    title: "Moved here from another insurance company",
    content:
      "Great car insurance company! Efficient and reliable service. Quick claims processing and excellent customer support. Affordable premiums and a wide range of coverage options.",
  },
  {
    user: "Kim, Frankfurt",
    date: "Jan 11",
    rating: 3,
    title: "Decent Car Insurance Company with Room for Improvement",
    content:
      "Decent car insurance company. Average service and claims processing time. Customer support could be better. Premiums are somewhat affordable, but coverage options are limited.",
  },
];

const RatingSummary = () => {
  return (
    <div className="p-4 mb-4 mt-5 bg-white rounded-lg shadow">
      <h4>Reviews and ratings</h4>
      <div className="flex items-center mt-3">
        <h1 className="mr-3 text-5xl">4.7</h1>
        <div>
          <span className="text-yellow-400">★ ★ ★ ★ ★</span>
          <p className="text-gray-500">Based on 565 ratings</p>
        </div>
      </div>
      <div>
        <div className="flex justify-between mt-3">
          <span>Reliability</span>
          <span>4.1</span>
        </div>
        <div className="w-full bg-gray-200 rounded h-2 mb-3">
          <div className="bg-blue-500 h-2 rounded" style={{width: '80%'}}></div>
        </div>
        <div className="flex justify-between">
          <span>Payout rating</span>
          <span>4.3</span>
        </div>
        <div className="w-full bg-gray-200 rounded h-2 mb-3">
          <div className="bg-blue-500 h-2 rounded" style={{width: '85%'}}></div>
        </div>
        <div className="flex justify-between">
          <span>Positive solutions</span>
          <span>4.1</span>
        </div>
        <div className="w-full bg-gray-200 rounded h-2">
          <div className="bg-blue-500 h-2 rounded" style={{width: '80%'}}></div>
        </div>
      </div>
      <div className="text-right mt-3">
        <button className="text-blue-500 hover:text-blue-700">Show summary ▼</button>
      </div>
    </div>
  );
};

const ReviewCard = ({ user, date, rating, title, content }) => {
  return (
    <div className="mb-3 p-3 shadow-sm bg-white rounded-lg">
      <div className="flex justify-between">
        <strong>{user}</strong>
        <span className="text-gray-500">{date}</span>
      </div>
      <div className="flex items-center mt-1">
        <span className="text-yellow-400 mr-2">
          {"★".repeat(rating)}
          {"☆".repeat(5 - rating)}
        </span>
      </div>
      <h6 className="mt-2">{title}</h6>
      <p>{content}</p>
    </div>
  );
};

const ReviewSection = () => {
  return (
    <div className="container mx-auto ratinf-section mt-5">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
        <div className="md:col-span-4">
          <RatingSummary />
        </div>
        <div className="md:col-span-8">
          <div className="flex justify-between items-center mb-3">
            <h4>Reviews</h4>
            <div className="relative">
              <button className="bg-gray-200 px-3 py-1 rounded text-sm">
                Verified • All ratings
              </button>
              {/* Dropdown menu would need additional state management */}
            </div>
          </div>
          {reviews.map((review, index) => (
            <ReviewCard key={index} {...review} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ReviewSection;

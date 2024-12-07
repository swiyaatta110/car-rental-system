import React from "react";
import Navbar from "../components/Navbar";
import { useNavigate } from "react-router";
import Footer from "../components/Footer";
import About from "../components/About";
import Stat from "../components/Stat";

const featuredCars = [
    {
        id: 1,
        name: "Tesla Model 3",
        image:
            "https://images.unsplash.com/photo-1536700503339-1e4b06520771?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        price: "₹14,940/day",
    },
    {
        id: 2,
        name: "Toyota Camry",
        image:
            "https://images.unsplash.com/photo-1618609740315-de8a9088ea77?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        price: "₹4,980/day",
    },
    {
        id: 3,
        name: "Ford Mustang",
        image:
            "https://images.unsplash.com/photo-1655628266959-12ec3f839a46?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        price: "₹16,600/day",
    },
    {
        id: 4,
        name: "Tata Sumo",
        image:
            "https://images.unsplash.com/photo-1625865415981-4a3f296d4b50?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        price: "₹2,500/day",
    },
    {
        id: 5,
        name: "Hyundai Elantra",
        image:
            "https://images.unsplash.com/photo-1728885734954-561f59e7256c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        price: "₹3,486/day",
    },
    {
        id: 6,
        name: "Ford SUV",
        image:
            "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        price: "₹5,640/day",
    },
];

const Home = () => {
    const navigate = useNavigate();

    return (
        <div className="font-sans bg-gray-100">
            <Navbar />
            <main>
                {/* Hero Section */}
                <section
                    className="bg-cover bg-center py-40 px-6 text-center relative bg-[url('https://images.unsplash.com/photo-1719513460470-3e9f23322231?q=80&w=1992&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')]"
                >
                    <div className="absolute inset-0 bg-black opacity-40"></div>

                    <div className="relative z-10">
                        <h1 className="text-5xl md:text-6xl font-extrabold mb-6 text-white drop-shadow-lg">
                            Find Your Perfect Ride
                        </h1>
                        <p className="text-lg md:text-2xl mb-8 text-white opacity-90">
                            Rent a car for your next adventure with ease and comfort
                        </p>
                        <button onClick={() => navigate('/cars')} className="bg-gradient-to-r from-blue-600 to-teal-500 text-white px-8 py-4 rounded-lg text-lg font-semibold shadow-lg hover:from-blue-700 hover:to-teal-600 transition duration-300 transform hover:scale-105">
                            Browse Cars
                        </button>
                    </div>
                </section>

                {/* Featured Cars Section */}
                <section className="py-16 px-6">
                    <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
                        Featured Cars
                    </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                        {featuredCars.map((car) => (
                            <div
                                key={car.id}
                                className="border border-gray-200 rounded-lg overflow-hidden shadow-lg transform transition duration-300 hover:scale-105"
                            >
                                <img
                                    src={car.image}
                                    alt={car.name}
                                    className="w-full h-48 object-cover object-center"
                                />
                                <div className="p-6 bg-white">
                                    <h3 className="text-xl font-semibold mb-2 text-gray-800">{car.name}</h3>
                                    <p className="text-gray-600 mb-4">{car.price}</p>
                                    <button onClick={() => navigate('/cars')} className="bg-green-600 text-white px-5 py-2 rounded text-sm hover:bg-blue-700 transition duration-300 transform hover:scale-105">
                                        View More
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* How It Works Section */}
                <section className="py-20 px-6 bg-gray-50">
                    <h2 className="text-4xl font-bold text-center mb-16 text-gray-800">
                        How It Works
                    </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                        <div className="text-center">
                            <h3 className="text-2xl font-semibold text-gray-700 mb-4">Choose Your Car</h3>
                            <p className="text-gray-600">Browse through a variety of cars and select the one that suits your needs.</p>
                        </div>
                        <div className="text-center">
                            <h3 className="text-2xl font-semibold text-gray-700 mb-4">Book Online</h3>
                            <p className="text-gray-600">Reserve your car online with just a few clicks. No hassle, just convenience.</p>
                        </div>
                        <div className="text-center">
                            <h3 className="text-2xl font-semibold text-gray-700 mb-4">Pick Up & Drive</h3>
                            <p className="text-gray-600">Pick up your car from our location and enjoy your journey.</p>
                        </div>
                    </div>
                </section>
                <Stat />

                {/* About Us Section */}
                <About />
            </main>
            <Footer />
        </div>
    );
};

export default Home;

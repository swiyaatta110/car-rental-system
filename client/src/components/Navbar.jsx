import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router';
import { logout } from '../services/getServices';
import { logoutUser } from '../features/userSlice';

const Navbar = () => {
    const user = useSelector((state) => state.user.user);
    const [u, setU] = useState(null);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen((prevState) => !prevState);
    };

    useEffect(() => {
        setU(user);
    }, [u, isMenuOpen]);

    return (
        <header className="bg-gray-800 text-white py-2 px-6">
            <div className="h-14 flex justify-between items-center">
                {/* Logo */}
                <div className="text-2xl font-bold">
                    <Link to="/home">Bike&CarRental</Link>
                </div>

                {/* Mobile Hamburger Button */}
                <button
                    className="lg:hidden text-white focus:outline-none"
                    onClick={toggleMenu}
                >
                    <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M4 6h16M4 12h16M4 18h16"
                        />
                    </svg>
                </button>

                {/* Desktop Navigation Menu */}
                <nav className="hidden lg:flex lg:space-x-6">
                    <ul className="flex flex-col lg:flex-row space-y-4 lg:space-y-0 lg:space-x-6">
                        <li>
                            <Link to="/home" className="hover:text-gray-300">Home</Link>
                        </li>
                        <li>
                            <Link to="/cars" className="hover:text-gray-300">Cars</Link>
                        </li>
                        {
                            u && <li>
                                <Link to="/payment/history" className="hover:text-gray-300">Payment</Link>
                            </li>
                        }
                        {
                            u && <li>
                                {u && <Link to="/rental/history" className="hover:text-gray-300">Rental History</Link>}
                            </li>
                        }
                        <li>
                            <Link to="/bike/home" className="hover:text-gray-300">Bike</Link>
                        </li>
                    </ul>
                </nav>

                {/* Auth Links (Login & Sign Up) */}
                <div className="space-x-4 hidden lg:flex">
                    <Link
                        to="/login"
                        className="border border-white px-3 py-1 rounded hover:bg-white hover:text-gray-800 transition duration-300"
                    >
                        Login
                    </Link>
                    <Link
                        to="/signup"
                        className="bg-blue-600 px-3 py-1 rounded hover:bg-blue-700 transition duration-300"
                    >
                        Sign Up
                    </Link>
                    {u && <button
                        onClick={async () => {
                            await logout();
                            dispatch(logoutUser());
                            setU(null);
                            navigate('/home');
                        }}
                        className="bg-red-600 px-3 py-1 rounded hover:bg-red-700 transition duration-300"
                    >
                        Logout
                    </button>}
                </div>
            </div>

            {/* Mobile Menu */}
            <div
                className={`lg:hidden ${isMenuOpen ? 'block' : 'hidden'} bg-gray-800 text-white py-4`}
            >
                <ul className="space-y-4 px-6">
                    <li>
                        <Link to="/home" className="hover:text-gray-300">Home</Link>
                    </li>
                    <li>
                        <Link to="/cars" className="hover:text-gray-300">Cars</Link>
                    </li>
                    <li>
                        <Link to="/contact" className="hover:text-gray-300">Contact</Link>
                    </li>
                    {
                        u && <li>
                            <Link to="/payment/history" className="hover:text-gray-300">Payment</Link>
                        </li>
                    }
                    {
                        u && <li>
                            <Link to="/rental/history" className="hover:text-gray-300">Rental History</Link>
                        </li>
                    }
                    <li>
                        <Link to="/bike/home" className="hover:text-gray-300">Bike</Link>
                    </li>
                    <li>
                        <Link
                            to="/login"
                            className="hover:text-gray-300"
                        >
                            Login
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/signup"
                            className="hover:text-gray-300"
                        >
                            Sign Up
                        </Link>
                    </li>
                    {u && <li>
                        <button
                            onClick={async () => {
                                await logout();
                                dispatch(logoutUser());
                                setU(null);
                                navigate('/home');
                            }}
                            className="hover:text-gray-300"
                        >
                            Logout
                        </button>
                    </li>}
                </ul>
            </div>
        </header>
    );
};

export default Navbar;
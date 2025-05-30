import React from "react";
import { Link } from "react-router-dom";

const Landing = () => {
    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-100 to-indigo-200 flex flex-col items-center justify-center">
            <header className="mb-12 text-center">
                <h1 className="text-5xl font-extrabold text-indigo-700 mb-4">ClassTime Scheduler</h1>
                <p className="text-lg text-gray-700">Effortlessly manage your classes and schedules</p>
            </header>
            <div className="flex flex-col sm:flex-row gap-6 mb-10">
                <Link to="/get-started">
                    <button className="px-8 py-3 bg-indigo-600 text-white rounded-lg shadow hover:bg-indigo-700 transition font-semibold">
                        Get Started
                    </button>
                </Link>
                <Link to="/signin">
                    <button className="px-6 py-3 bg-white text-indigo-600 border border-indigo-600 rounded-lg shadow hover:bg-indigo-50 transition font-semibold">
                        Sign In
                    </button>
                </Link>
                <Link to="/signup">
                    <button className="px-6 py-3 bg-white text-indigo-600 border border-indigo-600 rounded-lg shadow hover:bg-indigo-50 transition font-semibold">
                        Sign Up
                    </button>
                </Link>
                <Link to="/about">
                    <button className="px-6 py-3 bg-gray-100 text-gray-700 rounded-lg shadow hover:bg-gray-200 transition font-semibold">
                        About
                    </button>
                </Link>
            </div>
            <footer className="text-gray-500 text-sm mt-12">
                &copy; {new Date().getFullYear()} ClassTime Scheduler. All rights reserved.
            </footer>
        </div>
    );
};

export default Landing;
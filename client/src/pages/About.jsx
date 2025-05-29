import React from "react";

const About = () => {
    return (
        <div className="min-h-screen bg-gradient-to-br from-pink-200 to-pink-300 flex flex-col items-center justify-center px-4 py-12">
            <div className="max-w-2xl w-full bg-white shadow-2xl rounded-2xl p-10 border border-blue-200">
                <h1 className="text-4xl font-extrabold text-black-700 mb-6 text-center drop-shadow">
                    About ClassTimetable & Scheduler
                </h1>
                <p className="text-gray-700 mb-6 text-lg text-center">
                    <span className="font-semibold text-black-600">ClassTimetable & Scheduler</span> is a modern web application designed to help students, teachers, and administrators efficiently manage and organize class schedules.
                </p>
                <ul className="list-disc list-inside text-gray-700 mb-6 space-y-3 pl-4">
                    <li className="hover:text-blue-600 transition">Easy creation and editing of class timetables</li>
                    <li className="hover:text-blue-600 transition">Automatic conflict detection for classes and rooms</li>
                    <li className="hover:text-blue-600 transition">Personalized schedules for students and teachers</li>
                    <li className="hover:text-blue-600 transition">Responsive design for use on any device</li>
                </ul>
                <p className="text-gray-600 text-center italic">
                    Our goal is to simplify the process of scheduling and make academic planning seamless and stress-free.
                </p>
            </div>
        </div>
    );
};

export default About;
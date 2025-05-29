import React from "react";

const Dashboard = () => {
    return (
        <div className="min-h-screen bg-pink-200 p-6">
            <header className="mb-8">
                <h1 className="text-3xl font-bold text-gray-800">Class Timetable & Scheduler Dashboard</h1>
                <p className="text-gray-600 mt-2">Manage your classes, schedules, and more.</p>
            </header>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Timetable Card */}
                <div className="bg-white rounded-lg shadow p-6 flex flex-col items-center">
                    <div className="bg-blue-100 text-blue-600 rounded-full p-3 mb-4">
                        <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                            <path d="M8 7V3M16 7V3M4 11h16M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                        </svg>
                    </div>
                    <h2 className="text-xl font-semibold mb-2">View Timetable</h2>
                    <p className="text-gray-500 mb-4 text-center">Check your class schedules and plan your week efficiently.</p>
                    <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">Go to Timetable</button>
                </div>

                {/* Scheduler Card */}
                <div className="bg-white rounded-lg shadow p-6 flex flex-col items-center">
                    <div className="bg-green-100 text-green-600 rounded-full p-3 mb-4">
                        <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                            <path d="M12 8v4l3 3M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
                        </svg>
                    </div>
                    <h2 className="text-xl font-semibold mb-2">Schedule a Class</h2>
                    <p className="text-gray-500 mb-4 text-center">Add or update class schedules for teachers and students.</p>
                    <button className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition">Open Scheduler</button>
                </div>

                {/* Reports Card */}
                <div className="bg-white rounded-lg shadow p-6 flex flex-col items-center">
                    <div className="bg-purple-100 text-purple-600 rounded-full p-3 mb-4">
                        <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                            <path d="M9 17v-2a4 4 0 018 0v2M5 10a4 4 0 018 0v2a4 4 0 01-8 0v-2z"/>
                        </svg>
                    </div>
                    <h2 className="text-xl font-semibold mb-2">Reports & Analytics</h2>
                    <p className="text-gray-500 mb-4 text-center">View attendance, usage status,and other analytics.</p>
                    <button className="bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700 transition">View Reports</button>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
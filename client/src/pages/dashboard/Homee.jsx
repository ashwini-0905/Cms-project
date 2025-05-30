import React from 'react';

function Home(props) {
    return (
        <div className="bg-purple-300 min-h-screen">
            <h1 className="text-3xl font-bold text-center mb-6 text-pink-600 italic">Class Timetable &amp; Scheduler</h1>
            <div className="flex justify-center items-start gap-10">
                {/* Add Schedule Form */}
                <div className="flex flex-col items-center justify-center w-full max-w-[400px] p-8 bg-purple-100 rounded-lg shadow-md order-1">
                    <h2 className="mb-4 text-xl font-semibold text-pink-600">Add Schedule</h2>
                    <form className="w-full">
                        <div className="mb-3">
                            <label className="block mb-1 font-medium">Subject</label>
                            <input
                                type="text"
                                className="w-full p-3 border border-purple-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-200"
                                placeholder="Enter subject"
                            />
                        </div>
                        <div className="mb-3">
                            <label className="block mb-1 font-medium">Day</label>
                            <select
                                className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-200"
                            >
                                <option>Monday</option>
                                <option>Tuesday</option>
                                <option>Wednesday</option>
                                <option>Thursday</option>
                                <option>Friday</option>
                            </select>
                        </div>
                        <div className="mb-3">
                            <label className="block mb-1 font-medium">Time</label>
                            <input
                                type="time"
                                className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-200"
                            />
                        </div>
                        <button
                            type="submit"
                            className="w-full p-3 bg-pink-500 text-white rounded font-bold hover:bg-purple-800 transition"
                        >
                            Add
                        </button>
                    </form>
                </div>
                {/* Timetable */}
                <div className="flex-1 flex justify-center">
                    <table
                        className="border-collapse min-w-[700px] bg-purple-100 shadow-lg text-lg"
                        style={{ paddingTop: '70px' }}
                    >
                        <thead>
                            <tr className="bg-pink-300 text-black">
                                <th className="p-4 border border-purple-500">Time</th>
                                <th className="p-4 border border-purple-500">Monday</th>
                                <th className="p-4 border border-purple-500">Tuesday</th>
                                <th className="p-4 border border-purple-500">Wednesday</th>
                                <th className="p-4 border border-purple-500">Thursday</th>
                                <th className="p-4 border border-purple-500">Friday</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="p-4 border border-purple-500">9:00 - 10:00</td>
                                <td className="p-4 border border-purple-500">Math</td>
                                <td className="p-4 border border-purple-500">English</td>
                                <td className="p-4 border border-purple-500">Physics</td>
                                <td className="p-4 border border-purple-500">Chemistry</td>
                                <td className="p-4 border border-purple-500">Biology</td>
                            </tr>
                            <tr>
                                <td className="p-4 border border-purple-500">10:00 - 11:00</td>
                                <td className="p-4 border border-purple-500">English</td>
                                <td className="p-4 border border-purple-500">Math</td>
                                <td className="p-4 border border-purple-500">Chemistry</td>
                                <td className="p-4 border border-purple-500">Biology</td>
                                <td className="p-4 border border-purple-500">Physics</td>
                            </tr>
                            <tr>
                                <td className="p-4 border border-purple-500">11:00 - 12:00</td>
                                <td className="p-4 border border-purple-500">Physics</td>
                                <td className="p-4 border border-purple-500">Chemistry</td>
                                <td className="p-4 border border-purple-500">Math</td>
                                <td className="p-4 border border-purple-500">English</td>
                                <td className="p-4 border border-purple-500">History</td>
                            </tr>
                            <tr>
                                <td className="p-4 border border-purple-500">12:00 - 1:00</td>
                                <td colSpan={5} className="p-4 border border-purple-500 text-center bg-pink-300">Lunch Break</td>
                            </tr>
                            <tr>
                                <td className="p-4 border border-purple-500">1:00 - 2:00</td>
                                <td className="p-4 border border-purple-500">Biology</td>
                                <td className="p-4 border border-purple-500">History</td>
                                <td className="p-4 border border-purple-500">English</td>
                                <td className="p-4 border border-purple-500">Math</td>
                                <td className="p-4 border border-purple-500">Chemistry</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

export default Home;
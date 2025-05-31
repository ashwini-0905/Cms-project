import React from "react";

const attendanceData = [
    { date: "2024-06-01", present: 28, absent: 2 },
    { date: "2024-06-02", present: 27, absent: 3 },
    { date: "2024-06-03", present: 30, absent: 0 },
    { date: "2024-06-04", present: 29, absent: 1 },
];

const usageStats = [
    { label: "Total Classes", value: 40 },
    { label: "Total Students", value: 30 },
    { label: "Avg Attendance (%)", value: "95%" },
    { label: "Timetable Updates", value: 12 },
];

export default function Reports() {
    return (
        <div className="p-6 bg-pink-400 min-h-screen">
            <h1 className="text-2xl font-bold mb-6 text-gray-800">Analytics & Reports</h1>

            {/* Usage Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                {usageStats.map((stat) => (
                    <div
                        key={stat.label}
                        className="bg-purple-300 rounded-lg shadow p-4 flex flex-col items-center"
                    >
                        <span className="text-lg font-semibold text-black-600">{stat.value}</span>
                        <span className="text-black-300 text-sm">{stat.label}</span>
                    </div>
                ))}
            </div>

            {/* Attendance Table */}
            <div className="bg-purple-300 rounded-lg shadow p-6 mb-8">
                <h2 className="text-xl font-semibold mb-4 text-black-700">Attendance Overview</h2>
                <table className="min-w-full table-auto">
                    <thead>
                        <tr className="bg-black-100">
                            <th className="px-4 py-2 text-left text-black-600">Date</th>
                            <th className="px-4 py-2 text-left text-black-600">Present</th>
                            <th className="px-4 py-2 text-left text-black-600">Absent</th>
                            <th className="px-4 py-2 text-left text-black-600">Attendance (%)</th>
                        </tr>
                    </thead>
                    <tbody>
                        {attendanceData.map((row) => (
                            <tr key={row.date} className="border-b">
                                <td className="px-4 py-2">{row.date}</td>
                                <td className="px-4 py-2">{row.present}</td>
                                <td className="px-4 py-2">{row.absent}</td>
                                <td className="px-4 py-2">
                                    {((row.present / (row.present + row.absent)) * 100).toFixed(1)}%
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* Placeholder for more analytics */}
            <div className="bg-purple-300 rounded-lg shadow p-6">
                <h2 className="text-xl font-semibold mb-2 text-black-700">Other Analytics</h2>
                <p className="text-black-500">Charts and detailed analytics coming soon...</p>
            </div>
        </div>
    );
}
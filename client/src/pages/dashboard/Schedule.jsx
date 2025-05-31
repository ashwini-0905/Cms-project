import React, { useState } from "react";

const initialForm = {
    className: "",
    teacher: "",
    students: "",
    date: "",
    time: "",
};

const Scheduling = () => {
    const [form, setForm] = useState(initialForm);
    const [schedules, setSchedules] = useState([]);
    const [editIndex, setEditIndex] = useState(null);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (
            !form.className ||
            !form.teacher ||
            !form.students ||
            !form.date ||
            !form.time
        )
            return;

        if (editIndex !== null) {
            const updated = [...schedules];
            updated[editIndex] = form;
            setSchedules(updated);
            setEditIndex(null);
        } else {
            setSchedules([...schedules, form]);
        }
        setForm(initialForm);
    };

    const handleEdit = (idx) => {
        setForm(schedules[idx]);
        setEditIndex(idx);
    };

    const handleDelete = (idx) => {
        setSchedules(schedules.filter((_, i) => i !== idx));
        if (editIndex === idx) {
            setForm(initialForm);
            setEditIndex(null);
        }
    };

    return (
        <div className="max-w-3xl mx-auto p-6">
            <h2 className="text-2xl font-bold mb-4">Schedule a Class</h2>
            <form
                onSubmit={handleSubmit}
                className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-8"
            >
                <div className="mb-4">
                    <label className="block text-gray-700 mb-2">Class Name</label>
                    <input
                        type="text"
                        name="className"
                        value={form.className}
                        onChange={handleChange}
                        className="w-full border rounded px-3 py-2"
                        placeholder="e.g. Math 101"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 mb-2">Teacher</label>
                    <input
                        type="text"
                        name="teacher"
                        value={form.teacher}
                        onChange={handleChange}
                        className="w-full border rounded px-3 py-2"
                        placeholder="e.g. Mr. Smith"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 mb-2">Students</label>
                    <input
                        type="text"
                        name="students"
                        value={form.students}
                        onChange={handleChange}
                        className="w-full border rounded px-3 py-2"
                        placeholder="Comma separated names"
                    />
                </div>
                <div className="mb-4 flex gap-4">
                    <div className="flex-1">
                        <label className="block text-gray-700 mb-2">Date</label>
                        <input
                            type="date"
                            name="date"
                            value={form.date}
                            onChange={handleChange}
                            className="w-full border rounded px-3 py-2"
                        />
                    </div>
                    <div className="flex-1">
                        <label className="block text-gray-700 mb-2">Time</label>
                        <input
                            type="time"
                            name="time"
                            value={form.time}
                            onChange={handleChange}
                            className="w-full border rounded px-3 py-2"
                        />
                    </div>
                </div>
                <button
                    type="submit"
                    className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
                >
                    {editIndex !== null ? "Update Schedule" : "Add Schedule"}
                </button>
                {editIndex !== null && (
                    <button
                        type="button"
                        className="ml-4 text-gray-600 underline"
                        onClick={() => {
                            setForm(initialForm);
                            setEditIndex(null);
                        }}
                    >
                        Cancel
                    </button>
                )}
            </form>

            <h3 className="text-xl font-semibold mb-2">Scheduled Classes</h3>
            <div className="overflow-x-auto">
                <table className="min-w-full bg-white shadow rounded">
                    <thead>
                        <tr>
                            <th className="py-2 px-4 border-b">Class</th>
                            <th className="py-2 px-4 border-b">Teacher</th>
                            <th className="py-2 px-4 border-b">Students</th>
                            <th className="py-2 px-4 border-b">Date</th>
                            <th className="py-2 px-4 border-b">Time</th>
                            <th className="py-2 px-4 border-b">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {schedules.length === 0 && (
                            <tr>
                                <td colSpan={6} className="text-center py-4 text-gray-500">
                                    No schedules yet.
                                </td>
                            </tr>
                        )}
                        {schedules.map((sch, idx) => (
                            <tr key={idx}>
                                <td className="py-2 px-4 border-b">{sch.className}</td>
                                <td className="py-2 px-4 border-b">{sch.teacher}</td>
                                <td className="py-2 px-4 border-b">{sch.students}</td>
                                <td className="py-2 px-4 border-b">{sch.date}</td>
                                <td className="py-2 px-4 border-b">{sch.time}</td>
                                <td className="py-2 px-4 border-b">
                                    <button
                                        className="text-blue-600 hover:underline mr-2"
                                        onClick={() => handleEdit(idx)}
                                    >
                                        Edit
                                    </button>
                                    <button
                                        className="text-red-600 hover:underline"
                                        onClick={() => handleDelete(idx)}
                                    >
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Scheduling;
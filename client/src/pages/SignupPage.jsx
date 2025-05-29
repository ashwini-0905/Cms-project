import React, { useState } from "react";


const SignupPage = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    role: "student",
  });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setError("");
    setSuccess("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (form.password !== form.confirmPassword) {
      setError("Passwords do not match.");
      return;
    }
    setSuccess("Signup successful! You can now log in.");
    setForm({
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
      role: "student",
    });
  };

  return (
    <div className="max-w-md mx-auto mt-12 p-8 rounded-2xl shadow-lg bg-white font-sans">
      <h2 className="text-center mb-6 text-2xl font-semibold text-gray-800">
        Sign Up for <span className="text-blue-600">Class Timetable Scheduler</span>
      </h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block mb-1 font-medium text-gray-700">
            Name
          </label>
          <input
            name="name"
            value={form.name}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 border border-slate-300 rounded-md text-base outline-none focus:border-blue-400 transition"
            placeholder="Enter your name"
          />
        </div>
        <div className="mb-4">
          <label className="block mb-1 font-medium text-gray-700">
            Email
          </label>
          <input
            name="email"
            type="email"
            value={form.email}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 border border-slate-300 rounded-md text-base outline-none focus:border-blue-400 transition"
            placeholder="Enter your email"
          />
        </div>
        <div className="mb-4">
          <label className="block mb-1 font-medium text-gray-700">
            Password
          </label>
          <input
            name="password"
            type="password"
            value={form.password}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 border border-slate-300 rounded-md text-base outline-none focus:border-blue-400 transition"
            placeholder="Create a password"
          />
        </div>
        <div className="mb-4">
          <label className="block mb-1 font-medium text-gray-700">
            Confirm Password
          </label>
          <input
            name="confirm password"
            type="password"
            value={form.confirmPassword}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 border border-slate-300 rounded-md text-base outline-none focus:border-blue-400 transition"
            placeholder="Re-enter your password "
          />
        </div>
        <div className="mb-5">
          <label className="block mb-1 font-medium text-gray-700">
            Role
          </label>
          <select
            name="role"
            value={form.role}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-slate-300 rounded-md text-base bg-gray-50 text-gray-800 outline-none focus:border-blue-400 transition"
          >
            <option value="student">Student</option>
            <option value="teacher">Teacher</option>
          </select>
        </div>
        {error && (
          <div className="text-red-600 bg-red-50 border border-red-200 rounded px-3 py-2 mb-3 text-sm">
            {error}
          </div>
        )}
        {success && (
          <div className="text-green-600 bg-green-50 border border-green-200 rounded px-3 py-2 mb-3 text-sm">
            {success}
          </div>
        )}
        <button
          type="submit"
          className="w-full py-3 bg-gradient-to-r from-blue-600 to-blue-300 text-white font-semibold text-lg rounded-md shadow transition hover:from-blue-700 hover:to-blue-400"
        >
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default SignupPage;
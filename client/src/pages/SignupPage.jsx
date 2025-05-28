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
    <div
      style={{
        maxWidth: 420,
        margin: "48px auto",
        padding: 32,
        border: "none",
        borderRadius: 16,
        boxShadow: "0 4px 24px rgba(0,0,0,0.10)",
        background: "#fff",
        fontFamily: "Segoe UI, Arial, sans-serif",
      }}
    >
      <h2 style={{ textAlign: "center", marginBottom: 24, color: "#2d3748" }}>
        Sign Up for <span style={{ color: "#3182ce" }}>Class Timetable Scheduler</span>
      </h2>
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: 18 }}>
          <label style={{ display: "block", marginBottom: 6, fontWeight: 500, color: "#4a5568" }}>
            Name
          </label>
          <input
            name="name"
            value={form.name}
            onChange={handleChange}
            required
            style={{
              width: "100%",
              padding: "10px 12px",
              border: "1px solid #cbd5e1",
              borderRadius: 6,
              fontSize: 16,
              outline: "none",
              transition: "border 0.2s",
            }}
            placeholder="Enter your name"
          />
        </div>
        <div style={{ marginBottom: 18 }}>
          <label style={{ display: "block", marginBottom: 6, fontWeight: 500, color: "#4a5568" }}>
            Email
          </label>
          <input
            name="email"
            type="email"
            value={form.email}
            onChange={handleChange}
            required
            style={{
              width: "100%",
              padding: "10px 12px",
              border: "1px solid #cbd5e1",
              borderRadius: 6,
              fontSize: 16,
              outline: "none",
              transition: "border 0.2s",
            }}
            placeholder="Enter your email"
          />
        </div>
        <div style={{ marginBottom: 18 }}>
          <label style={{ display: "block", marginBottom: 6, fontWeight: 500, color: "#4a5568" }}>
            Password
          </label>
          <input
            name="password"
            type="password"
            value={form.password}
            onChange={handleChange}
            required
            style={{
              width: "100%",
              padding: "10px 12px",
              border: "1px solid #cbd5e1",
              borderRadius: 6,
              fontSize: 16,
              outline: "none",
              transition: "border 0.2s",
            }}
            placeholder="Create a password"
          />
        </div>
        <div style={{ marginBottom: 18 }}>
          <label style={{ display: "block", marginBottom: 6, fontWeight: 500, color: "#4a5568" }}>
            Confirm Password
          </label>
          <input
            name="confirmPassword"
            type="password"
            value={form.confirmPassword}
            onChange={handleChange}
            required
            style={{
              width: "100%",
              padding: "10px 12px",
              border: "1px solid #cbd5e1",
              borderRadius: 6,
              fontSize: 16,
              outline: "none",
              transition: "border 0.2s",
            }}
            placeholder="Re-enter your password"
          />
        </div>
        <div style={{ marginBottom: 22 }}>
          <label style={{ display: "block", marginBottom: 6, fontWeight: 500, color: "#4a5568" }}>
            Role
          </label>
          <select
            name="role"
            value={form.role}
            onChange={handleChange}
            style={{
              width: "100%",
              padding: "10px 12px",
              border: "1px solid #cbd5e1",
              borderRadius: 6,
              fontSize: 16,
              background: "#f7fafc",
              color: "#2d3748",
              outline: "none",
              transition: "border 0.2s",
            }}
          >
            <option value="student">Student</option>
            <option value="teacher">Teacher</option>
          </select>
        </div>
        {error && (
          <div
            style={{
              color: "#e53e3e",
              background: "#fff5f5",
              border: "1px solid #fed7d7",
              borderRadius: 5,
              padding: "8px 12px",
              marginBottom: 14,
              fontSize: 15,
            }}
          >
            {error}
          </div>
        )}
        {success && (
          <div
            style={{
              color: "#38a169",
              background: "#f0fff4",
              border: "1px solid #c6f6d5",
              borderRadius: 5,
              padding: "8px 12px",
              marginBottom: 14,
              fontSize: 15,
            }}
          >
            {success}
          </div>
        )}
        <button
          type="submit"
          style={{
            width: "100%",
            padding: "12px 0",
            background: "linear-gradient(90deg, #3182ce 0%, #63b3ed 100%)",
            color: "#fff",
            fontWeight: 600,
            fontSize: 17,
            border: "none",
            borderRadius: 6,
            cursor: "pointer",
            boxShadow: "0 2px 8px rgba(49,130,206,0.08)",
            transition: "background 0.2s",
          }}
        >
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default SignupPage;
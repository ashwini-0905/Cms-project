import React, { useState } from "react";

const SignIn = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        // Add authentication logic here
        if (!email || !password) {
            setError("Please enter both email and password.");
            return;
        }
        setError("");
        // Proceed with sign in
        alert("Signed in successfully!");
    };

    return (
        <div style={styles.container}>
            <form style={styles.form} onSubmit={handleSubmit}>
                <h2 style={styles.title}>ClassTime & Scheduler</h2>
                <p style={styles.subtitle}>Sign in to your account</p>
                {error && <div style={styles.error}>{error}</div>}
                <div style={styles.inputGroup}>
                    <label style={styles.label}>Email</label>
                    <input
                        style={styles.input}
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter your email"
                        autoFocus
                    />
                </div>
                <div style={styles.inputGroup}>
                    <label style={styles.label}>Password</label>
                    <input
                        style={styles.input}
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Enter your password"
                    />
                </div>
                <button style={styles.button} type="submit">
                    Sign In
                </button>
                <div style={styles.footer}>
                    <span>Don't have an account?</span>
                    <a href="/signup" style={styles.link}>Sign Up</a>
                </div>
            </form>
        </div>
    );
};

const styles = {
    container: {
        minHeight: "100vh",
        background: "linear-gradient(135deg, #6a11cb 0%, #2575fc 100%)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
    },
    form: {
        background: "#fff",
        padding: "2.5rem 2rem",
        borderRadius: "16px",
        boxShadow: "0 8px 32px rgba(44, 62, 80, 0.2)",
        minWidth: "340px",
        display: "flex",
        flexDirection: "column",
        gap: "1.2rem",
    },
    title: {
        margin: 0,
        fontSize: "2rem",
        fontWeight: 700,
        color: "#2575fc",
        textAlign: "center",
    },
    subtitle: {
        margin: 0,
        fontSize: "1rem",
        color: "#555",
        textAlign: "center",
        marginBottom: "1rem",
    },
    inputGroup: {
        display: "flex",
        flexDirection: "column",
        gap: "0.3rem",
    },
    label: {
        fontSize: "0.95rem",
        color: "#333",
        fontWeight: 500,
    },
    input: {
        padding: "0.7rem",
        borderRadius: "8px",
        border: "1px solid #d1d5db",
        fontSize: "1rem",
        outline: "none",
        transition: "border 0.2s",
    },
    button: {
        padding: "0.8rem",
        borderRadius: "8px",
        border: "none",
        background: "linear-gradient(90deg, #6a11cb 0%, #2575fc 100%)",
        color: "#fff",
        fontWeight: 600,
        fontSize: "1.1rem",
        cursor: "pointer",
        marginTop: "0.5rem",
        transition: "background 0.2s",
    },
    error: {
        color: "#e74c3c",
        background: "#fdecea",
        padding: "0.5rem",
        borderRadius: "6px",
        fontSize: "0.95rem",
        textAlign: "center",
    },
    footer: {
        marginTop: "1rem",
        textAlign: "center",
        fontSize: "0.95rem",
        color: "#555",
    },
    link: {
        marginLeft: "0.3rem",
        color: "#2575fc",
        textDecoration: "none",
        fontWeight: 600,
    },
};

export default SignIn;
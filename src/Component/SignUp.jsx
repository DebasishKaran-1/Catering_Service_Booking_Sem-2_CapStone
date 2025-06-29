import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function SignUp() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();

  const handleSignUp = (e) => {
    e.preventDefault();
    // Add sign-up logic here
  };

  return (
    <div style={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", background: "#fff" }}>
      <form
        onSubmit={handleSignUp}
        style={{
          background: "#fff",
          borderRadius: 16,
          boxShadow: "0 2px 12px rgba(0,0,0,0.04)",
          padding: "32px 24px 24px 24px",
          maxWidth: 400,
          width: "100%",
          border: "1.5px solid #e5e7eb",
          display: "flex",
          flexDirection: "column",
          gap: 18,
        }}
      >
        <h2 style={{ textAlign: "center", fontWeight: 800, fontSize: 32, marginBottom: 10, color: "#101828", letterSpacing: -0.5 }}>Sign Up</h2>
        <div>
          <label style={{ fontWeight: 700, color: "#101828", marginBottom: 6, display: "block", fontSize: 16, letterSpacing: -0.2 }}>Full Name</label>
          <input
            type="text"
            placeholder="Enter your full name"
            value={fullName}
            onChange={e => setFullName(e.target.value)}
            required
            style={{
              width: "100%",
              padding: "10px 12px",
              borderRadius: 8,
              border: "1.5px solid #e5e7eb",
              fontSize: 14,
              fontFamily: "inherit",
              outline: "none",
              background: "#f6f8fb",
              marginTop: 6,
              marginBottom: 0,
              color: "#222",
              boxSizing: "border-box"
            }}
            className="signup-input"
          />
        </div>
        <div>
          <label style={{ fontWeight: 700, color: "#101828", marginBottom: 6, display: "block", fontSize: 16, letterSpacing: -0.2 }}>Email</label>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            required
            style={{
              width: "100%",
              padding: "10px 12px",
              borderRadius: 8,
              border: "1.5px solid #e5e7eb",
              fontSize: 14,
              fontFamily: "inherit",
              outline: "none",
              background: "#f6f8fb",
              marginTop: 6,
              marginBottom: 0,
              color: "#222",
              boxSizing: "border-box"
            }}
            className="signup-input"
          />
        </div>
        <div>
          <label style={{ fontWeight: 700, color: "#101828", marginBottom: 6, display: "block", fontSize: 16, letterSpacing: -0.2 }}>Password</label>
          <input
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            required
            style={{
              width: "100%",
              padding: "10px 12px",
              borderRadius: 8,
              border: "1.5px solid #e5e7eb",
              fontSize: 14,
              fontFamily: "inherit",
              outline: "none",
              background: "#f6f8fb",
              marginTop: 6,
              marginBottom: 0,
              color: "#222",
              boxSizing: "border-box"
            }}
            className="signup-input"
          />
        </div>
        <div>
          <label style={{ fontWeight: 700, color: "#101828", marginBottom: 6, display: "block", fontSize: 16, letterSpacing: -0.2 }}>Confirm Password</label>
          <input
            type="password"
            placeholder="Confirm your password"
            value={confirmPassword}
            onChange={e => setConfirmPassword(e.target.value)}
            required
            style={{
              width: "100%",
              padding: "10px 12px",
              borderRadius: 8,
              border: "1.5px solid #e5e7eb",
              fontSize: 14,
              fontFamily: "inherit",
              outline: "none",
              background: "#f6f8fb",
              marginTop: 6,
              marginBottom: 0,
              color: "#222",
              boxSizing: "border-box"
            }}
            className="signup-input"
          />
        </div>
        <button
          type="submit"
          style={{
            width: "100%",
            background: "#0a1121",
            color: "#fff",
            border: "none",
            borderRadius: 10,
            padding: "14px 0",
            fontWeight: 700,
            fontSize: 18,
            marginTop: 10,
            marginBottom: 0,
            cursor: "pointer",
            letterSpacing: 0.2,
            boxShadow: "0 2px 8px rgba(10,17,33,0.08)",
          }}
        >
          Sign Up
        </button>
        <div style={{ textAlign: "center", marginTop: 12, color: "#6b7280", fontSize: 15, fontWeight: 500 }}>
          Already have an account?{' '}
          <span
            style={{ color: "#FF8800", fontWeight: 600, cursor: "pointer", fontSize: 15 }}
            onClick={() => navigate("/signin")}
          >
            Sign in
          </span>
        </div>
        <div style={{ textAlign: "center", marginTop: 0 }}>
          <span
            style={{ color: "#FF8800", fontWeight: 600, cursor: "pointer", fontSize: 16 }}
            onClick={() => navigate("/")}
          >
            Back to Home
          </span>
        </div>
      </form>
      <style>{`
        .signup-input::placeholder {
          font-size: 13px;
          color: #94a3b8;
          opacity: 1;
        }
      `}</style>
    </div>
  );
} 
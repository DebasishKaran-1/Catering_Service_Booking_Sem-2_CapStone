import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSignIn = (e) => {
    e.preventDefault();
    // Add sign-in logic here
  };

  return (
    <div style={{ minHeight: "100vh", display: "flex", alignItems: "flex-start", justifyContent: "center", background: "#fff" }}>
      <form
        onSubmit={handleSignIn}
        style={{
          background: "#fff",
          borderRadius: 16,
          boxShadow: "0 2px 12px rgba(0,0,0,0.04)",
          padding: "32px 24px 24px 24px",
          maxWidth: 420,
          width: "100%",
          border: "1.5px solid #e5e7eb",
          display: "flex",
          flexDirection: "column",
          gap: 20,
          marginTop: 60,
        }}
      >
        <h2 style={{ textAlign: "center", fontWeight: 800, fontSize: 32, marginBottom: 10, color: "#0a1121", letterSpacing: -0.5 }}>Sign In</h2>
        <div>
          <label style={{ fontWeight: 700, color: "#0a1121", marginBottom: 6, display: "block", fontSize: 18, letterSpacing: -0.2 }}>Email</label>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            required
            style={{
              width: "100%",
              padding: "12px 14px",
              borderRadius: 8,
              border: "1.5px solid #e5e7eb",
              fontSize: 16,
              fontFamily: "inherit",
              outline: "none",
              background: "#f6f8fb",
              marginTop: 6,
              marginBottom: 0,
              color: "#222",
              boxSizing: "border-box"
            }}
            className="signin-input"
          />
        </div>
        <div>
          <label style={{ fontWeight: 700, color: "#0a1121", marginBottom: 6, display: "block", fontSize: 18, letterSpacing: -0.2 }}>Password</label>
          <input
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            required
            style={{
              width: "100%",
              padding: "12px 14px",
              borderRadius: 8,
              border: "1.5px solid #e5e7eb",
              fontSize: 16,
              fontFamily: "inherit",
              outline: "none",
              background: "#f6f8fb",
              marginTop: 6,
              marginBottom: 0,
              color: "#222",
              boxSizing: "border-box"
            }}
            className="signin-input"
          />
        </div>
        <button
          type="submit"
          style={{
            width: "100%",
            background: "#0a1121",
            color: "#fff",
            border: "none",
            borderRadius: 8,
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
          Sign In
        </button>
        <div style={{ textAlign: "center", marginTop: 16, color: "#6b7280", fontSize: 15, fontWeight: 500 }}>
          Don't have an account?{' '}
          <span
            style={{ color: "#FF8800", fontWeight: 600, cursor: "pointer", fontSize: 15 }}
            onClick={() => navigate("/signup")}
          >
            Sign up
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
        .signin-input::placeholder {
          font-size: 13px;
          color: #94a3b8;
          opacity: 1;
        }
      `}</style>
    </div>
  );
} 
import React from "react";

function Navbar() {
  return (
    <nav style={{display: "flex", alignItems: "center", justifyContent: "space-between", padding: "20px 40px", background: "#fff", boxShadow: "0 2px 8px rgba(0,0,0,0.03)"}}>
      <div style={{display: "flex", alignItems: "center"}}>
        <span style={{fontWeight: "bold", color: "#FF8800", fontSize: "1.6rem", marginRight: "10px"}}>🛒</span>
        <span style={{fontWeight: "bold", color: "#FF8800", fontSize: "1.6rem"}}>CaterMate</span>
      </div>
      <ul style={{display: "flex", gap: "30px", listStyle: "none", margin: 0, padding: 0}}>
        <li>Home</li>
        <li>Find Caterers</li>
        <li>Events</li>
        <li>Services</li>
        <li>Book Now</li>
      </ul>
      <div style={{display: "flex", alignItems: "center", gap: "15px"}}>
        <input type="text" placeholder="Search caterers..." style={{padding: "8px 16px", borderRadius: "20px", border: "1px solid #eee"}} />
        <button style={{background: "#FF8800", color: "#fff", border: "none", borderRadius: "8px", padding: "8px 24px", fontWeight: "bold"}}>Sign In</button>
      </div>
    </nav>
  );
}

export default Navbar;
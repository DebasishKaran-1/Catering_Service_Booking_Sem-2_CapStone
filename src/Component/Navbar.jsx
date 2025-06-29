import React, { useState } from "react";
import { NavLink, useNavigate } from 'react-router-dom';

function Navbar({ onSignInClick }) {
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  const handleSearch = () => {
    navigate('/find-caterer');
  };

  return (
    <nav style={{display: "flex", alignItems: "center", justifyContent: "space-between", padding: "20px 40px", background: "#fff", boxShadow: "0 2px 8px rgba(0,0,0,0.03)"}}>
      <div style={{display: "flex", alignItems: "center"}}>
        <span style={{fontWeight: "bold", color: "#FF8800", fontSize: "1.6rem", marginRight: "10px"}}>🛒</span>
        <span style={{fontWeight: "bold", color: "#FF8800", fontSize: "1.6rem"}}>CaterMate</span>
      </div>
      <ul style={{display: "flex", gap: "32px", listStyle: "none", margin: 0, padding: 0}}>
        <li><NavLink to="/" style={({ isActive }) => ({ color: isActive ? '#111827' : '#111827', fontWeight: 400, textDecoration: 'none', fontSize: '1.1rem', fontFamily: 'Inter, sans-serif', transition: 'color 0.2s' })} className="navbar-link">Home</NavLink></li>
        <li><NavLink to="/find-caterer" style={({ isActive }) => ({ color: isActive ? '#111827' : '#111827', fontWeight: 400, textDecoration: 'none', fontSize: '1.1rem', fontFamily: 'Inter, sans-serif', transition: 'color 0.2s' })} className="navbar-link">Find Caterers</NavLink></li>
        <li><NavLink to="/menu" style={({ isActive }) => ({ color: isActive ? '#111827' : '#111827', fontWeight: 400, textDecoration: 'none', fontSize: '1.1rem', fontFamily: 'Inter, sans-serif', transition: 'color 0.2s' })} className="navbar-link">Menus</NavLink></li>
        <li><NavLink to="/contact" style={({ isActive }) => ({ color: isActive ? '#111827' : '#111827', fontWeight: 400, textDecoration: 'none', fontSize: '1.1rem', fontFamily: 'Inter, sans-serif', transition: 'color 0.2s' })} className="navbar-link">Contact</NavLink></li>
      </ul>
      <div style={{display: "flex", alignItems: "center", gap: "15px"}}>
        <input type="text" placeholder="Search caterers..." value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} style={{padding: "8px 16px", borderRadius: "20px", border: "1px solid #eee"}} />
        <button
          style={{background: "#FF8800", color: "#fff", border: "none", borderRadius: "8px", padding: "8px 24px", fontWeight: "bold"}}
          onClick={handleSearch}
        >
          Search
        </button>
        <button
          style={{background: "#FF8800", color: "#fff", border: "none", borderRadius: "8px", padding: "8px 24px", fontWeight: "bold", fontSize: "1.05rem", marginLeft: "8px", boxShadow: "0 2px 8px rgba(255,136,0,0.08)", cursor: "pointer", transition: "background 0.2s"}}
          onClick={() => navigate('/signin')}
        >
          Sign In
        </button>
      </div>
      <style>{`
        .navbar-link:hover {
          color: #FF8800 !important;
        }
      `}</style>
    </nav>
  );
}

export default Navbar;
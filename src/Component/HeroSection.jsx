import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';

function HeroSection() {
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  const handleSearch = () => {
    navigate('/find-caterer');
  };

  return (
    <section style={{
      background: "url('https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1500&q=80') center/cover no-repeat",
      minHeight: "480px",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      color: "#fff",
      position: "relative"
    }}>
      <div style={{
        position: "absolute",
        top: 0, left: 0, right: 0, bottom: 0,
        background: "rgba(0,0,0,0.45)",
        zIndex: 1
      }}></div>
      <div style={{position: "relative", zIndex: 2, textAlign: "center", maxWidth: "700px"}}>
        <h1 style={{fontSize: "3rem", fontWeight: "bold", marginBottom: "16px"}}>Find the Perfect Catering<br />for Your Special Event</h1>
        <p style={{fontSize: "1.2rem", marginBottom: "32px"}}>Discover top-rated catering services for weddings, corporate events, parties, and more. Book with confidence.</p>
        <div style={{display: "flex", justifyContent: "center", alignItems: "center", gap: "0"}}>
          <input type="text" placeholder="Search by location, cuisine, or event type..." value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} style={{padding: "14px 20px", borderRadius: "30px 0 0 30px", border: "none", width: "340px", fontSize: "1rem"}} />
          <button style={{padding: "14px 32px", borderRadius: "0 30px 30px 0", border: "none", background: "#FF8800", color: "#fff", fontWeight: "bold", fontSize: "1rem"}} onClick={handleSearch}>Search</button>
        </div>
        <div style={{marginTop: "28px", display: "flex", justifyContent: "center", gap: "12px", flexWrap: "wrap"}}>
          <span style={{color: "#fff", fontWeight: "bold"}}>Popular:</span>
          {["Wedding", "Corporate", "Birthday", "BBQ", "Vegan"].map(tag => (
            <span
              key={tag}
              style={{background: "rgba(255,255,255,0.2)", borderRadius: "16px", padding: "6px 18px", color: "#fff", fontWeight: "500", marginLeft: "4px", cursor: "pointer", transition: "background 0.15s"}}
              onClick={() => navigate(`/find-caterer?highlight=${encodeURIComponent(tag)}`)}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
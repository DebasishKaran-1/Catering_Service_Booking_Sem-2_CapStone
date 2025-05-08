import React from "react";

const cuisines = [
  { name: "Italian", img: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=400&q=80" },
  { name: "Indian", img: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=400&q=80" },
  { name: "Chinese", img: "https://images.unsplash.com/photo-1467003909585-2f8a72700288?auto=format&fit=crop&w=400&q=80" },
  { name: "Mexican", img: "https://images.unsplash.com/photo-1502741338009-cac2772e18bc?auto=format&fit=crop&w=400&q=80" },
  { name: "BBQ", img: "https://images.unsplash.com/photo-1467003909585-2f8a72700288?auto=format&fit=crop&w=400&q=80" },
  { name: "Vegan", img: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=400&q=80" }
];

function PopularCuisines() {
  const isMobile = window.innerWidth <= 600;
  return (
    <section style={{background: "#f9f9f9", padding: isMobile ? "30px 0" : "60px 0"}}>
      <h2 style={{textAlign: "center", fontSize: isMobile ? "1.2rem" : "2rem", fontWeight: "bold", marginBottom: "10px"}}>Popular Cuisines</h2>
      <p style={{textAlign: "center", color: "#555", marginBottom: isMobile ? "24px" : "40px", fontSize: isMobile ? "1rem" : "1.1rem"}}>Explore our wide variety of cuisines from top-rated catering services</p>
      <div style={{
        display: "flex",
        justifyContent: "center",
        gap: isMobile ? "12px" : "32px",
        flexWrap: "wrap"
      }}>
        {cuisines.map(cuisine => (
          <div key={cuisine.name} style={{
            width: isMobile ? "90vw" : "180px",
            background: "#fff",
            borderRadius: "18px",
            boxShadow: "0 2px 8px rgba(0,0,0,0.07)",
            overflow: "hidden",
            textAlign: "center"
          }}>
            <img src={cuisine.img} alt={cuisine.name} style={{width: "100%", height: isMobile ? "80px" : "110px", objectFit: "cover"}} />
            <div style={{padding: "16px 0", fontWeight: "bold", fontSize: isMobile ? "1rem" : "1.1rem"}}>{cuisine.name}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default PopularCuisines;
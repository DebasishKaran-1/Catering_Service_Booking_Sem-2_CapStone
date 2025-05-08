import React from "react";

const steps = [
  {
    icon: "🔍",
    title: "Find Caterers",
    desc: "Search for catering services by location, cuisine type, or event. Browse through our extensive list of professional caterers."
  },
  {
    icon: "📖",
    title: "Explore Menus",
    desc: "View detailed menus, pricing, high-quality photos, and read authentic reviews from past clients."
  },
  {
    icon: "📅",
    title: "Request Quotes",
    desc: "Contact your favorite caterers, request personalized quotes, and discuss your specific event requirements."
  },
  {
    icon: "⭐",
    title: "Book & Enjoy",
    desc: "Secure your booking, make payments safely through our platform, and enjoy a stress-free catering experience."
  }
];

function HowItWorks() {
  return (
    <section style={{background: "#fff", padding: "60px 0"}}>
      <h2 style={{textAlign: "center", fontSize: "2.2rem", fontWeight: "bold", marginBottom: "10px"}}>How CaterMate Works</h2>
      <p style={{textAlign: "center", color: "#555", marginBottom: "40px"}}>Finding and booking the perfect catering service has never been easier. Follow these simple steps to get started.</p>
      <div style={{display: "flex", justifyContent: "center", gap: "48px", flexWrap: "wrap"}}>
        {steps.map(step => (
          <div key={step.title} style={{width: "220px", textAlign: "center"}}>
            <div style={{fontSize: "2.5rem", marginBottom: "12px"}}>{step.icon}</div>
            <h3 style={{fontWeight: "bold", fontSize: "1.2rem", marginBottom: "8px"}}>{step.title}</h3>
            <p style={{color: "#666", fontSize: "1rem"}}>{step.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default HowItWorks;
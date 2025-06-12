import React from "react";

const steps = [
  {
    icon: (
      <span style={{
        display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: 64, height: 64, borderRadius: '50%', background: 'rgba(59,130,246,0.08)', marginBottom: 18 }}>
        <svg width="32" height="32" fill="none" stroke="#2563eb" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
      </span>
    ),
    title: "Find Caterers",
    desc: "Search for catering services by location, cuisine type, or event."
  },
  {
    icon: (
      <span style={{
        display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: 64, height: 64, borderRadius: '50%', background: 'rgba(16,185,129,0.08)', marginBottom: 18 }}>
        <svg width="32" height="32" fill="none" stroke="#10b981" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><rect x="3" y="4" width="18" height="16" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/></svg>
      </span>
    ),
    title: "Explore Menus",
    desc: "View detailed menus, pricing, and read authentic reviews."
  },
  {
    icon: (
      <span style={{
        display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: 64, height: 64, borderRadius: '50%', background: 'rgba(236,72,153,0.08)', marginBottom: 18 }}>
        <svg width="32" height="32" fill="none" stroke="#ec4899" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><rect x="3" y="4" width="18" height="16" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
      </span>
    ),
    title: "Request Quotes",
    desc: "Contact caterers and request personalized quotes."
  },
  {
    icon: (
      <span style={{
        display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: 64, height: 64, borderRadius: '50%', background: 'rgba(251,191,36,0.13)', marginBottom: 18 }}>
        <svg width="32" height="32" fill="none" stroke="#f59e42" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
      </span>
    ),
    title: "Book & Enjoy",
    desc: "Secure your booking and enjoy a stress-free experience."
  }
];

function HowItWorks() {
  return (
    <section style={{background: "#f6f8fb", padding: "64px 0"}}>
      <h2 style={{textAlign: "center", fontSize: "2.3rem", fontWeight: 700, marginBottom: 12, color: "#111"}}>How CaterMate Works</h2>
      <p style={{textAlign: "center", color: "#6b7280", marginBottom: 48, fontSize: "1.18rem", fontWeight: 500, maxWidth: 700, marginLeft: "auto", marginRight: "auto"}}>
        Finding and booking the perfect catering service has never been easier. Follow these simple steps to get started.
      </p>
      <div style={{
        display: "flex",
        justifyContent: "center",
        gap: "64px",
        flexWrap: "wrap"
      }}>
        {steps.map(step => (
          <div key={step.title} style={{width: 260, textAlign: "center", background: "none"}}>
            {step.icon}
            <h3 style={{fontWeight: 700, fontSize: "1.18rem", marginBottom: 10, color: "#111"}}>{step.title}</h3>
            <p style={{color: "#6b7280", fontSize: "1.08rem", fontWeight: 500, lineHeight: 1.6}}>{step.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default HowItWorks;
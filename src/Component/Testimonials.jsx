import React from "react";

const testimonials = [
  {
    name: "Sarah Johnson",
    text: "Amazing food and service!",
  },
  {
    name: "Mike Chen",
    text: "Perfect for our corporate event.",
  },
  {
    name: "Lisa Brown",
    text: "Highly recommend for weddings!",
  },
];

export default function Testimonials() {
  return (
    <section style={{ background: '#f6f8fb', padding: '48px 0 0 0' }}>
      <h2 style={{ textAlign: 'center', fontSize: 36, fontWeight: 700, marginBottom: 32, color: '#111' }}>What Our Clients Say</h2>
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        gap: 28,
        maxWidth: 1400,
        margin: '0 auto',
        overflowX: 'auto',
        flexWrap: 'nowrap',
        paddingBottom: 24
      }}>
        {testimonials.map((t, i) => (
          <div key={i} style={{ background: '#fff', borderRadius: 14, boxShadow: '0 2px 8px rgba(0,0,0,0.07)', padding: 24, width: 340, minWidth: 240, marginBottom: 0, display: 'flex', flexDirection: 'column', alignItems: 'flex-start', border: '1.5px solid #e5e7eb', flex: '0 0 340px' }}>
            <div style={{ marginBottom: 10 }}>
              {[...Array(5)].map((_, idx) => (
                <span key={idx} style={{ color: '#fbbf24', fontSize: 18 }}>★</span>
              ))}
            </div>
            <div style={{ fontSize: 17, color: '#222', marginBottom: 18, fontWeight: 500 }}>&quot;{t.text}&quot;</div>
            <div style={{ fontWeight: 700, fontSize: 16, color: '#111', marginTop: 'auto' }}>- {t.name}</div>
          </div>
        ))}
      </div>
    </section>
  );
} 
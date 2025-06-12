import React from "react";

const services = [
  {
    title: "Wedding Catering",
    price: "$50/person",
    img: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=400&h=300&fit=crop",
    rating: 4.8,
    reviews: 124,
  },
  {
    title: "Corporate Events",
    price: "$35/person",
    img: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=400&h=300&fit=crop",
    rating: 4.8,
    reviews: 124,
  },
  {
    title: "Birthday Parties",
    price: "$25/person",
    img: "https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?w=400&h=300&fit=crop",
    rating: 4.8,
    reviews: 124,
  },
];

export default function FeaturedServices() {
  return (
    <section style={{ maxWidth: 1400, margin: '0 auto', padding: '32px 16px 0 16px' }}>
      <h1 style={{ textAlign: 'center', fontSize: 44, fontWeight: 700, marginBottom: 36, color: '#111', marginTop: 0 }}>Featured Services</h1>
      <div style={{ display: 'flex', justifyContent: 'center', gap: 36, flexWrap: 'wrap' }}>
        {services.map((s, i) => (
          <div key={i} style={{ background: '#fff', border: '1.5px solid #e5e7eb', borderRadius: 18, boxShadow: '0 2px 8px rgba(0,0,0,0.04)', width: 370, overflow: 'hidden', display: 'flex', flexDirection: 'column', marginBottom: 28 }}>
            <div style={{ position: 'relative' }}>
              <img src={s.img} alt={s.title} style={{ width: '100%', height: 180, objectFit: 'cover' }} />
              <span style={{ position: 'absolute', top: 16, right: 16, background: '#fff7ed', color: '#f59e42', fontWeight: 700, fontSize: 17, borderRadius: 8, padding: '5px 18px' }}>Featured</span>
            </div>
            <div style={{ padding: 28, flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <div>
                <h2 style={{ fontSize: 24, fontWeight: 700, marginBottom: 10, color: '#111' }}>{s.title}</h2>
                <div style={{ fontSize: 20, fontWeight: 700, color: '#111', marginBottom: 10 }}>{s.price}</div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 10 }}>
                  {[...Array(5)].map((_, idx) => (
                    <span key={idx} style={{ color: '#fbbf24', fontSize: 18 }}>★</span>
                  ))}
                </div>
                <div style={{ color: '#6b7280', fontWeight: 500, fontSize: 15 }}>{s.rating} ({s.reviews})</div>
              </div>
              <button style={{ background: '#111827', color: '#fff', border: 'none', borderRadius: 8, padding: '14px 0', fontWeight: 600, fontSize: 19, marginTop: 18, cursor: 'pointer', width: '100%' }}>Book Now</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
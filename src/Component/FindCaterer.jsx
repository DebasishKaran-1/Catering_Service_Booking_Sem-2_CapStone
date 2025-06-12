import React from "react";

const services = [
  {
    title: "Wedding Catering",
    desc: "Complete wedding catering services with elegant presentation",
    price: "$50/person",
    img: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=400&h=300&fit=crop",
    rating: 4.8,
    reviews: 124,
  },
  {
    title: "Corporate Events",
    desc: "Professional catering for business meetings and conferences",
    price: "$35/person",
    img: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=400&h=300&fit=crop",
    rating: 4.8,
    reviews: 124,
  },
  {
    title: "Birthday Parties",
    desc: "Custom catering for birthdays, anniversaries, and celebrations",
    price: "$25/person",
    img: "https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?w=400&h=300&fit=crop",
    rating: 4.8,
    reviews: 124,
  },
];

const process = [
  { step: 1, title: "Consultation", desc: "Discuss your needs and preferences" },
  { step: 2, title: "Menu Planning", desc: "Create a custom menu for your event" },
  { step: 3, title: "Booking", desc: "Confirm dates and finalize details" },
  { step: 4, title: "Service", desc: "Professional catering on your event day" },
];

const faqs = [
  {
    q: "How far in advance should I book?",
    a: "We recommend booking at least 2-3 weeks in advance for best availability.",
  },
  {
    q: "Do you accommodate dietary restrictions?",
    a: "Yes, we offer vegetarian, vegan, gluten-free, and other dietary options.",
  },
  {
    q: "What's included in the catering service?",
    a: "Our service includes food preparation, setup, serving, and cleanup.",
  },
];

export default function FindCaterer() {
  return (
    <div style={{ background: '#fff', minHeight: '100vh', fontFamily: 'Inter, sans-serif' }}>
      {/* Featured Services Section */}
      <section style={{ maxWidth: 1400, margin: '0 auto', padding: '48px 16px 0 16px' }}>
        <h1 style={{ textAlign: 'center', fontSize: 40, fontWeight: 700, marginBottom: 40, color: '#111' }}>Featured Services</h1>
        <div style={{ display: 'flex', justifyContent: 'center', gap: 40, flexWrap: 'wrap' }}>
          {services.map((s, i) => (
            <div key={i} style={{ background: '#fff', border: '1.5px solid #e5e7eb', borderRadius: 16, boxShadow: '0 2px 8px rgba(0,0,0,0.04)', width: 380, overflow: 'hidden', display: 'flex', flexDirection: 'column', marginBottom: 24 }}>
              <div style={{ position: 'relative' }}>
                <img src={s.img} alt={s.title} style={{ width: '100%', height: 180, objectFit: 'cover' }} />
                <span style={{ position: 'absolute', top: 16, right: 16, background: '#fff7ed', color: '#f59e42', fontWeight: 700, fontSize: 16, borderRadius: 8, padding: '4px 16px' }}>Featured</span>
              </div>
              <div style={{ padding: 28, flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <div>
                  <h2 style={{ fontSize: 24, fontWeight: 700, marginBottom: 8, color: '#111' }}>{s.title}</h2>
                  <div style={{ fontSize: 22, fontWeight: 700, color: '#111', marginBottom: 8 }}>{s.price}</div>
                  <div style={{ color: '#222', fontSize: 16, marginBottom: 12 }}>{s.desc}</div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 8 }}>
                    {[...Array(5)].map((_, idx) => (
                      <span key={idx} style={{ color: '#fbbf24', fontSize: 20 }}>★</span>
                    ))}
                  </div>
                  <div style={{ color: '#6b7280', fontWeight: 500, fontSize: 16 }}>{s.rating} ({s.reviews})</div>
                </div>
                <button style={{ background: '#111827', color: '#fff', border: 'none', borderRadius: 8, padding: '14px 0', fontWeight: 600, fontSize: 18, marginTop: 18, cursor: 'pointer', width: '100%' }}>Book Now</button>
              </div>
            </div>
          ))}
        </div>
      </section>
      {/* Process Section */}
      <section style={{ background: '#f6f8fb', marginTop: 64, padding: '48px 0' }}>
        <h2 style={{ textAlign: 'center', fontSize: 36, fontWeight: 700, marginBottom: 40, color: '#111' }}>Our Process</h2>
        <div style={{ display: 'flex', justifyContent: 'center', gap: 40, flexWrap: 'nowrap', maxWidth: 1400, margin: '0 auto' }}>
          {process.map((p, i) => (
            <div key={i} style={{ background: '#fff', borderRadius: 16, padding: 32, width: 320, boxShadow: '0 2px 8px rgba(0,0,0,0.04)', display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: 24 }}>
              <div style={{ width: 48, height: 48, borderRadius: '50%', background: '#111827', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, fontSize: 22, marginBottom: 16 }}>{p.step}</div>
              <h3 style={{ fontSize: 22, fontWeight: 700, marginBottom: 8, color: '#111', textAlign: 'center' }}>{p.title}</h3>
              <p style={{ fontSize: 16, color: '#333', textAlign: 'center' }}>{p.desc}</p>
            </div>
          ))}
        </div>
      </section>
      {/* FAQ Section */}
      <section style={{ maxWidth: 1100, margin: '0 auto', padding: '48px 16px 0 16px' }}>
        <h2 style={{ textAlign: 'center', fontSize: 36, fontWeight: 700, marginBottom: 40, color: '#111' }}>Frequently Asked Questions</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 24, alignItems: 'center' }}>
          {faqs.map((faq, i) => (
            <div key={i} style={{ background: '#fff', border: '1.5px solid #e5e7eb', borderRadius: 12, padding: 28, boxShadow: '0 2px 8px rgba(0,0,0,0.04)', width: '100%', maxWidth: 900 }}>
              <p style={{ fontWeight: 700, fontSize: 18, marginBottom: 8, color: '#111' }}>{faq.q}</p>
              <p style={{ fontSize: 16, color: '#333', margin: 0 }}>{faq.a}</p>
            </div>
          ))}
        </div>
      </section>
      {/* Footer */}
      <footer style={{ background: '#111827', color: '#fff', textAlign: 'center', padding: '32px 0', marginTop: 64 }}>
        <div style={{ fontSize: 16, fontWeight: 500, marginBottom: 8 }}>© 2024 Delicious Catering. All rights reserved.</div>
        <div style={{ fontSize: 15 }}>Phone: (555) 123-4567 | Email: info@deliciouscatering.com</div>
      </footer>
    </div>
  );
} 
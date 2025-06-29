import React from "react";

export default function OrderNow() {
  return (
    <div style={{ background: '#fff', minHeight: '100vh', fontFamily: 'Inter, sans-serif' }}>
      <section style={{ maxWidth: 700, margin: '0 auto', padding: '24px 16px 0 16px' }}>
        <h1 style={{ textAlign: 'center', fontSize: 40, fontWeight: 700, marginBottom: 32, color: '#111', marginTop: 0 }}>Get Your Quote</h1>
        <div style={{ textAlign: 'center', color: '#6b7280', fontSize: 20, marginBottom: 48, marginTop: 0 }}>
          Fill out the form below and we'll get back to you with a personalized quote for your event.
        </div>
        <div style={{ background: '#fff', border: '1.5px solid #e5e7eb', borderRadius: 16, boxShadow: '0 2px 8px rgba(0,0,0,0.04)', padding: 40, maxWidth: 600, margin: '0 auto' }}>
          <h2 style={{ fontSize: 28, fontWeight: 700, marginBottom: 24, color: '#111' }}>Quote Request Form</h2>
          <form style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
            <label style={labelStyle}>Full Name
              <input type="text" required style={inputStyle} placeholder="Your Name" />
            </label>
            <label style={labelStyle}>Email
              <input type="email" required style={inputStyle} placeholder="Email Address" />
            </label>
            <label style={labelStyle}>Phone Number
              <input type="tel" required style={inputStyle} placeholder="Phone Number" />
            </label>
            <label style={labelStyle}>Event Type
              <input type="text" placeholder="Wedding, Corporate Event, Birthday Party, etc." required style={inputStyle} />
            </label>
            <label style={labelStyle}>Event Date
              <input type="date" required style={inputStyle} placeholder="dd/mm/yyyy" />
            </label>
            <label style={labelStyle}>Number of Guests
              <input type="number" required style={inputStyle} placeholder="Number of Guests" />
            </label>
            <label style={labelStyle}>Additional Details
              <textarea placeholder="Tell us more about your event, dietary requirements, budget, etc." rows={3} style={{ ...inputStyle, resize: 'vertical', minHeight: 60, height: 'auto' }} />
            </label>
            <button type="submit" style={{ background: '#FF8800', color: '#fff', border: 'none', borderRadius: 12, padding: '18px 0', fontWeight: 700, fontSize: 22, marginTop: 8, cursor: 'pointer' }}>
              Submit Quote Request
            </button>
            <style>{`
              input::placeholder, textarea::placeholder {
                font-size: 13px;
                color: #94a3b8;
                opacity: 1;
                line-height: 20px;
              }
              input, textarea {
                vertical-align: middle;
              }
            `}</style>
          </form>
        </div>
      </section>
      <footer style={{ background: '#111827', color: '#fff', textAlign: 'center', padding: '32px 0', marginTop: 64 }}>
        <div style={{ fontSize: 16, fontWeight: 500, marginBottom: 8 }}>© 2024 Delicious Catering. All rights reserved.</div>
        <div style={{ fontSize: 15 }}>Phone: (555) 123-4567 | Email: info@deliciouscatering.com</div>
      </footer>
    </div>
  );
}

const inputStyle = {
  padding: '12px 16px',
  borderRadius: 8,
  border: '1.5px solid #e5e7eb',
  fontSize: 15,
  fontFamily: 'inherit',
  outline: 'none',
  background: '#f9fafb',
  marginBottom: 0,
  height: 44,
  lineHeight: '20px',
  boxSizing: 'border-box',
};

const labelStyle = {
  color: '#111',
  fontWeight: 600,
  fontSize: 17,
  display: 'flex',
  flexDirection: 'column',
  gap: 0,
}; 
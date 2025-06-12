import React from "react";

export default function Contact() {
  return (
    <div style={{ background: '#fff', minHeight: '100vh', fontFamily: 'Inter, sans-serif' }}>
      <section style={{ maxWidth: 1400, margin: '0 auto', padding: '48px 16px 0 16px' }}>
        <h1 style={{ textAlign: 'center', fontSize: 40, fontWeight: 700, marginBottom: 40, color: '#111' }}>Contact Us</h1>
        <div style={{ display: 'flex', gap: 40, justifyContent: 'center', alignItems: 'flex-start', flexWrap: 'wrap' }}>
          {/* Request a Quote Form */}
          <div style={{ background: '#fff', border: '1.5px solid #e5e7eb', borderRadius: 16, boxShadow: '0 2px 8px rgba(0,0,0,0.04)', padding: 40, width: 480, minWidth: 320, marginBottom: 32 }}>
            <h2 style={{ fontSize: 28, fontWeight: 700, marginBottom: 24, color: '#111' }}>Request a Quote</h2>
            <form style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
              <input type="text" placeholder="Your Name" required style={inputStyle} />
              <input type="email" placeholder="Email Address" required style={inputStyle} />
              <input type="tel" placeholder="Phone Number" required style={inputStyle} />
              <input type="date" placeholder="dd/mm/yyyy" required style={inputStyle} />
              <input type="number" placeholder="Number of Guests" required style={inputStyle} />
              <textarea placeholder="Tell us about your event..." rows={3} style={{ ...inputStyle, resize: 'vertical', minHeight: 60 }} />
              <button type="submit" style={{ background: '#111827', color: '#fff', border: 'none', borderRadius: 8, padding: '16px 0', fontWeight: 700, fontSize: 18, marginTop: 8, cursor: 'pointer' }}>Request Quote</button>
            </form>
          </div>
          {/* Right Side: Location and Contact Info */}
          <div style={{ flex: 1, minWidth: 320, display: 'flex', flexDirection: 'column', gap: 32 }}>
            {/* Our Location */}
            <div style={{ background: '#fff', border: '1.5px solid #e5e7eb', borderRadius: 16, boxShadow: '0 2px 8px rgba(0,0,0,0.04)', padding: 32 }}>
              <h2 style={{ fontSize: 24, fontWeight: 700, marginBottom: 18, color: '#111' }}>Our Location</h2>
              <div style={{ background: '#f6f8fb', borderRadius: 12, padding: 32, minHeight: 120, display: 'flex', flexDirection: 'column', alignItems: 'flex-start', justifyContent: 'center' }}>
                <span style={{ color: '#e74c3c', fontSize: 22, marginBottom: 6 }}>📍</span>
                <span style={{ color: '#222', fontWeight: 600, fontSize: 17 }}>Interactive Map</span>
                <span style={{ color: '#444', fontSize: 16, marginTop: 2 }}>123 Catering Street<br />Food City, FC 12345</span>
              </div>
            </div>
            {/* Get in Touch */}
            <div style={{ background: '#fff', border: '1.5px solid #e5e7eb', borderRadius: 16, boxShadow: '0 2px 8px rgba(0,0,0,0.04)', padding: 32 }}>
              <h2 style={{ fontSize: 24, fontWeight: 700, marginBottom: 18, color: '#111' }}>Get in Touch</h2>
              <div style={{ color: '#111', fontWeight: 600, marginBottom: 4 }}>Phone</div>
              <div style={{ color: '#222', marginBottom: 12 }}>(555) 123-4567</div>
              <div style={{ color: '#111', fontWeight: 600, marginBottom: 4 }}>Email</div>
              <div style={{ color: '#222', marginBottom: 12 }}>info@deliciouscatering.com</div>
              <div style={{ color: '#111', fontWeight: 600, marginBottom: 4 }}>Address</div>
              <div style={{ color: '#222', marginBottom: 12 }}>123 Catering Street<br />Food City, FC 12345</div>
              <div style={{ color: '#111', fontWeight: 600, marginBottom: 4 }}>Business Hours</div>
              <div style={{ color: '#222' }}>
                Monday – Friday: 9 AM – 6 PM<br />
                Saturday: 10 AM – 4 PM<br />
                Sunday: Closed
              </div>
            </div>
          </div>
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
  padding: '14px 16px',
  borderRadius: 8,
  border: '1.5px solid #e5e7eb',
  fontSize: 16,
  fontFamily: 'inherit',
  outline: 'none',
  background: '#f9fafb',
  marginBottom: 0,
}; 
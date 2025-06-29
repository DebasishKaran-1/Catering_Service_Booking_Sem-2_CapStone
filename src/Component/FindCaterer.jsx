import React, { useState, useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";

const services = [
  {
    title: "Wedding Catering",
    desc: "Complete wedding catering services with elegant presentation",
    price: "₹1999/person",
    img: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=400&h=300&fit=crop",
    rating: 4.8,
    reviews: 124,
    tag: "Wedding"
  },
  {
    title: "Corporate Events",
    desc: "Professional catering for business meetings and conferences",
    price: "₹1399/person",
    img: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=400&h=300&fit=crop",
    rating: 4.8,
    reviews: 124,
    tag: "Corporate"
  },
  {
    title: "Birthday Parties",
    desc: "Custom catering for birthdays, anniversaries, and celebrations",
    price: "₹999/person",
    img: "https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?w=400&h=300&fit=crop",
    rating: 4.8,
    reviews: 124,
    tag: "Birthday"
  },
  {
    title: "Holiday Catering",
    desc: "Special holiday menus for Christmas, Thanksgiving, and more",
    price: "₹1599/person",
    img: "https://images.unsplash.com/photo-1544025162-d76694265947?w=400&h=300&fit=crop",
    rating: 4.9,
    reviews: 89,
    tag: "Vegan"
  },
  {
    title: "BBQ & Grill",
    desc: "Outdoor BBQ and grilling services for summer events",
    price: "₹1199/person",
    img: "https://images.unsplash.com/photo-1558030006-450675393462?w=400&h=300&fit=crop",
    rating: 4.7,
    reviews: 156,
    tag: "BBQ"
  },
  {
    title: "Fine Dining",
    desc: "Upscale fine dining experience for special occasions",
    price: "₹3199/person",
    img: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=400&h=300&fit=crop",
    rating: 4.9,
    reviews: 67,
    tag: "FineDining"
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
  const [currentPage, setCurrentPage] = useState(1);
  const [highlighted, setHighlighted] = useState(null);
  const itemsPerPage = 3;
  const totalPages = Math.ceil(services.length / itemsPerPage);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentServices = services.slice(indexOfFirstItem, indexOfLastItem);
  const location = useLocation();
  const cardRefs = useRef([]);

  // Map tag to service index
  const tagToIndex = {
    Wedding: 0,
    Corporate: 1,
    Birthday: 2,
    BBQ: 4,
    Vegan: 3,
  };

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const highlight = params.get("highlight");
    if (highlight && tagToIndex[highlight] !== undefined) {
      const idx = tagToIndex[highlight];
      setHighlighted(highlight);
      // Set correct page
      setCurrentPage(Math.floor(idx / itemsPerPage) + 1);
      // Scroll to card after page is set
      setTimeout(() => {
        const card = cardRefs.current[idx % itemsPerPage];
        if (card) {
          card.scrollIntoView({ behavior: "smooth", block: "center" });
        }
      }, 300);
    } else {
      setHighlighted(null);
    }
    // eslint-disable-next-line
  }, [location.search]);

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) setCurrentPage(page);
  };

  return (
    <div style={{ background: '#fff', minHeight: '100vh', fontFamily: 'Inter, sans-serif' }}>
      {/* Featured Services Section */}
      <section style={{ maxWidth: 1400, margin: '0 auto', padding: '48px 16px 0 16px' }}>
        <h1 style={{ textAlign: 'center', fontSize: 40, fontWeight: 700, marginBottom: 40, color: '#111' }}>Featured Services</h1>
        <div style={{ display: 'flex', justifyContent: 'center', gap: 40, flexWrap: 'wrap' }}>
          {currentServices.map((s, i) => {
            // Find the global index for highlighting
            const globalIdx = (currentPage - 1) * itemsPerPage + i;
            const isHighlighted = highlighted && tagToIndex[highlighted] === globalIdx;
            return (
              <div
                key={i}
                ref={el => cardRefs.current[i] = el}
                style={{
                  background: '#fff',
                  border: isHighlighted ? '2.5px solid #FF8800' : '1.5px solid #e5e7eb',
                  boxShadow: isHighlighted ? '0 0 0 4px rgba(255,136,0,0.10)' : '0 2px 8px rgba(0,0,0,0.04)',
                  borderRadius: 16,
                  width: 380,
                  overflow: 'hidden',
                  display: 'flex',
                  flexDirection: 'column',
                  marginBottom: 24,
                  transition: 'border 0.2s, box-shadow 0.2s',
                }}
              >
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
            );
          })}
        </div>
        {/* Pagination Bar */}
        {totalPages > 1 && (
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 18, margin: '28px 0 0 0' }}>
            {/* Previous */}
            <button
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
              style={{
                display: 'flex', alignItems: 'center', gap: 4,
                background: 'none', border: 'none', color: currentPage === 1 ? '#9ca3af' : '#111827', fontWeight: 600, fontSize: 18, cursor: currentPage === 1 ? 'not-allowed' : 'pointer', outline: 'none', padding: '0 6px',
              }}
            >
              <span style={{ fontSize: 18, marginRight: 1 }}>{'\u2039'}</span> Previous
            </button>
            {/* Page Numbers */}
            {[...Array(totalPages)].map((_, idx) => (
              <button
                key={idx}
                onClick={() => handlePageChange(idx + 1)}
                style={{
                  minWidth: 36,
                  height: 36,
                  borderRadius: 8,
                  border: idx + 1 === currentPage ? '1.5px solid #e5e7eb' : 'none',
                  background: idx + 1 === currentPage ? '#fff' : 'none',
                  color: idx + 1 === currentPage ? '#111827' : '#222',
                  fontWeight: idx + 1 === currentPage ? 600 : 400,
                  fontSize: 18,
                  boxShadow: idx + 1 === currentPage ? '0 1px 4px rgba(0,0,0,0.03)' : 'none',
                  outline: 'none',
                  cursor: 'pointer',
                  margin: '0 2px',
                  transition: 'border 0.15s, box-shadow 0.15s',
                }}
              >
                {idx + 1}
              </button>
            ))}
            {/* Next */}
            <button
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
              style={{
                display: 'flex', alignItems: 'center', gap: 4,
                background: 'none', border: 'none', color: currentPage === totalPages ? '#9ca3af' : '#111827', fontWeight: 600, fontSize: 18, cursor: currentPage === totalPages ? 'not-allowed' : 'pointer', outline: 'none', padding: '0 6px',
              }}
            >
              Next <span style={{ fontSize: 18, marginLeft: 1 }}>{'\u203A'}</span>
            </button>
          </div>
        )}
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
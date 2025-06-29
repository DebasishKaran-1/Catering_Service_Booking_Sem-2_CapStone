import React from "react";
import { useNavigate } from 'react-router-dom';

const appetizers = [
  {
    id: "bruschetta",
    name: "Bruschetta",
    price: "₹299",
    desc: "Fresh tomatoes, basil, mozzarella on toasted bread",
    img: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=600&q=80",
    category: "Appetizers",
    ingredients: ["Fresh tomatoes", "Basil", "Mozzarella", "Garlic", "Olive oil"],
    serving: "2-3 pieces",
  },
  {
    id: "shrimp-cocktail",
    name: "Shrimp Cocktail",
    price: "₹449",
    desc: "Jumbo shrimp with cocktail sauce",
    img: "https://images.unsplash.com/photo-1502741338009-cac2772e18bc?auto=format&fit=crop&w=600&q=80",
    category: "Appetizers",
    ingredients: ["Jumbo shrimp", "Cocktail sauce", "Lemon"],
    serving: "5-6 pieces",
  },
  {
    id: "cheese-board",
    name: "Cheese Board",
    price: "₹599",
    desc: "Selection of artisan cheeses",
    img: "https://images.unsplash.com/photo-1486297678162-eb2a19b0a32d?w=300&h=200&fit=crop",
    category: "Appetizers",
    ingredients: ["Artisan cheeses", "Crackers", "Fruit", "Nuts"],
    serving: "Serves 2-4",
  },
];

const desserts = [
  {
    id: "tiramisu",
    name: "Tiramisu",
    price: "₹299",
    desc: "Classic Italian dessert",
    img: "https://images.unsplash.com/photo-1572695157366-5e585ab2b69f?w=300&h=200&fit=crop",
    category: "Desserts",
    ingredients: ["Mascarpone", "Espresso", "Ladyfingers", "Cocoa powder"],
    serving: "1 slice",
  },
  {
    id: "chocolate-cake",
    name: "Chocolate Cake",
    price: "₹249",
    desc: "Rich chocolate layer cake",
    img: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=300&h=200&fit=crop",
    category: "Desserts",
    ingredients: ["Chocolate", "Flour", "Eggs", "Sugar", "Butter"],
    serving: "1 slice",
  },
  {
    id: "fruit-tart",
    name: "Fresh Fruit Tart",
    price: "₹229",
    desc: "Seasonal fruits on pastry",
    img: "https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?w=300&h=200&fit=crop",
    category: "Desserts",
    ingredients: ["Pastry", "Custard", "Seasonal fruits"],
    serving: "1 tart",
  },
];

const packages = [
  {
    title: "Wedding Package",
    price: "₹2999/person",
    desc: "3-course meal, champagne toast, wedding cake",
  },
  {
    title: "Corporate Package",
    price: "₹1799/person",
    desc: "Lunch buffet, beverages, professional service",
  },
  {
    title: "Party Package",
    price: "₹1399/person",
    desc: "Appetizers, main course, dessert, soft drinks",
  },
];

const dietary = [
  { label: "Vegetarian", desc: "Plant-based options available" },
  { label: "Vegan", desc: "Completely plant-based meals" },
  { label: "Gluten-Free", desc: "Safe options for celiac guests" },
  { label: "Keto", desc: "Low-carb, high-fat options" },
];

const cardStyle = {
  background: '#fff',
  border: '1.5px solid #e5e7eb',
  borderRadius: 16,
  boxShadow: '0 2px 8px rgba(0,0,0,0.04)',
  padding: 0,
  overflow: 'hidden',
  width: 370,
  marginBottom: 24,
  display: 'flex',
  flexDirection: 'column',
};

export default function Menu() {
  const navigate = useNavigate();
  return (
    <div style={{ background: '#fff', minHeight: '100vh', fontFamily: 'Inter, sans-serif' }}>
      <section style={{ maxWidth: 1400, margin: '0 auto', padding: '48px 16px 0 16px' }}>
        <h1 style={{ textAlign: 'center', fontSize: 40, fontWeight: 700, marginBottom: 40, color: '#111' }}>Our Menu</h1>
        <h2 style={{ fontSize: 32, fontWeight: 700, marginBottom: 24, color: '#111' }}>Appetizers</h2>
        <div style={{ display: 'flex', gap: 32, flexWrap: 'wrap', justifyContent: 'center', marginBottom: 48 }}>
          {appetizers.map((item, i) => (
            <div key={i} style={cardStyle}>
              <img src={item.img} alt={item.name} style={{ width: '100%', height: 220, objectFit: 'cover', borderTopLeftRadius: 16, borderTopRightRadius: 16 }} />
              <div style={{ padding: 24 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 8 }}>
                  <span style={{ fontWeight: 700, fontSize: 20, color: '#111' }}>{item.name}</span>
                  <span style={{ fontWeight: 700, fontSize: 18, color: '#111' }}>{item.price}</span>
                </div>
                <div style={{ color: '#222', fontSize: 16, marginBottom: 16 }}>{item.desc}</div>
                <span onClick={() => navigate(`/menu/${item.id}`)} style={{ color: '#FF8800', fontWeight: 600, fontSize: 18, cursor: 'pointer', display: 'inline-block' }}>View Details &rarr;</span>
              </div>
            </div>
          ))}
        </div>
        <h2 style={{ fontSize: 32, fontWeight: 700, marginBottom: 24, color: '#111' }}>Desserts</h2>
        <div style={{ display: 'flex', gap: 32, flexWrap: 'wrap', justifyContent: 'center', marginBottom: 48 }}>
          {desserts.map((item, i) => (
            <div key={i} style={cardStyle}>
              <img src={item.img} alt={item.name} style={{ width: '100%', height: 220, objectFit: 'cover', borderTopLeftRadius: 16, borderTopRightRadius: 16 }} />
              <div style={{ padding: 24 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 8 }}>
                  <span style={{ fontWeight: 700, fontSize: 20, color: '#111' }}>{item.name}</span>
                  <span style={{ fontWeight: 700, fontSize: 18, color: '#111' }}>{item.price}</span>
                </div>
                <div style={{ color: '#222', fontSize: 16, marginBottom: 16 }}>{item.desc}</div>
                <span onClick={() => navigate(`/menu/${item.id}`)} style={{ color: '#FF8800', fontWeight: 600, fontSize: 18, cursor: 'pointer', display: 'inline-block' }}>View Details &rarr;</span>
              </div>
            </div>
          ))}
        </div>
      </section>
      <section style={{ background: '#f6f8fb', marginTop: 32, padding: '48px 0' }}>
        <h2 style={{ textAlign: 'center', fontSize: 36, fontWeight: 700, marginBottom: 40, color: '#111' }}>Special Packages</h2>
        <div style={{ display: 'flex', justifyContent: 'center', gap: 40, flexWrap: 'nowrap', maxWidth: 1400, margin: '0 auto' }}>
          {packages.map((p, i) => (
            <div key={i} style={{ background: '#fff', border: '1.5px solid #e5e7eb', borderRadius: 16, padding: 32, width: 370, boxShadow: '0 2px 8px rgba(0,0,0,0.04)', display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: 24 }}>
              <h3 style={{ fontSize: 24, fontWeight: 700, marginBottom: 8, color: '#111', textAlign: 'center' }}>{p.title}</h3>
              <div style={{ fontWeight: 700, fontSize: 22, color: '#111', marginBottom: 8, textAlign: 'center' }}>{p.price}</div>
              <div style={{ color: '#222', fontSize: 16, textAlign: 'center' }}>{p.desc}</div>
            </div>
          ))}
        </div>
      </section>
      <section style={{ maxWidth: 1400, margin: '0 auto', padding: '48px 16px 0 16px' }}>
        <h2 style={{ textAlign: 'center', fontSize: 36, fontWeight: 700, marginBottom: 40, color: '#111' }}>Dietary Options</h2>
        <div style={{ display: 'flex', justifyContent: 'center', gap: 40, flexWrap: 'nowrap', maxWidth: 1400, margin: '0 auto' }}>
          {dietary.map((d, i) => (
            <div key={i} style={{ background: '#fff', border: '1.5px solid #e5e7eb', borderRadius: 16, padding: 32, width: 320, boxShadow: '0 2px 8px rgba(0,0,0,0.04)', display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: 24 }}>
              <span style={{ background: '#f6f8fb', color: '#111827', fontWeight: 700, fontSize: 16, borderRadius: 8, padding: '4px 16px', marginBottom: 12 }}>{d.label}</span>
              <div style={{ color: '#222', fontSize: 16, textAlign: 'center' }}>{d.desc}</div>
            </div>
          ))}
        </div>
      </section>
      <footer style={{ background: '#111827', color: '#fff', textAlign: 'center', padding: '32px 0', marginTop: 64 }}>
        <div style={{ fontSize: 16, fontWeight: 500, marginBottom: 8 }}>© 2024 Delicious Catering. All rights reserved.</div>
        <div style={{ fontSize: 15 }}>Phone: (555) 123-4567 | Email: info@deliciouscatering.com</div>
      </footer>
    </div>
  );
} 
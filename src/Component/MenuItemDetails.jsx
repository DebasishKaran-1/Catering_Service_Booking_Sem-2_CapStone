import React from "react";
import { useParams, useNavigate } from "react-router-dom";

const menuData = [
  // Appetizers
  {
    id: "bruschetta",
    name: "Bruschetta",
    price: "$8",
    desc: "Fresh tomatoes, basil, mozzarella on toasted bread",
    img: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=600&q=80",
    category: "Appetizers",
    ingredients: ["Fresh tomatoes", "Basil", "Mozzarella", "Garlic", "Olive oil"],
    serving: "2-3 pieces",
  },
  {
    id: "shrimp-cocktail",
    name: "Shrimp Cocktail",
    price: "$12",
    desc: "Jumbo shrimp with cocktail sauce",
    img: "https://images.unsplash.com/photo-1502741338009-cac2772e18bc?auto=format&fit=crop&w=600&q=80",
    category: "Appetizers",
    ingredients: ["Jumbo shrimp", "Cocktail sauce", "Lemon"],
    serving: "5-6 pieces",
  },
  {
    id: "cheese-board",
    name: "Cheese Board",
    price: "$15",
    desc: "Selection of artisan cheeses",
    img: "https://images.unsplash.com/photo-1486297678162-eb2a19b0a32d?w=300&h=200&fit=crop",
    category: "Appetizers",
    ingredients: ["Artisan cheeses", "Crackers", "Fruit", "Nuts"],
    serving: "Serves 2-4",
  },
  // Desserts
  {
    id: "tiramisu",
    name: "Tiramisu",
    price: "$8",
    desc: "Classic Italian dessert",
    img: "https://images.unsplash.com/photo-1572695157366-5e585ab2b69f?w=300&h=200&fit=crop",
    category: "Desserts",
    ingredients: ["Mascarpone", "Espresso", "Ladyfingers", "Cocoa powder"],
    serving: "1 slice",
  },
  {
    id: "chocolate-cake",
    name: "Chocolate Cake",
    price: "$7",
    desc: "Rich chocolate layer cake",
    img: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=300&h=200&fit=crop",
    category: "Desserts",
    ingredients: ["Chocolate", "Flour", "Eggs", "Sugar", "Butter"],
    serving: "1 slice",
  },
  {
    id: "fruit-tart",
    name: "Fresh Fruit Tart",
    price: "$6",
    desc: "Seasonal fruits on pastry",
    img: "https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?w=300&h=200&fit=crop",
    category: "Desserts",
    ingredients: ["Pastry", "Custard", "Seasonal fruits"],
    serving: "1 tart",
  },
];

export default function MenuItemDetails() {
  const { itemId } = useParams();
  const navigate = useNavigate();
  const item = menuData.find((m) => m.id === itemId);

  if (!item) return <div style={{ padding: 40, textAlign: 'center' }}>Menu item not found.</div>;

  return (
    <div style={{ background: '#fff', minHeight: '100vh', fontFamily: 'Inter, sans-serif', padding: '40px 0' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 16px' }}>
        <div style={{ marginBottom: 24 }}>
          <span
            onClick={() => navigate('/menu')}
            style={{ color: '#FF8800', fontWeight: 600, fontSize: 18, cursor: 'pointer', display: 'inline-block' }}
          >
            &larr; Back to Menu
          </span>
        </div>
        <div style={{ display: 'flex', gap: 40, alignItems: 'flex-start', flexWrap: 'wrap' }}>
          {/* Left: Image */}
          <div style={{ flex: '0 0 380px', maxWidth: 420 }}>
            <img
              src={item.img}
              alt={item.name}
              style={{ width: '100%', borderRadius: 16, objectFit: 'cover', maxHeight: 350 }}
            />
          </div>
          {/* Right: Details */}
          <div style={{ flex: 1, minWidth: 320, background: '#fff', border: '1.5px solid #e5e7eb', borderRadius: 16, boxShadow: '0 2px 8px rgba(0,0,0,0.04)', padding: 40 }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 8 }}>
              <h1 style={{ fontSize: 36, fontWeight: 700, color: '#111', margin: 0 }}>{item.name}</h1>
              <span style={{ color: '#FF8800', fontWeight: 700, fontSize: 28 }}>{item.price}</span>
            </div>
            <div style={{ color: '#6b7280', fontWeight: 600, fontSize: 18, marginBottom: 16 }}>{item.category}</div>
            <div style={{ fontSize: 20, color: '#222', marginBottom: 18 }}>{item.desc}</div>
            <div style={{ fontWeight: 700, marginBottom: 6 }}>Ingredients:</div>
            <ul style={{ margin: 0, marginBottom: 16, paddingLeft: 20, color: '#222', fontSize: 17 }}>
              {item.ingredients.map((ing, i) => (
                <li key={i}>{ing}</li>
              ))}
            </ul>
            <div style={{ fontWeight: 700, marginBottom: 2 }}>Serving Size:</div>
            <div style={{ marginBottom: 24, fontSize: 17 }}>{item.serving}</div>
            <button 
              style={{ background: '#FF8800', color: '#fff', border: 'none', borderRadius: 8, padding: '16px 0', fontWeight: 600, fontSize: 18, width: '100%', cursor: 'pointer' }}
              onClick={() => navigate('/order-now')}
            >
              Order This Item
            </button>
          </div>
        </div>
      </div>
    </div>
  );
} 
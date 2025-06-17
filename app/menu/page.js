'use client';
import { useState } from 'react';

const foodItems = [
  { name: 'Veg Burger', description: 'Crispy patty...', price: '₹99', image: '/images/burger.jpg' },
  { name: 'Cheese Pizza', description: 'Mozzarella & herbs...', price: '₹150', image: '/images/pizza.jpg' },
  { name: 'Chicken Biryani', description: 'Hyderabadi style...', price: '₹249', image: '/images/biryani.jpg' },
  { name: 'Dosa', description: 'South Indian special...', price: '₹50', image: '/images/dosa.jpg' },
  {name:'South Indian Meal',description:'South Indian meals with variety of curry... ',price:'₹200',image:'/images/meals.jpg'},
  {name:'Poori',description:'Fuffy poori with potato gravy... ',price:'₹60',image:'/images/poori.jpg'},
  
];

export default function MenuPage() {
  const [cart, setCart] = useState([]);
  const addToCart = item => {
    setCart([...cart, item]);
    alert(`${item.name} added to cart!`);
  };

  return (
    <div className="menu-container">
      <h2 className="menu-title">🍽️ Our Menu</h2>
      <div className="menu-grid">
        {foodItems.map((item,i)=>(
          <div className="menu-item" key={i}>
            <img src={item.image} alt={item.name} />
            <div className="menu-body">
              <h4>{item.name}</h4>
              <p>{item.description}</p>
            </div>
            <div className="menu-footer">
              <span className="price">{item.price}</span>
              <button className="add-btn" onClick={()=> addToCart(item)}>+ Add</button>
            </div>
          </div>
        ))}
      </div>
      <footer className="footer">© 2025 ZODISH</footer>
    </div>
  );
}

const styles = {
  page: {
    padding: '40px 20px',
    fontFamily: 'Arial, sans-serif',
    backgroundColor: '#fdfdfd',
  },
  heading: {
    textAlign: 'center',
    fontSize: '32px',
    marginBottom: '40px',
    color: '#e23744',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
    gap: '30px',
    maxWidth: '1200px',
    margin: '0 auto',
  },
  card: {
    border: '1px solid #eee',
    borderRadius: '12px',
    boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
    padding: '20px',
    textAlign: 'center',
    backgroundColor: '#fff',
    transition: 'transform 0.3s',
  },
  image: {
    width: '100%',
    height: '180px',
    objectFit: 'cover',
    borderRadius: '10px',
  },
  title: {
    margin: '10px 0 6px',
    fontSize: '20px',
    fontWeight: '600',
  },
  description: {
    fontSize: '14px',
    color: '#555',
    marginBottom: '8px',
  },
  price: {
    fontSize: '16px',
    fontWeight: 'bold',
    color: '#333',
    marginBottom: '12px',
  },
  button: {
    backgroundColor: '#e23744',
    color: '#fff',
    border: 'none',
    padding: '10px 16px',
    borderRadius: '8px',
    cursor: 'pointer',
    fontWeight: '500',
    transition: 'background 0.3s',
  }
};

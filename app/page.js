'use client';
import { DEFAULT_SANS_SERIF_FONT, DEFAULT_SERIF_FONT } from 'next/dist/shared/lib/constants';
import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <section className="hero">
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1>Delicious Food Delivered Fast!</h1>
          <p>Your favourite restaurants, just a tap away.</p>
          <Link href="/menu"><button className="cta">Order Now</button></Link>
        </div>
      </section>

      <section className="features">
        <div className="item">
          <h3>Variety</h3>
          <p>Choose from a wide range of cuisines and dishes.</p>
        </div>
        <div className="item">
          <h3>Fast Delivery</h3>
          <p>Get your food hot and fresh in record time.</p>
        </div>
        <div className="item">
          <h3>Best Prices</h3>
          <p>Quality food at affordable prices every time.</p>
        </div>
      </section>

      <footer className="footer">
        © 2025 ZODISH • Follow us on Instagram, Facebook & Twitter
      </footer>
    </div>
  );
}


const styles = {
  container: {
     fontfamily:'DEFAULT_SERIF_FONT',
    color: '#333',
  },
  header: {
    backgroundColor: '#e23744',
    color: '#fff',
    padding: '1rem 2rem',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  logo: {
    fontSize: '28px',
    fontWeight: 'bold',
  },
  nav: {
    display: 'flex',
    gap: '25px',
  },
  navLink: {
    color: '#fff',
    textDecoration: 'none',
    fontWeight: '600',
    fontSize: '16px',
  },
  hero: {
    textAlign: 'center',
    padding: '60px 20px',
    background: '#fff4f4',
  },
  heading: {
    fontSize: '32px',
    margin: '20px 0 10px',
    color: '#e23744',
  },
  subheading: {
    fontSize: '18px',
    color: '#555',
    marginBottom: '20px',
  },
  cta: {
    backgroundColor: '#e23744',
    color: '#fff',
    padding: '10px 20px',
    borderRadius: '6px',
    textDecoration: 'none',
    fontWeight: 'bold',
  },
  features: {
    padding: '50px 20px',
    backgroundColor: '#f8f8f8',
    textAlign: 'center',
  },
  featureTitle: {
    fontSize: '24px',
    marginBottom: '30px',
    color: '#222',
  },
  featureGrid: {
    display: 'flex',
    flexDirection: 'column',
    gap: '15px',
    maxWidth: '400px',
    margin: '0 auto',
  },
  featureItem: {
    fontSize: '16px',
    backgroundColor: '#fff',
    padding: '12px 18px',
    borderRadius: '8px',
    boxShadow: '0 2px 6px rgba(0,0,0,0.1)',
  },
  footer: {
    padding: '20px',
    backgroundColor: '#222',
    color: '#eee',
    textAlign: 'center',
    fontSize: '14px',
  },
};

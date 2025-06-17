'use client';

import Link from 'next/link';

export default function Navbar() {
  return (
    <header className="navbar">
      <div className="logo">🍕 ZODISH</div>
      <nav>
        <Link href="/">Home</Link>
        <Link href="/menu">Menu</Link>
        <Link href="/about">About</Link>
        <Link href="/contact">Contact</Link>
      </nav>
    </header>
  );
}

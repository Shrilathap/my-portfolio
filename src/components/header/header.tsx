// components/Header.js

import { useState } from 'react';
import Link from 'next/link';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-blue-500 text-white shadow-lg fixed top-0 w-full z-50 container-shadow">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-bold">
          <Link href="/">MyLogo</Link>
        </div>

        {/* Menu items */}
        <nav className="hidden md:flex space-x-6">
          <Link href="/about">About</Link>
          <Link href="/education">Education</Link>
          <Link href="/experience">Experience</Link>
          <Link href="/contact">Contact</Link>
        </nav>

        {/* Mobile menu button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-white focus:outline-none"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
            />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-blue-600">
          <nav className="flex flex-col items-center py-2 space-y-2">
            <Link href="/about" onClick={() => setIsOpen(false)}>About</Link>
            <Link href="/education" onClick={() => setIsOpen(false)}>Education</Link>
            <Link href="/experience" onClick={() => setIsOpen(false)}>Experience</Link>
            <Link href="/contact" onClick={() => setIsOpen(false)}>Contact</Link>
          </nav>
        </div>
      )}
    </header>
  );
}

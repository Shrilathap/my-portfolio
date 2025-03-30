// components/Header.js

import { useState } from 'react';
import Link from 'next/link';
import style from '@/components/header/header.module.css'
import { usePathname } from 'next/navigation';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const linkClasses =
  "relative text-white hover:text-orange-500 transition duration-300 after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-orange-500 hover:after:w-full after:transition-all after:duration-300";

  return (
    <header className={`bg-black text-white shadow-lg  top-0 w-full z-50 ${style.container_shadow}`}>
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-bold bg-gradient-to-r from-indigo-600 to-pink-500 bg-clip-text text-transparent">
          <Link href="/" >Shrilatha</Link>
        </div>

        {/* Menu items */}
        <nav className="hidden md:flex space-x-6">
          <Link
            href="/"
            className={`${linkClasses} ${pathname === "/" ? "text-orange-500 after:w-full" : ""}`}
          >
            About
          </Link>
          <Link
            href="/skills"
            className={`${linkClasses} ${pathname === "/skills" ? "text-orange-500 after:w-full" : ""}`}
          >
            Skills
          </Link>
          <Link
            href="/projects"
            className={`${linkClasses} ${pathname === "/projects" ? "text-orange-500 after:w-full" : ""}`}
          >
            Projects
          </Link>
          <Link
            href="/contact"
            className={`${linkClasses} ${pathname === "/contact" ? "text-orange-500 after:w-full" : ""}`}
          >
            Contact
          </Link>
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
        <div className="md:hidden bg-black">
          <nav className="flex flex-col items-center py-2 space-y-2">
            <Link href="/" onClick={() => setIsOpen(false)}>About</Link>
            <Link href="/skills" onClick={() => setIsOpen(false)}>Skills</Link>
            <Link href="/projects" onClick={() => setIsOpen(false)}>Projects</Link>
            <Link href="/contact" onClick={() => setIsOpen(false)}>Contact</Link>
          </nav>
        </div>
      )}
    </header>
  );
}

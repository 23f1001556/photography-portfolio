"use client";
import { useState, useRef, useEffect } from "react";
import Link from "next/link";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const menuRef = useRef(null);

  // Close menu if clicked outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setOpen(false);
      }
    }
    if (open) document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [open]);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black/20 backdrop-blur-md text-white p-3">
      <div className="max-w-7xl mx-auto flex items-center">

        {/* Logo */}
        <Link href="/" className="font-bold cursor-pointer hover:text-yellow-400">
          MY App
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 flex space-x-6">
          <li><Link href="/">Home</Link></li>
          <li><Link href="#story">Story</Link></li>
          <li><Link href="#gallery">Gallery</Link></li>
          <li><Link href="#contact">Contact</Link></li>
        </ul>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden ml-auto"
          onClick={() => setOpen(!open)}
        >
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" strokeWidth="2"
            viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
            <path d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        </button>
      </div>

      {/* Mobile Menu with overlay */}
      {open && (
        <>
          {/* Semi-transparent overlay */}
          <div className="fixed inset-0 bg-black/50 z-40"></div>

          {/* Solid black menu */}
          <ul
            ref={menuRef}
            className="fixed top-0 left-0 h-full w-64 bg-black text-white p-6 z-50 transform transition-transform duration-300"
          >
            <li className="mb-4"><Link href="/" onClick={() => setOpen(false)}>Home</Link></li>
            <li className="mb-4"><Link href="#story" onClick={() => setOpen(false)}>Story</Link></li>
            <li className="mb-4"><Link href="#gallery" onClick={() => setOpen(false)}>Gallery</Link></li>
            <li className="mb-4"><Link href="#contact" onClick={() => setOpen(false)}>Contact</Link></li>
          </ul>
        </>
      )}
    </nav>
  );
}

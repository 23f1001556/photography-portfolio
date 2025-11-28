"use client";
import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "motion/react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const menuRef = useRef(null);

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
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className="fixed top-0 left-0 w-full z-50 bg-black/30 backdrop-blur-lg border-b border-white/10 text-white py-4"
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6">
          {/* Logo */}
          <Link href="/" className="text-2xl font-serif font-bold tracking-wider cursor-pointer hover:text-gray-300 transition-colors">
            NISHA AGGRAWAL
          </Link>

          {/* Desktop Menu */}
          <ul className="hidden md:flex space-x-8">
            {["Home", "Story", "Gallery", "Diary", "Services", "Testimonials", "Contact"].map((item) => (
              <li key={item}>
                <Link
                  href={item === "Home" ? "/" : `#${item.toLowerCase()}`}
                  className="text-sm uppercase tracking-widest hover:text-gray-300 transition-colors relative group"
                >
                  {item}
                  <span className="absolute left-0 bottom-[-4px] w-0 h-[1px] bg-white transition-all group-hover:w-full"></span>
                </Link>
              </li>
            ))}
          </ul>

          {/* Mobile Hamburger */}
          <button className="md:hidden ml-auto" onClick={() => setOpen(!open)}>
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" strokeWidth="2"
              viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
              <path d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <div className="fixed inset-0 z-50 flex">
            {/* Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-black/80"
              onClick={() => setOpen(false)}
            ></motion.div>

            {/* Sliding menu */}
            <motion.div
              ref={menuRef}
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="relative w-64 bg-black text-white p-6"
            >
              <ul className="flex flex-col space-y-4">
                <li><Link href="/" onClick={() => setOpen(false)}>Home</Link></li>
                <li><Link href="#story" onClick={() => setOpen(false)}>Story</Link></li>
                <li><Link href="#gallery" onClick={() => setOpen(false)}>Gallery</Link></li>
                <li><Link href="#diary" onClick={() => setOpen(false)}>Diary</Link></li>
                <li><Link href="#services" onClick={() => setOpen(false)}>Services</Link></li>
                <li><Link href="#testimonials" onClick={() => setOpen(false)}>Testimonials</Link></li>
                <li><Link href="#contact" onClick={() => setOpen(false)}>Contact</Link></li>
              </ul>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}

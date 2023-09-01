"use client"
import Link from 'next/link';
import React, { useState } from 'react';

const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  return (
    <nav className="flex justify-between container mx-auto p-7">
      <Link href='.' className="font-Bayon text-3xl tracking-wide text-white bg-transparent uppercase cursor-pointer">Aryan</Link>

      {/* Hamburger menu */}
      <div className="lg:hidden">
        <button className="text-white" onClick={toggleSidebar}>
          <svg
            className="w-8 h-8"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      {/* Desktop navigation */}
      <div className="hidden lg:flex justify-between gap-20 bg-transparent">
        <Link href="/work" className="font-Bayon text-3xl tracking-wide text-white bg-transparent uppercase cursor-pointer">
          Work
        </Link>
        <Link href="/about" className="font-Bayon text-3xl tracking-wide text-white bg-transparent uppercase cursor-pointer">
          About
        </Link>
        <Link href="/services" className="font-Bayon text-3xl tracking-wide text-white bg-transparent uppercase cursor-pointer">
          Services
        </Link>
        <Link href="/contact" className="font-Bayon text-3xl tracking-wide text-white bg-transparent uppercase cursor-pointer">
          Contact
        </Link>
      </div>

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-screen w-[50%] bg-black text-white bg-opacity-80 backdrop-blur-sm z-30 pt-10 transition ease-linear duration-300 ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
          } lg:hidden`}
      >
        <div className="p-5">
          <Link href="/work" onClick={closeSidebar} className="font-Bayon font-medium text-2xl cursor-pointer block mb-4">Work</Link>
          <Link href="/services" onClick={closeSidebar} className="font-Bayon font-medium text-2xl cursor-pointer block mb-4">SERVICES</Link>
          <Link href="/about" onClick={closeSidebar} className="font-Bayon font-medium text-2xl cursor-pointer block mb-4">About</Link>
          <Link href="/contact" onClick={closeSidebar} className="font-Bayon font-medium text-2xl cursor-pointer block mb-4">Contact</Link>
        </div>
      </div>
    </nav>
  )
}

export default Navbar;

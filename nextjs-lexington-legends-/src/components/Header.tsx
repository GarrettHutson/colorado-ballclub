"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (path: string) => pathname === path;

  return (
    <header className="bg-gradient-to-r from-blue-900 to-blue-800 text-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          <Link 
            href="/" 
            className="text-2xl font-bold flex items-center group"
          >
            <span className="group-hover:scale-105 transition-transform duration-300">
              Lexington Legends
            </span>
            <span className="ml-1 text-yellow-400 group-hover:rotate-12 transition-transform duration-300">⚾</span>
          </Link>
          
          {/* Mobile menu button */}
          <button 
            className="lg:hidden flex items-center text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="h-6 w-6" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
          
          {/* Desktop Navigation */}
          <nav className="hidden lg:block">
            <ul className="flex space-x-8">
              <li>
                <Link 
                  href="/" 
                  className={`relative py-2 px-1 ${isActive('/') ? 'text-yellow-300' : 'hover:text-blue-200'} transition-colors duration-300`}
                >
                  <span>Home</span>
                  {isActive('/') && (
                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-yellow-400"></span>
                  )}
                </Link>
              </li>
              <li>
                <Link 
                  href="/schedule" 
                  className={`relative py-2 px-1 ${isActive('/schedule') ? 'text-yellow-300' : 'hover:text-blue-200'} transition-colors duration-300`}
                >
                  <span>Schedule</span>
                  {isActive('/schedule') && (
                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-yellow-400"></span>
                  )}
                </Link>
              </li>
              <li>
                <Link 
                  href="/promotions" 
                  className={`relative py-2 px-1 ${isActive('/promotions') ? 'text-yellow-300' : 'hover:text-blue-200'} transition-colors duration-300`}
                >
                  <span>Promotions</span>
                  {isActive('/promotions') && (
                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-yellow-400"></span>
                  )}
                </Link>
              </li>
              <li>
                <Link 
                  href="#" 
                  className="py-2 px-4 rounded-full bg-yellow-500 text-blue-900 font-medium hover:bg-yellow-400 transition-colors duration-300 shadow-md hover:shadow-lg"
                >
                  Buy Tickets
                </Link>
              </li>
            </ul>
          </nav>
        </div>
        
        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="lg:hidden mt-4 pb-2">
            <ul className="flex flex-col space-y-3">
              <li>
                <Link 
                  href="/" 
                  className={`block py-2 px-3 rounded ${isActive('/') ? 'bg-blue-700 text-white' : 'hover:bg-blue-700/50'} transition-colors duration-300`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link 
                  href="/schedule" 
                  className={`block py-2 px-3 rounded ${isActive('/schedule') ? 'bg-blue-700 text-white' : 'hover:bg-blue-700/50'} transition-colors duration-300`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  Schedule
                </Link>
              </li>
              <li>
                <Link 
                  href="/promotions" 
                  className={`block py-2 px-3 rounded ${isActive('/promotions') ? 'bg-blue-700 text-white' : 'hover:bg-blue-700/50'} transition-colors duration-300`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  Promotions
                </Link>
              </li>
              <li>
                <Link 
                  href="#" 
                  className="block py-2 px-3 rounded bg-yellow-500 text-blue-900 font-medium text-center hover:bg-yellow-400 transition-colors duration-300"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Buy Tickets
                </Link>
              </li>
            </ul>
          </nav>
        )}
      </div>
    </header>
  );
}
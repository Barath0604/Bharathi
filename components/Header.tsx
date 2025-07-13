
'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-gradient-to-r from-orange-50 to-amber-50 shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center space-x-2">
            <div className="text-2xl font-bold text-orange-600" style={{ fontFamily: 'var(--font-pacifico)' }}>
              Maharshi Shuddhananda Bharathi
            </div>
          </Link>

          <nav className="hidden md:flex space-x-8">
            <Link href="/" className="text-orange-700 hover:text-orange-900 font-medium whitespace-nowrap cursor-pointer">
              Home
            </Link>
            <Link href="/books" className="text-orange-700 hover:text-orange-900 font-medium whitespace-nowrap cursor-pointer">
              Books
            </Link>
            <Link href="/songs" className="text-orange-700 hover:text-orange-900 font-medium whitespace-nowrap cursor-pointer">
              Songs
            </Link>
            <Link href="/photos" className="text-orange-700 hover:text-orange-900 font-medium whitespace-nowrap cursor-pointer">
              Gallery
            </Link>
            <Link href="/admin" className="text-orange-700 hover:text-orange-900 font-medium whitespace-nowrap cursor-pointer">
              Admin
            </Link>
          </nav>

          <button
            className="md:hidden text-orange-700 hover:text-orange-900 cursor-pointer"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <i className="ri-menu-line text-2xl w-6 h-6 flex items-center justify-center"></i>
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden bg-white shadow-lg rounded-b-lg">
            <nav className="flex flex-col space-y-2 p-4">
              <Link href="/" className="text-orange-700 hover:text-orange-900 font-medium py-2 cursor-pointer">
                Home
              </Link>
              <Link href="/books" className="text-orange-700 hover:text-orange-900 font-medium py-2 cursor-pointer">
                Books
              </Link>
              <Link href="/songs" className="text-orange-700 hover:text-orange-900 font-medium py-2 cursor-pointer">
                Songs
              </Link>
              <Link href="/photos" className="text-orange-700 hover:text-orange-900 font-medium py-2 cursor-pointer">
                Gallery
              </Link>
              <Link href="/admin" className="text-orange-700 hover:text-orange-900 font-medium py-2 cursor-pointer">
                Admin
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
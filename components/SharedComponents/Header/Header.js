"use client"
import React, { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const pathname = usePathname()

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header className="py-8 px-8 bg-black text-white">
      <div className="flex">
        <nav className="hidden md:flex space-x-10 items-center justify-center container mx-auto text-xl">
          <Link href="/">
            <Image
              src="/catalyst-global-logo.6f016a59c010e128e74a746ca04c226d.svg"
              alt="Catalyst Foundation Logo"
              width={200}
              height={100}
              className="space-x-6"
            />
          </Link>

          <Link
            href="/"
            className={`hover:text-red-500 ${
              pathname === "/" ? "text-red-500" : "text-white"
            }`}
          >
            Home
          </Link>
          <Link
            href="/organisations"
            className={`hover:text-red-500 ${
              pathname === "/organisations" ? "text-red-500" : "text-white"
            }`}
          >
            Organisations
          </Link>
          <Link
            href="/partners"
            className={`hover:text-red-500 ${
              pathname === "/partners" ? "text-red-500" : "text-white"
            }`}
          >
            Partners
          </Link>
          <Link
            href="https://communityactioncollab.org/"
            target="_blank"
            rel="noopener noreferrer"
            className={`hover:text-red-500 text-white`}
          >
            Community Action Collab
          </Link>
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-white focus:outline-none"
          onClick={toggleMenu}
          aria-label="Toggle Menu"
        >
          {isMenuOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>

        {/* Mobile Menu */}
        <div
          className={`fixed top-0 left-0 w-full h-full bg-black transform ${
            isMenuOpen ? "translate-x-0" : "-translate-x-full"
          } transition-transform duration-300 ease-in-out md:hidden`}
        >
          <div className="p-4">
            {/* Close Menu */}
            <button
              className="text-white"
              onClick={toggleMenu}
              aria-label="Close Menu"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

            {/* Menu Links */}
            <ul className="mt-8 space-y-6">
              <li>
                <Link
                  href="/"
                  className={`block py-2 px-4 rounded ${
                    pathname === "/" ? "text-red-500" : "text-white"
                  }`}
                  onClick={toggleMenu}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/organisations"
                  className={`block py-2 px-4 rounded ${
                    pathname === "/organisations"
                      ? "text-red-500"
                      : "text-white"
                  }`}
                  onClick={toggleMenu}
                >
                  Organisations
                </Link>
              </li>
              <li>
                <Link
                  href="/partners"
                  className={`block py-2 px-4 rounded ${
                    pathname === "/partners" ? "text-red-500" : "text-white"
                  }`}
                  onClick={toggleMenu}
                >
                  Partners
                </Link>
              </li>
              <li>
                <Link
                  href="https://communityactioncollab.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`block py-2 px-4 text-white`}
                  onClick={toggleMenu}
                >
                  Community Action Collab
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header

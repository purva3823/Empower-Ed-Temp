"use client"

import Link from "next/link"
import { useState, useEffect } from "react"
import { usePathname } from "next/navigation"

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  // Close mobile menu when route changes
  useEffect(() => {
    setMobileMenuOpen(false)
  }, [pathname])

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen)
  }

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/features", label: "Features" },
    { href: "/how-it-works", label: "How It Works" },
    { href: "/testimonials", label: "Testimonials" },
    { href: "/contact", label: "Contact" },
  ]

  return (
    <header className="fixed w-full bg-white shadow-md z-50">
      <div className="container mx-auto px-6 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <i className="fas fa-wallet text-3xl text-primary mr-2"></i>
              <span className="text-2xl font-bold text-primary">
                Empower<span className="text-secondary">Ed</span>
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`nav-link font-medium ${pathname === link.href ? "text-secondary" : ""}`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button onClick={toggleMobileMenu} className="text-gray-800 focus:outline-none">
              <i className="fas fa-bars text-xl"></i>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className={`md:hidden mt-4 pb-4 ${mobileMenuOpen ? "" : "hidden"}`}>
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`block py-2 font-medium ${pathname === link.href ? "text-secondary" : ""}`}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </header>
  )
}

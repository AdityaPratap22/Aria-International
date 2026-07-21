"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown, Menu, X } from "lucide-react";

export default function Header() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const isActive = (path: string) => {
    if (path === "/" && pathname === "/") return true;
    if (path !== "/" && pathname.startsWith(path)) return true;
    return false;
  };

  return (
    <header className="navbar-header">
      <div className="container navbar-container">
        {/* Logo */}
        <Link href="/" className="logo-link">
          <span className="logo-main">ARIA</span>
          <span className="logo-sub">INTERNATIONAL</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="nav-menu">
          <Link href="/" className={`nav-link ${isActive("/") ? "active" : ""}`}>
            Home
          </Link>
          <Link href="/about" className={`nav-link ${isActive("/about") ? "active" : ""}`}>
            About Us
          </Link>
          
          {/* Products Dropdown */}
          <div 
            className="dropdown-container"
            onMouseEnter={() => setDropdownOpen(true)}
            onMouseLeave={() => setDropdownOpen(false)}
          >
            <Link 
              href="/products" 
              className={`nav-link nav-dropdown-trigger ${isActive("/products") ? "active" : ""}`}
            >
              Products <ChevronDown size={14} />
            </Link>
            <div className={`dropdown-menu ${dropdownOpen ? "active" : ""}`}>
              <Link href="/gallery?category=leather-furniture" className="dropdown-item">Leather Furniture</Link>
              <Link href="/gallery?category=tables" className="dropdown-item">Tables</Link>
              <Link href="/gallery?category=leather-boxes" className="dropdown-item">Leather Boxes</Link>
              <Link href="/gallery?category=brass-decor" className="dropdown-item">Brass Statues & Decor</Link>
              <Link href="/gallery?category=leather-bound-books" className="dropdown-item">Leather Bound Books</Link>
            </div>
          </div>

          <Link href="/why-us" className={`nav-link ${isActive("/why-us") ? "active" : ""}`}>
            Why Us
          </Link>
          <Link href="/gallery" className={`nav-link ${isActive("/gallery") ? "active" : ""}`}>
            Gallery
          </Link>
          <Link href="/contact" className={`nav-link ${isActive("/contact") ? "active" : ""}`}>
            Contact
          </Link>
        </nav>

        {/* Mobile Nav Toggle */}
        <button 
          className="mobile-nav-toggle"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle Navigation Menu"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation Panel */}
      {mobileMenuOpen && (
        <div style={{
          backgroundColor: "#ffffff",
          borderBottom: "1px solid var(--color-border)",
          padding: "1.5rem",
          display: "flex",
          flexDirection: "column",
          gap: "1.25rem",
          position: "absolute",
          width: "100%",
          left: 0,
          top: "90px",
          boxShadow: "var(--shadow-lg)",
          zIndex: 99
        }}>
          <Link href="/" onClick={() => setMobileMenuOpen(false)} style={{ fontSize: "1.05rem", fontWeight: 500, color: isActive("/") ? "var(--color-gold)" : "inherit" }}>Home</Link>
          <Link href="/about" onClick={() => setMobileMenuOpen(false)} style={{ fontSize: "1.05rem", fontWeight: 500, color: isActive("/about") ? "var(--color-gold)" : "inherit" }}>About Us</Link>
          <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem", paddingLeft: "0.5rem", borderLeft: "2px solid var(--color-gold)" }}>
            <Link href="/products" onClick={() => setMobileMenuOpen(false)} style={{ fontSize: "0.85rem", fontWeight: 600, color: "var(--color-gold)", textTransform: "uppercase", letterSpacing: "0.05em" }}>Products</Link>
            <Link href="/gallery?category=leather-furniture" onClick={() => setMobileMenuOpen(false)} style={{ fontSize: "0.95rem", color: "var(--color-text-dark)" }}>Leather Furniture</Link>
            <Link href="/gallery?category=tables" onClick={() => setMobileMenuOpen(false)} style={{ fontSize: "0.95rem", color: "var(--color-text-dark)" }}>Tables</Link>
            <Link href="/gallery?category=leather-boxes" onClick={() => setMobileMenuOpen(false)} style={{ fontSize: "0.95rem", color: "var(--color-text-dark)" }}>Leather Boxes</Link>
            <Link href="/gallery?category=brass-decor" onClick={() => setMobileMenuOpen(false)} style={{ fontSize: "0.95rem", color: "var(--color-text-dark)" }}>Brass Statues & Decor</Link>
            <Link href="/gallery?category=leather-bound-books" onClick={() => setMobileMenuOpen(false)} style={{ fontSize: "0.95rem", color: "var(--color-text-dark)" }}>Leather Bound Books</Link>
          </div>
          <Link href="/why-us" onClick={() => setMobileMenuOpen(false)} style={{ fontSize: "1.05rem", fontWeight: 500, color: isActive("/why-us") ? "var(--color-gold)" : "inherit" }}>Why Us</Link>
          <Link href="/gallery" onClick={() => setMobileMenuOpen(false)} style={{ fontSize: "1.05rem", fontWeight: 500, color: isActive("/gallery") ? "var(--color-gold)" : "inherit" }}>Gallery</Link>
          <Link href="/contact" onClick={() => setMobileMenuOpen(false)} style={{ fontSize: "1.05rem", fontWeight: 500, color: isActive("/contact") ? "var(--color-gold)" : "inherit" }}>Contact</Link>
        </div>
      )}
    </header>
  );
}

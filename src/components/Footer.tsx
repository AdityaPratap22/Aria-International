"use client";

import React from "react";
import Link from "next/link";
import { MapPin, Mail, Phone } from "lucide-react";

export default function Footer() {

  return (
    <>
      <footer id="contact" className="footer-main">
        <div className="container">
          <div className="footer-grid">
            {/* Col 1: About Logo */}
            <div>
              <Link href="/" className="logo-link" style={{ marginBottom: "1rem" }}>
                <span className="logo-main" style={{ fontSize: "1.6rem" }}>ARIA</span>
                <span className="logo-sub" style={{ fontSize: "0.6rem" }}>INTERNATIONAL</span>
              </Link>
              <p className="footer-col-desc">
                Delivering premium leather and brass products with a commitment to quality and customer satisfaction.
              </p>

            </div>

            {/* Col 2: Quick Links */}
            <div>
              <h4 className="footer-title">Quick Links</h4>
              <ul className="footer-links-list">
                <li><Link href="/">Home</Link></li>
                <li><Link href="/about">About Us</Link></li>
                <li><Link href="/products">Products</Link></li>
                <li><Link href="/why-us">Why Us</Link></li>
                <li><Link href="/gallery">Gallery</Link></li>
                <li><Link href="/contact">Contact Us</Link></li>
              </ul>
            </div>

            {/* Col 3: Our Products */}
            <div>
              <h4 className="footer-title">Our Products</h4>
              <ul className="footer-links-list">
                <li><Link href="/gallery?category=leather-furniture">Leather Furniture</Link></li>
                <li><Link href="/gallery?category=tables">Tables</Link></li>
                <li><Link href="/gallery?category=leather-boxes">Leather Boxes</Link></li>
                <li><Link href="/gallery?category=brass-decor">Brass Statues & Decor</Link></li>
                <li><Link href="/gallery?category=leather-bound-books">Leather Bound Books</Link></li>
                <li><Link href="/products">Decorative Items</Link></li>
                <li><Link href="/products">Handicrafts</Link></li>
              </ul>
            </div>

            {/* Col 4: Contact Us & Newsletter */}
            <div>
              <h4 className="footer-title">Contact Us</h4>
              <ul className="contact-info-list" style={{ marginBottom: "1.5rem" }}>
                <li>
                  <div className="contact-icon-wrapper">
                    <MapPin size={16} />
                  </div>
                  <span>21, Sohna Rd, opp. Bethany Convent School, Pakhal, Faridabad, Selakhari, Haryana 121004</span>
                </li>
                <li>
                  <div className="contact-icon-wrapper">
                    <Mail size={16} />
                  </div>
                  <a href="mailto:info@ariaint.in" style={{ color: "inherit", textDecoration: "none" }}>info@ariaint.in</a>
                </li>
                <li>
                  <div className="contact-icon-wrapper">
                    <Phone size={16} />
                  </div>
                  <a href="tel:+911294318821" style={{ color: "inherit", textDecoration: "none" }}>+91 129-4318821</a>
                </li>
              </ul>


            </div>
          </div>
        </div>
      </footer>

      {/* Bottom bar */}
      <div className="footer-bottom-bar">
        <div className="container">
          <span>© 2024 Aria International. All Rights Reserved.</span>
        </div>
      </div>
    </>
  );
}

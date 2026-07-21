"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Award,
  Globe,
  Handshake,
  Settings,
  ArrowRight,
  Smile,
  Package,
} from "lucide-react";

export default function Home() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "Aria International",
            "image": "https://ariaint.in/images/hero-sofa-hq.png",
            "email": "info@ariaint.in",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "21, Sohna Rd, opp. Bethany Convent School, Pakhal, Selakhari",
              "addressLocality": "Faridabad",
              "addressRegion": "Haryana",
              "postalCode": "121004",
              "addressCountry": "IN"
            },
            "url": "https://ariaint.in",
            "founder": {
              "@type": "Person",
              "name": "Sunil Chauhan"
            },
            "description": "Faridabad-based premier manufacturer, exporter, and supplier of luxury leather furniture, custom tables, leather boxes, brass statues, and decorative items."
          })
        }}
      />
      {/* Hero Section */}
      <section id="home" className="hero-section">
        <div className="hero-bg-image-wrapper">
          <Image
            src="/images/hero-sofa-hq.png"
            alt="Aria Premium Leather Chesterfield Sofa & Decor"
            fill
            priority
            quality={90}
            className="hero-bg-img"
          />
          <div className="hero-bg-overlay"></div>
        </div>
        <div className="container hero-container">
          <div className="hero-content">
            <h1 className="serif-heading hero-title reveal">
              Timeless Craftsmanship.<br />Global Excellence.
            </h1>
            <p className="hero-description reveal delay-100">
              Manufacturer, Exporter & Supplier of Premium Leather Furniture, Tables, Boxes, Brass Statues & Decorative Items.
            </p>
            <Link href="/products" className="btn-hero reveal delay-200">
              Explore Our Collection <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* Features / Badges Row */}
      <section className="features-section">
        <div className="container">
          <div className="features-grid">
            <div className="feature-card reveal">
              <div className="feature-icon-wrapper">
                <Award size={24} />
              </div>
              <h3 className="feature-title">Premium Quality</h3>
              <p className="feature-description">
                Finest materials with exceptional craftsmanship.
              </p>
            </div>

            <div className="feature-card reveal delay-100">
              <div className="feature-icon-wrapper">
                <Globe size={24} />
              </div>
              <h3 className="feature-title">Global Reach</h3>
              <p className="feature-description">
                Exporting excellence to markets worldwide.
              </p>
            </div>

            <div className="feature-card reveal delay-200">
              <div className="feature-icon-wrapper">
                <Handshake size={24} />
              </div>
              <h3 className="feature-title">Trusted Partner</h3>
              <p className="feature-description">
                Reliable solutions for long-term business relationships.
              </p>
            </div>

            <div className="feature-card reveal delay-300">
              <div className="feature-icon-wrapper">
                <Settings size={24} />
              </div>
              <h3 className="feature-title">Custom Solutions</h3>
              <p className="feature-description">
                Tailored designs to meet your unique needs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Products Summary Section */}
      <section className="products-section">
        <div className="container">
          <div className="section-header reveal">
            <span className="subtitle-gold">Our Products</span>
            <h2 className="serif-heading section-title">Crafted to Perfection</h2>
          </div>

          <div className="products-grid">
            {/* Product 1 */}
            <div className="product-card reveal">
              <div className="product-image-wrapper">
                <Image
                  src="/images/prod-furniture.jpg"
                  alt="Premium Leather Furniture Armchair"
                  fill
                  quality={90}
                  style={{ objectFit: "cover" }}
                  className="product-img"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
              </div>
              <div className="product-info">
                <h3 className="serif-heading product-name">Leather Furniture</h3>
                <p className="product-desc">
                  Elegant and durable leather furniture for every space.
                </p>
                <Link href="/gallery?category=leather-furniture" className="product-link">
                  Explore Range <ArrowRight size={14} />
                </Link>
              </div>
            </div>

            {/* Product 2 */}
            <div className="product-card reveal delay-100">
              <div className="product-image-wrapper">
                <Image
                  src="/images/prod-table.jpg"
                  alt="Luxury Leather Clad Trunk Table"
                  fill
                  quality={90}
                  style={{ objectFit: "cover" }}
                  className="product-img"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
              </div>
              <div className="product-info">
                <h3 className="serif-heading product-name">Tables</h3>
                <p className="product-desc">
                  Stylish and sturdy tables crafted with precision.
                </p>
                <Link href="/gallery?category=tables" className="product-link">
                  Explore Range <ArrowRight size={14} />
                </Link>
              </div>
            </div>

            {/* Product 3 */}
            <div className="product-card reveal delay-200">
              <div className="product-image-wrapper">
                <Image
                  src="/images/prod-box.jpg"
                  alt="Classic Leather Bound Books Set"
                  fill
                  quality={90}
                  style={{ objectFit: "cover" }}
                  className="product-img"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
              </div>
              <div className="product-info">
                <h3 className="serif-heading product-name">Leather Bound Books</h3>
                <p className="product-desc">
                  Meticulously hand-bound books that add a touch of classic library elegance.
                </p>
                <Link href="/gallery?category=leather-bound-books" className="product-link">
                  Explore Range <ArrowRight size={14} />
                </Link>
              </div>
            </div>

            {/* Product 4 */}
            <div className="product-card reveal delay-300">
              <div className="product-image-wrapper">
                <Image
                  src="/images/prod-statue.jpg"
                  alt="Finely Crafted Polished Brass Statue"
                  fill
                  quality={90}
                  style={{ objectFit: "cover" }}
                  className="product-img"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
              </div>
              <div className="product-info">
                <h3 className="serif-heading product-name">Brass Statues & Decor</h3>
                <p className="product-desc">
                  Finely crafted brass statues and decorative items.
                </p>
                <Link href="/gallery?category=brass-decor" className="product-link">
                  Explore Range <ArrowRight size={14} />
                </Link>
              </div>
            </div>
          </div>
          <div style={{ textAlign: "center", marginTop: "3.5rem" }}>
            <Link href="/products" className="btn-secondary">
              View All Products <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* About Summary Section */}
      <section className="about-section" style={{ borderBottom: "1px solid var(--color-border)", padding: "5rem 0" }}>
        <div className="container">
          <div style={{ maxWidth: "800px", margin: "0 auto" }} className="reveal">
            <div style={{ textAlign: "center" }}>
              <span className="subtitle-gold">About Us</span>
              <h2 className="serif-heading" style={{ fontSize: "2.5rem", marginBottom: "1.5rem", color: "var(--color-text-dark)" }}>Aria International</h2>
            </div>
            <div className="about-text" style={{ fontSize: "1.05rem", lineHeight: 1.8, color: "var(--color-text-muted)", marginBottom: "2.5rem", textAlign: "left" }}>
              <p>
                Aria International is a Faridabad-based manufacturer, exporter, and supplier of high-quality leather furniture, tables, boxes, brass statues, and decorative items.
              </p>
              <p>
                We combine traditional craftsmanship with modern designs to deliver products that add elegance and value to every space.
              </p>
            </div>
            <div style={{ textAlign: "center" }}>
              <Link href="/about" className="btn-secondary" style={{ display: "inline-flex" }}>
                Know More About Us <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us & Stats Section */}
      <section className="why-choose-section">
        <div className="container">
          <div className="why-choose-grid">
            <div className="why-choose-title-wrapper reveal-left">
              <span className="subtitle-gold">Why Choose Us</span>
              <h2 className="serif-heading section-title">Why Choose<br />Aria International?</h2>
            </div>
            <div className="stats-grid reveal-right">
              <div className="stat-item">
                <Award size={32} className="stat-icon" />
                <div className="stat-number">20+</div>
                <div className="stat-label">Years of Experience</div>
              </div>

              <div className="stat-item">
                <Globe size={32} className="stat-icon" />
                <div className="stat-number">5+</div>
                <div className="stat-label">Countries Exported</div>
              </div>

              <div className="stat-item">
                <Smile size={32} className="stat-icon" />
                <div className="stat-number">10+</div>
                <div className="stat-label">Happy Clients</div>
              </div>

              <div className="stat-item">
                <Package size={32} className="stat-icon" />
                <div className="stat-number">5000+</div>
                <div className="stat-label">Products Delivered</div>
              </div>
            </div>
          </div>
          <div style={{ textAlign: "center", marginTop: "3.5rem" }}>
            <Link href="/why-us" className="btn-secondary" style={{ backgroundColor: "var(--color-gold)", borderColor: "var(--color-gold)" }}>
              Read Our Full Story <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Tag } from "lucide-react";

export default function Products() {
  const productLines = [
    {
      id: "leather-furniture",
      name: "Leather Furniture",
      subtitle: "Sofas, Chesterfield armchairs, Camp stools & Poufs",
      description: "Handcrafted using top-grain premium aniline leather and solid timber subframes. Built to provide timeless character and structural durability. Custom sizes, upholstery colors, and configurations are available upon request.",
      image: "/images/prod-furniture.jpg",
      tags: ["Full Grain Upholstery", "Solid Wood Subframes", "Custom Sizes Available"]
    },
    {
      id: "tables",
      name: "Tables",
      subtitle: "Leather-clad trunks, coffee tables, study desks",
      description: "Sophisticated coffee tables, leather-bound chest tables with brass rivets and drawers, and modern geometric shagreen-clad side tables. Ideal for adding a signature touch to office study areas or living spaces.",
      image: "/images/prod-table.jpg",
      tags: ["Riveted Brass Details", "Stitched Leather Edges", "Storage Integrations"]
    },
    {
      id: "leather-boxes",
      name: "Leather Boxes",
      subtitle: "Keepsake chests, valet boxes & humidors",
      description: "Stately custom leather storage boxes, jewelry humidors, dummy book spine stands, and letter bins. Fine contrast stitching, custom suede lining, and heavy brass locking hardware showcase unparalleled desk storage options.",
      image: "/images/prod-box.jpg",
      tags: ["Contrast Stitched", "Suede Lined", "Heavy Brass Latches"]
    },
    {
      id: "brass-decor",
      name: "Brass Statues & Decor",
      subtitle: "Hand-cast polished statues, mirror frames & accessories",
      description: "Extravagant hand-finished brass sculptures, deity icons (Ganesha, Lakshmi, Shiva), solid brass mirror frames, and decorative desk plaques. Cast using traditional sand-molds and hand-polished to a reflective luster.",
      image: "/images/prod-statue.jpg",
      tags: ["Traditional Sand Cast", "Hand Polished Finish", "Artisanal Custom Work"]
    },
    {
      id: "leather-bound-books",
      name: "Leather Bound Books",
      subtitle: "Custom journals, embossed registers & decorative book boxes",
      description: "Meticulously crafted leather cover books, notebooks, and storage book-safes. Featuring hand-dyed top-grain leather covers, gold-leaf gilding on spines, and custom embossed patterns. Perfect for luxury hotels, private libraries, and corporate gifts.",
      image: "/images/gallery/WhatsApp Image 2026-07-19 at 2.13.11 PM.jpeg",
      tags: ["Hand-dyed Leather", "Gold-Leaf Spine Gilding", "Custom Sizing & Ruling"]
    }
  ];

  return (
    <main style={{ paddingBottom: "5rem" }}>
      {/* Page Header */}
      <section className="products-section" style={{ padding: "4rem 0 3rem 0", backgroundColor: "var(--color-dark-bg)", color: "var(--color-white)", textAlign: "center" }}>
        <div className="container">
          <span className="subtitle-gold">Global Collection</span>
          <h1 className="serif-heading" style={{ fontSize: "3rem", marginTop: "0.5rem" }}>Our Products</h1>
          <div style={{ width: "60px", height: "3px", backgroundColor: "var(--color-gold)", margin: "1.5rem auto 0 auto" }}></div>
        </div>
      </section>

      {/* Product Lines Detail Grid */}
      <section className="about-section" style={{ padding: "5rem 0" }}>
        <div className="container">
          <div style={{ display: "flex", flexDirection: "column", gap: "5rem" }}>
            {productLines.map((prod, index) => (
              <div 
                key={prod.id} 
                id={prod.id}
                style={{ 
                  display: "grid", 
                  gridTemplateColumns: "1fr 1fr", 
                  gap: "4rem", 
                  alignItems: "center" 
                }}
                className="about-grid" // Reuses responsive grid structure
              >
                {/* Image side - Alternate order on desktop */}
                <div style={{ 
                  width: "100%",
                  maxWidth: "420px",
                  height: "380px", 
                  position: "relative",
                  borderRadius: "6px",
                  overflow: "hidden",
                  boxShadow: "var(--shadow-lg)",
                  margin: "0 auto",
                  order: index % 2 === 0 ? 0 : 1
                }} className={`about-image-side ${index % 2 === 0 ? "reveal-left" : "reveal-right"}`}>
                  <Image
                    src={prod.image}
                    alt={prod.name}
                    fill
                    quality={90}
                    style={{ objectFit: "cover" }}
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>

                {/* Content Side */}
                <div style={{ order: index % 2 === 0 ? 1 : 0 }} className={`about-content-side ${index % 2 === 0 ? "reveal-right" : "reveal-left"}`}>
                  <span className="subtitle-gold" style={{ fontSize: "0.75rem" }}>Category 0{index + 1}</span>
                  <h2 className="serif-heading" style={{ fontSize: "2.2rem", color: "var(--color-text-dark)", marginBottom: "0.25rem" }}>{prod.name}</h2>
                  <p style={{ fontStyle: "italic", color: "var(--color-gold)", fontSize: "0.95rem", marginBottom: "1.25rem", fontWeight: 500 }}>{prod.subtitle}</p>
                  <p style={{ color: "var(--color-text-muted)", fontSize: "0.95rem", lineHeight: 1.7, marginBottom: "1.5rem" }}>
                    {prod.description}
                  </p>

                  <div style={{ display: "flex", flexWrap: "wrap", gap: "0.75rem", marginBottom: "2rem" }}>
                    {prod.tags.map(tag => (
                      <span 
                        key={tag} 
                        style={{ 
                          fontSize: "0.75rem", 
                          backgroundColor: "var(--color-light-bg)", 
                          color: "var(--color-text-dark)", 
                          padding: "0.4rem 0.8rem", 
                          borderRadius: "4px",
                          border: "1px solid var(--color-border)",
                          display: "inline-flex",
                          alignItems: "center",
                          gap: "0.35rem",
                          fontWeight: 500
                        }}
                      >
                        <Tag size={10} className="gold-text" />
                        {tag}
                      </span>
                    ))}
                  </div>

                  <Link 
                    href={`/gallery?category=${prod.id}`} 
                    className="btn-secondary"
                  >
                    View Products <ArrowRight size={16} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

"use client";

import React, { useState, Suspense } from "react";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import { X, Search, ArrowRight } from "lucide-react";

interface GalleryItem {
  filename: string;
  name: string;
  category: "Leather Furniture" | "Tables" | "Leather Boxes & Trays" | "Brass Decor" | "Leather Bound Books";
}

const galleryItems: GalleryItem[] = [
  { filename: "WhatsApp Image 2026-07-19 at 1.51.57 PM.jpeg", name: "3-Drawer Leather Dresser", category: "Leather Furniture" },
  { filename: "WhatsApp Image 2026-07-19 at 1.52.55 PM.jpeg", name: "Golden Brass Studded Trunk", category: "Brass Decor" },
  { filename: "WhatsApp Image 2026-07-19 at 1.53.12 PM.jpeg", name: "Modern Shagreen Spiral Coffee Table", category: "Tables" },
  { filename: "WhatsApp Image 2026-07-19 at 1.53.31 PM.jpeg", name: "Brass Studded Mirror Frame", category: "Brass Decor" },
  { filename: "WhatsApp Image 2026-07-19 at 1.53.53 PM.jpeg", name: "Kiln-Wood Linen Stool", category: "Leather Furniture" },
  { filename: "WhatsApp Image 2026-07-19 at 1.54.14 PM.jpeg", name: "Vintage Leather strapped Coffee Trunk", category: "Tables" },
  { filename: "WhatsApp Image 2026-07-19 at 1.55.25 PM.jpeg", name: "Arched Leather rivet Stool", category: "Leather Furniture" },
  { filename: "WhatsApp Image 2026-07-19 at 1.56.02 PM.jpeg", name: "Bespoke Cowhide Armchair", category: "Leather Furniture" },
  { filename: "WhatsApp Image 2026-07-19 at 1.56.37 PM.jpeg", name: "Polished Brass 3-Drawer Chest", category: "Brass Decor" },
  { filename: "WhatsApp Image 2026-07-19 at 1.57.11 PM.jpeg", name: "Embossed Leather Bust Plaque", category: "Brass Decor" },
  { filename: "WhatsApp Image 2026-07-19 at 1.57.44 PM (1).jpeg", name: "Contemporary Leather Dining Chair - Tan", category: "Leather Furniture" },
  { filename: "WhatsApp Image 2026-07-19 at 1.57.44 PM (2).jpeg", name: "Contemporary Leather Dining Chair - Black", category: "Leather Furniture" },
  { filename: "WhatsApp Image 2026-07-19 at 1.57.44 PM.jpeg", name: "Padded Leather Bar Stool", category: "Leather Furniture" },
  { filename: "WhatsApp Image 2026-07-19 at 1.58.41 PM.jpeg", name: "Pebble-Grain Leather Serving Tray", category: "Leather Boxes & Trays" },
  { filename: "WhatsApp Image 2026-07-19 at 1.59.13 PM.jpeg", name: "Stitched Tan Leather Serving Tray", category: "Leather Boxes & Trays" },
  { filename: "WhatsApp Image 2026-07-19 at 1.59.20 PM.jpeg", name: "Camp Stool with Wrought Iron X-Legs", category: "Leather Furniture" },
  { filename: "WhatsApp Image 2026-07-19 at 1.59.58 PM.jpeg", name: "Chateau Embossed Wine Plaque Tray", category: "Leather Boxes & Trays" },
  { filename: "WhatsApp Image 2026-07-19 at 2.00.19 PM.jpeg", name: "Vintage Stacked Leather Book Stand", category: "Leather Bound Books" },
  { filename: "WhatsApp Image 2026-07-19 at 2.00.47 PM.jpeg", name: "Tufted Leather Ottoman Pouf - Linen Sides", category: "Leather Furniture" },
  { filename: "WhatsApp Image 2026-07-19 at 2.00.56 PM.jpeg", name: "Circular Full-Tufted Chesterfield Ottoman", category: "Leather Furniture" },
  { filename: "WhatsApp Image 2026-07-19 at 2.13.11 PM (1).jpeg", name: "Handcrafted Tan Leather Bound Journal", category: "Leather Bound Books" },
  { filename: "WhatsApp Image 2026-07-19 at 2.13.11 PM (2).jpeg", name: "Antique Filigree Embossed Leather Book", category: "Leather Bound Books" },
  { filename: "WhatsApp Image 2026-07-19 at 2.13.11 PM.jpeg", name: "Classic Gold-Gilt Spine Leather Book", category: "Leather Bound Books" },
  { filename: "WhatsApp Image 2026-07-19 at 2.13.12 PM (2).jpeg", name: "Hand-Painted Coral Illustration Leather Book - Type A", category: "Leather Bound Books" },
  { filename: "WhatsApp Image 2026-07-19 at 2.13.12 PM (3).jpeg", name: "Hand-Painted Coral Illustration Leather Book - Type B", category: "Leather Bound Books" },
  { filename: "WhatsApp Image 2026-07-19 at 2.13.12 PM.jpeg", name: "Sea Life Series Leather Spines - Detail View", category: "Leather Bound Books" }
];

const filters = ["All", "Leather Furniture", "Tables", "Leather Boxes & Trays", "Brass Decor", "Leather Bound Books"];

function GalleryContent() {
  const searchParams = useSearchParams();
  const [prevCategory, setPrevCategory] = useState<string | null>(null);
  const [selectedFilter, setSelectedFilter] = useState<string>("All");
  const [activeLightboxImage, setActiveLightboxImage] = useState<GalleryItem | null>(null);

  const categoryQuery = searchParams.get("category");
  if (categoryQuery !== prevCategory) {
    setPrevCategory(categoryQuery);
    const mapping: { [key: string]: string } = {
      "leather-furniture": "Leather Furniture",
      "tables": "Tables",
      "leather-boxes": "Leather Boxes & Trays",
      "brass-decor": "Brass Decor",
      "leather-bound-books": "Leather Bound Books"
    };
    setSelectedFilter(mapping[categoryQuery || ""] || "All");
  }

  const filteredItems = selectedFilter === "All" 
    ? galleryItems 
    : galleryItems.filter(item => item.category === selectedFilter);

  return (
    <main style={{ paddingBottom: "6rem" }}>
      {/* Page Header */}
      <section className="products-section" style={{ padding: "4rem 0 3rem 0", backgroundColor: "var(--color-dark-bg)", color: "var(--color-white)", textAlign: "center" }}>
        <div className="container">
          <span className="subtitle-gold">Product Portfolio</span>
          <h1 className="serif-heading" style={{ fontSize: "3rem", marginTop: "0.5rem" }}>Collection Gallery</h1>
          <div style={{ width: "60px", height: "3px", backgroundColor: "var(--color-gold)", margin: "1.5rem auto 0 auto" }}></div>
        </div>
      </section>

      {/* Filter Tabs */}
      <section style={{ padding: "3rem 0 1.5rem 0" }}>
        <div className="container" style={{ display: "flex", justifyContent: "center", flexWrap: "wrap", gap: "1rem" }}>
          {filters.map(filter => (
            <button
              key={filter}
              onClick={() => setSelectedFilter(filter)}
              style={{
                padding: "0.6rem 1.4rem",
                borderRadius: "30px",
                fontSize: "0.85rem",
                fontWeight: 600,
                border: "1px solid var(--color-border)",
                backgroundColor: selectedFilter === filter ? "var(--color-gold)" : "var(--color-white)",
                color: selectedFilter === filter ? "var(--color-white)" : "var(--color-text-dark)",
                transition: "var(--transition-smooth)",
                boxShadow: selectedFilter === filter ? "0 4px 10px rgba(140, 98, 57, 0.2)" : "none"
              }}
            >
              {filter}
            </button>
          ))}
        </div>
      </section>

      {/* Gallery Grid */}
      <section style={{ padding: "1.5rem 0" }}>
        <div className="container">
          <p style={{ textAlign: "center", color: "var(--color-text-muted)", fontSize: "0.9rem", marginBottom: "2.5rem" }}>
            Showing {filteredItems.length} handcrafted items in {selectedFilter}
          </p>

          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
            gap: "2rem"
          }}>
            {filteredItems.map((item, idx) => (
              <div 
                key={idx}
                className={`reveal delay-${(idx % 4) * 100}`}
                onClick={() => setActiveLightboxImage(item)}
                style={{
                  backgroundColor: "var(--color-white)",
                  borderRadius: "6px",
                  overflow: "hidden",
                  boxShadow: "var(--shadow-sm)",
                  border: "1px solid var(--color-border)",
                  cursor: "pointer",
                  transition: "var(--transition-smooth)",
                  position: "relative"
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-5px)";
                  e.currentTarget.style.boxShadow = "var(--shadow-lg)";
                  const overlay = e.currentTarget.querySelector(".hover-overlay") as HTMLDivElement;
                  if (overlay) overlay.style.opacity = "1";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "var(--shadow-sm)";
                  const overlay = e.currentTarget.querySelector(".hover-overlay") as HTMLDivElement;
                  if (overlay) overlay.style.opacity = "0";
                }}
              >
                {/* Image */}
                <div style={{ position: "relative", height: "240px", width: "100%", overflow: "hidden" }}>
                  <Image
                    src={`/images/gallery/${item.filename}`}
                    alt={item.name}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    style={{ objectFit: "cover" }}
                    quality={75}
                  />
                  {/* Hover magnifier effect */}
                  <div className="hover-overlay" style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    backgroundColor: "rgba(20, 17, 15, 0.4)",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    opacity: 0,
                    transition: "var(--transition-smooth)",
                    zIndex: 2
                  }}>
                    <div style={{ color: "var(--color-white)", backgroundColor: "var(--color-gold)", padding: "0.75rem", borderRadius: "50%" }}>
                      <Search size={20} />
                    </div>
                  </div>
                </div>

                {/* Text Info */}
                <div style={{ padding: "1.25rem" }}>
                  <span style={{ fontSize: "0.7rem", color: "var(--color-gold)", textTransform: "uppercase", fontWeight: 600, letterSpacing: "0.05em" }}>{item.category}</span>
                  <h3 className="serif-heading" style={{ fontSize: "1.1rem", marginTop: "0.25rem", color: "var(--color-text-dark)" }}>{item.name}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox / Enlarged View Modal */}
      {activeLightboxImage && (
        <div style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(20, 17, 15, 0.9)",
          zIndex: 1000,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: "2rem"
        }} onClick={() => setActiveLightboxImage(null)}>
          <div style={{
            position: "relative",
            backgroundColor: "var(--color-white)",
            borderRadius: "8px",
            width: "100%",
            maxWidth: "750px",
            overflow: "hidden",
            boxShadow: "var(--shadow-xl)"
          }} onClick={(e) => e.stopPropagation()}>
            {/* Close Button */}
            <button 
              style={{
                position: "absolute",
                top: "1rem",
                right: "1rem",
                color: "var(--color-white)",
                backgroundColor: "rgba(20, 17, 15, 0.5)",
                padding: "0.4rem",
                borderRadius: "50%",
                zIndex: 10,
                display: "inline-flex"
              }} 
              onClick={() => setActiveLightboxImage(null)}
            >
              <X size={20} />
            </button>

            {/* Large Image container */}
            <div style={{ position: "relative", height: "450px", width: "100%" }}>
              <Image
                src={`/images/gallery/${activeLightboxImage.filename}`}
                alt={activeLightboxImage.name}
                fill
                style={{ objectFit: "contain", backgroundColor: "#1e1b18" }}
                sizes="750px"
              />
            </div>

            {/* Info details */}
            <div style={{ padding: "2rem", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "1.5rem" }}>
              <div>
                <span style={{ fontSize: "0.75rem", color: "var(--color-gold)", textTransform: "uppercase", fontWeight: 600, letterSpacing: "0.05em" }}>{activeLightboxImage.category}</span>
                <h3 className="serif-heading" style={{ fontSize: "1.5rem", color: "var(--color-text-dark)", marginTop: "0.25rem" }}>{activeLightboxImage.name}</h3>
              </div>
              <a
                href={`mailto:info@ariaint.in?subject=Gallery Enquiry: ${activeLightboxImage.name}`}
                className="btn-secondary"
                onClick={() => setActiveLightboxImage(null)}
              >
                Enquire for Bespoke Order <ArrowRight size={16} />
              </a>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}

export default function Gallery() {
  return (
    <Suspense fallback={
      <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "50vh" }}>
        <div className="serif-heading" style={{ fontSize: "1.5rem", color: "var(--color-gold)" }}>Loading Gallery...</div>
      </div>
    }>
      <GalleryContent />
    </Suspense>
  );
}

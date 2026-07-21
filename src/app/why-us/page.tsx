"use client";

import React from "react";
import { Award, Globe, Smile, Package, Shield, Settings2, ShieldCheck, HeartHandshake } from "lucide-react";
export default function WhyUs() {

  const stats = [
    { icon: <Award size={36} />, num: "20+", label: "Years of Experience", desc: "Two decades of refining craftsmanship and building solid client trust." },
    { icon: <Globe size={36} />, num: "5+", label: "Countries Exported", desc: "Export compliance with logistics networks across Europe, Americas, and APAC." },
    { icon: <Smile size={36} />, num: "10+", label: "Happy Clients", desc: "Long-term relationships with boutique hotels, interior architects, and collectors." },
    { icon: <Package size={36} />, num: "5000+", label: "Products Delivered", desc: "Safely shipped fragile brass and premium leather products worldwide." }
  ];

  const pillars = [
    {
      title: "Uncompromising Material Selection",
      icon: <Shield size={24} />,
      text: "We never compromise on raw materials. Our furniture uses full-grain aniline leathers that develop a rich natural patina over time. Hardwood frames are kiln-dried to prevent warping in varying climates, and our decorative pieces are crafted from premium solid brass alloys."
    },
    {
      title: "Custom Tailored Solutions",
      icon: <Settings2 size={24} />,
      text: "Aria International acts as an extension of your design team. We offer custom dimensions, customized layout alignments, specialized leather embossing, and personalized metal finishes. We tailor products to match exact architectural schematics."
    },
    {
      title: "Certified Export Logistics",
      icon: <ShieldCheck size={24} />,
      text: "Exporting internationally requires strict adherence to regulations. We handle complete phytosanitary certifications, custom ISPM-15 fumigated timber crating, and documentation. Our packages are designed to withstand intercontinental transit shocks."
    },
    {
      title: "Ethical & Artisan Centric Sourcing",
      icon: <HeartHandshake size={24} />,
      text: "We believe in preserving local heritage. We employ and support traditional hand-casters, master weavers, and leather craftsmen. By combining their ancestral knowledge with modern quality controls, we deliver authentic luxury that supports sustainable community economies."
    }
  ];

  return (
    <main style={{ paddingBottom: "5rem" }}>
      {/* Page Header */}
      <section className="products-section" style={{ padding: "4rem 0 3rem 0", backgroundColor: "var(--color-dark-bg)", color: "var(--color-white)", textAlign: "center" }}>
        <div className="container">
          <span className="subtitle-gold">Our Value Statement</span>
          <h1 className="serif-heading" style={{ fontSize: "3rem", marginTop: "0.5rem" }}>Why Choose Us</h1>
          <div style={{ width: "60px", height: "3px", backgroundColor: "var(--color-gold)", margin: "1.5rem auto 0 auto" }}></div>
        </div>
      </section>

      {/* Stats Breakdown */}
      <section style={{ padding: "5rem 0", backgroundColor: "var(--color-white)" }}>
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "2.5rem" }} className="features-grid">
            {stats.map((stat, i) => (
              <div 
                key={i} 
                style={{ 
                  textAlign: "center", 
                  padding: "2.5rem 1.5rem", 
                  backgroundColor: "var(--color-light-bg)", 
                  borderRadius: "6px",
                  boxShadow: "var(--shadow-sm)",
                  borderBottom: "3px solid transparent",
                  transition: "var(--transition-smooth)"
                }}
                className={`feature-card-stat reveal ${i === 1 ? "delay-100" : i === 2 ? "delay-200" : i === 3 ? "delay-300" : ""}`} // Custom helper hook style
              >
                <div style={{ color: "var(--color-gold)", marginBottom: "1rem", display: "inline-block" }}>{stat.icon}</div>
                <div className="serif-heading" style={{ fontSize: "2.5rem", color: "var(--color-gold)", fontWeight: "bold", marginBottom: "0.5rem" }}>{stat.num}</div>
                <h3 style={{ fontSize: "0.95rem", fontWeight: 600, color: "var(--color-text-dark)", marginBottom: "0.5rem" }}>{stat.label}</h3>
                <p style={{ fontSize: "0.8rem", color: "var(--color-text-muted)", lineHeight: 1.5 }}>{stat.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Pillars */}
      <section style={{ padding: "5rem 0", backgroundColor: "var(--color-light-bg)" }}>
        <div className="container">
          <div className="section-header reveal">
            <span className="subtitle-gold">Corporate Integrity</span>
            <h2 className="serif-heading section-title">Pillars of Our Excellence</h2>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "3rem" }} className="about-grid">
            {pillars.map((pillar, i) => (
              <div 
                key={i} 
                style={{ 
                  backgroundColor: "var(--color-white)", 
                  padding: "3rem 2.5rem", 
                  borderRadius: "6px", 
                  boxShadow: "var(--shadow-sm)", 
                  display: "flex", 
                  gap: "1.5rem", 
                  alignItems: "flex-start" 
                }}
                className={i % 2 === 0 ? "reveal-left" : "reveal-right"}
              >
                <div style={{ color: "var(--color-gold)", backgroundColor: "var(--color-gold-light)", padding: "0.75rem", borderRadius: "50%", display: "inline-flex", flexShrink: 0 }}>
                  {pillar.icon}
                </div>
                <div>
                  <h3 className="serif-heading" style={{ fontSize: "1.35rem", marginBottom: "0.75rem", color: "var(--color-text-dark)" }}>{pillar.title}</h3>
                  <p style={{ color: "var(--color-text-muted)", fontSize: "0.9rem", lineHeight: 1.6 }}>{pillar.text}</p>
                </div>
              </div>
            ))}
          </div>

          <div style={{ textAlign: "center", marginTop: "4rem" }}>
            <a href="mailto:info@ariaint.in?subject=Corporate Sourcing Partnership" className="btn-primary">
              Partner With Us Today
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}

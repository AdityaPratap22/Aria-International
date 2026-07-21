"use client";

import React from "react";
import Image from "next/image";
import { CheckCircle2 } from "lucide-react";
export default function About() {

  return (
    <main style={{ paddingBottom: "5rem" }}>
      {/* Page Header */}
      <section className="products-section" style={{ padding: "4rem 0 3rem 0", backgroundColor: "var(--color-dark-bg)", color: "var(--color-white)", textAlign: "center" }}>
        <div className="container">
          <span className="subtitle-gold">Corporate Profile</span>
          <h1 className="serif-heading" style={{ fontSize: "3rem", marginTop: "0.5rem" }}>About Us</h1>
          <div style={{ width: "60px", height: "3px", backgroundColor: "var(--color-gold)", margin: "1.5rem auto 0 auto" }}></div>
        </div>
      </section>

      {/* Main Corporate Overview */}
      <section className="about-section" style={{ padding: "5rem 0" }}>
        <div className="container">
          <div style={{ width: "100%", textAlign: "left" }} className="reveal">
            <span className="subtitle-gold">Establishment & Craft</span>
            <h2 className="serif-heading" style={{ fontSize: "2.5rem", marginBottom: "1.5rem", color: "var(--color-text-dark)" }}>Timeless Heritage, Global Standards</h2>
            <div className="about-text" style={{ fontSize: "1.05rem", lineHeight: 1.8, color: "var(--color-text-muted)" }}>
              <p>
                Aria International is a premier Faridabad-based manufacturer, exporter, and supplier specializing in premium leather furniture, custom tables, leather boxes, brass statues, and sophisticated decorative items.
              </p>
              <p>
                Since our inception, we have merged traditional handcrafting techniques with modern production controls to deliver products that add absolute elegance and structural value to residential and commercial environments worldwide.
              </p>
              <p>
                We source the finest top-grain leathers, seasoned hardwoods, and solid brass alloys, ensuring every piece reflects the passion of our master craftsmen. Our items are custom-curated and packed to meet strict international shipping regulations.
              </p>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.25rem", margin: "2.5rem 0", maxWidth: "600px" }}>
              <div style={{ display: "flex", gap: "0.5rem", alignItems: "center" }}>
                <CheckCircle2 size={16} className="gold-text" />
                <span style={{ fontSize: "0.95rem", fontWeight: 500 }}>Premium Raw Materials</span>
              </div>
              <div style={{ display: "flex", gap: "0.5rem", alignItems: "center" }}>
                <CheckCircle2 size={16} className="gold-text" />
                <span style={{ fontSize: "0.95rem", fontWeight: 500 }}>Strict Export Quality Controls</span>
              </div>
              <div style={{ display: "flex", gap: "0.5rem", alignItems: "center" }}>
                <CheckCircle2 size={16} className="gold-text" />
                <span style={{ fontSize: "0.95rem", fontWeight: 500 }}>Customized Bespoke Designs</span>
              </div>
              <div style={{ display: "flex", gap: "0.5rem", alignItems: "center" }}>
                <CheckCircle2 size={16} className="gold-text" />
                <span style={{ fontSize: "0.95rem", fontWeight: 500 }}>Global Safe Delivery Logs</span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Leadership / Founder Section */}
      <section style={{ padding: "5rem 0", borderTop: "1px solid var(--color-border)", backgroundColor: "var(--color-white)" }}>
        <div className="container">
          <div className="about-grid" style={{ alignItems: "center" }}>
            {/* Left Side: Content */}
            <div className="about-content-side reveal-left">
              <span className="subtitle-gold">Leadership & Vision</span>
              <h2 className="serif-heading" style={{ fontSize: "2.2rem", color: "var(--color-text-dark)", marginBottom: "0.5rem" }}>Sunil Chauhan</h2>
              <p style={{ fontStyle: "italic", color: "var(--color-gold)", fontSize: "0.95rem", marginBottom: "1.25rem", fontWeight: 500 }}>Founder & Managing Director</p>
              
              <div className="about-text" style={{ fontSize: "0.95rem", lineHeight: 1.7 }}>
                <p>
                  Under the leadership of our founder, Sunil Chauhan, Aria International has transitioned from a custom design workshop into a highly respected global manufacturer and exporter of premium leather articles and metal handicrafts.
                </p>
                <p>
                  With more than two decades of industrial expertise, Sunil oversees the brand&apos;s creative direction, design integrity, and strict quality assurance parameters, ensuring every item exported matches international standards.
                </p>
              </div>

              <div style={{ 
                borderLeft: "3px solid var(--color-gold)", 
                paddingLeft: "1.5rem", 
                margin: "2rem 0", 
                fontStyle: "italic",
                color: "var(--color-text-dark)",
                fontSize: "1.05rem",
                lineHeight: 1.6
              }}>
                &ldquo;Every piece that leaves our facility carries with it the dedication of master artisans and our promise of lifetime durability and sophistication.&rdquo;
              </div>
            </div>

            {/* Right Side: Portrait Image */}
            <div className="about-image-side reveal-right" style={{ 
              width: "100%",
              maxWidth: "380px", 
              aspectRatio: "3/4", 
              margin: "0 auto",
              position: "relative",
              borderRadius: "8px",
              overflow: "hidden",
              boxShadow: "var(--shadow-lg)",
              border: "1px solid var(--color-border)"
            }}>
              <Image
                src="/images/owner.jpg"
                alt="Sunil Chauhan, Founder of Aria International"
                fill
                quality={95}
                style={{ objectFit: "cover", objectPosition: "top" }}
                sizes="(max-width: 768px) 100vw, 400px"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section style={{ backgroundColor: "var(--color-light-bg)", padding: "5rem 0" }}>
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "3rem" }}>
            <div style={{ backgroundColor: "var(--color-white)", padding: "2.5rem", borderRadius: "6px", boxShadow: "var(--shadow-sm)", borderTop: "3px solid var(--color-gold)" }} className="reveal-left">
              <h3 className="serif-heading" style={{ fontSize: "1.6rem", marginBottom: "1rem", color: "var(--color-text-dark)" }}>Our Mission</h3>
              <p style={{ color: "var(--color-text-muted)", fontSize: "0.95rem", lineHeight: 1.7 }}>
                To manufacture and export unparalleled quality interior decor elements that celebrate authentic Indian craftsmanship. We are committed to using ethically sourced premium raw materials, ensuring sustainability and creating long-term relationships with clients around the world.
              </p>
            </div>
            <div style={{ backgroundColor: "var(--color-white)", padding: "2.5rem", borderRadius: "6px", boxShadow: "var(--shadow-sm)", borderTop: "3px solid var(--color-gold)" }} className="reveal-right">
              <h3 className="serif-heading" style={{ fontSize: "1.6rem", marginBottom: "1rem", color: "var(--color-text-dark)" }}>Our Vision</h3>
              <p style={{ color: "var(--color-text-muted)", fontSize: "0.95rem", lineHeight: 1.7 }}>
                To be universally recognized as a premium brand for custom leather furniture and metal handicrafts. We aim to continuously expand our exporting network, adding elegance and character to homes, hotels, and luxury spaces in every country.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

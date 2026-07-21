"use client";

import React from "react";
import { Mail, Phone, MapPin, Clock, ShieldCheck } from "lucide-react";

export default function Contact() {
  return (
    <main style={{ paddingBottom: "6rem" }}>
      {/* Page Header */}
      <section className="products-section" style={{ padding: "4rem 0 3rem 0", backgroundColor: "var(--color-dark-bg)", color: "var(--color-white)", textAlign: "center" }}>
        <div className="container">
          <span className="subtitle-gold">Direct Communication</span>
          <h1 className="serif-heading" style={{ fontSize: "3rem", marginTop: "0.5rem" }}>Contact Us</h1>
          <div style={{ width: "60px", height: "3px", backgroundColor: "var(--color-gold)", margin: "1.5rem auto 0 auto" }}></div>
        </div>
      </section>

      {/* Main Content Section */}
      <section style={{ padding: "5rem 0", backgroundColor: "var(--color-white)" }}>
        <div className="container">
          <div className="about-grid" style={{ alignItems: "flex-start", gap: "4rem" }}>
            
            {/* Left Column: Direct Info & Guidelines */}
            <div className="about-content-side reveal-left">
              <span className="subtitle-gold">Corporate Desk</span>
              <h2 className="serif-heading" style={{ fontSize: "2.2rem", marginBottom: "1.5rem", color: "var(--color-text-dark)" }}>Connect Directly</h2>
              <div className="about-text" style={{ fontSize: "1rem", lineHeight: 1.8, color: "var(--color-text-muted)", marginBottom: "2.5rem" }}>
                <p>
                  At Aria International, we bypass middleman layers and automated ticketing boards. We believe premium custom craft deserves direct personal communication. Whether you are an interior architect seeking bespoke layouts, a hospitality buyer sourcing leather stools, or a collector acquiring solid brass decorations, your queries are processed directly by our managing and manufacturing desk.
                </p>
                <p>
                  Reach out via our direct email or corporate calling line. For wholesale partnerships or raw material authentication consultations, we typically reply with detailed specifications, logs, and logistics quotes within 24 business hours.
                </p>
              </div>

              {/* Helpful Guidelines */}
              <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "1.5rem", marginTop: "2rem" }}>
                <div style={{ display: "flex", gap: "1rem", alignItems: "flex-start" }}>
                  <div style={{ color: "var(--color-gold)", backgroundColor: "var(--color-gold-light)", padding: "0.6rem", borderRadius: "50%", display: "inline-flex", flexShrink: 0 }}>
                    <Clock size={20} />
                  </div>
                  <div>
                    <h4 style={{ fontSize: "1rem", fontWeight: 600, color: "var(--color-text-dark)", marginBottom: "0.25rem" }}>Operational Hours</h4>
                    <p style={{ fontSize: "0.85rem", color: "var(--color-text-muted)", lineHeight: 1.5 }}>
                      Monday – Saturday: 10:00 AM – 6:30 PM (IST)<br />
                      Closed on Sundays & Indian Public Holidays
                    </p>
                  </div>
                </div>

                <div style={{ display: "flex", gap: "1rem", alignItems: "flex-start" }}>
                  <div style={{ color: "var(--color-gold)", backgroundColor: "var(--color-gold-light)", padding: "0.6rem", borderRadius: "50%", display: "inline-flex", flexShrink: 0 }}>
                    <ShieldCheck size={20} />
                  </div>
                  <div>
                    <h4 style={{ fontSize: "1rem", fontWeight: 600, color: "var(--color-text-dark)", marginBottom: "0.25rem" }}>Secure Delivery Logs</h4>
                    <p style={{ fontSize: "0.85rem", color: "var(--color-text-muted)", lineHeight: 1.5 }}>
                      We arrange complete fumigated wood packing (ISPM-15) and phytosanitary logging to secure safe international freight lines to any country.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Direct Contact Info Card */}
            <div className="reveal-right" style={{
              backgroundColor: "var(--color-light-bg)",
              padding: "3rem 2.5rem",
              borderRadius: "8px",
              boxShadow: "var(--shadow-lg)",
              border: "1px solid var(--color-border)",
              width: "100%",
              maxWidth: "480px",
              margin: "0 auto"
            }}>
              <span className="subtitle-gold" style={{ fontSize: "0.75rem" }}>Official Directory</span>
              <h3 className="serif-heading" style={{ fontSize: "1.75rem", color: "var(--color-text-dark)", marginBottom: "2rem" }}>Direct Contacts</h3>

              <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
                
                {/* Email Info */}
                <div style={{ display: "flex", gap: "1.25rem", alignItems: "flex-start" }}>
                  <div style={{ color: "var(--color-white)", backgroundColor: "var(--color-gold)", padding: "0.75rem", borderRadius: "50%", display: "inline-flex", flexShrink: 0 }}>
                    <Mail size={18} />
                  </div>
                  <div>
                    <span style={{ fontSize: "0.75rem", color: "var(--color-gold)", textTransform: "uppercase", fontWeight: 600, letterSpacing: "0.05em" }}>Email Correspondence</span>
                    <div style={{ marginTop: "0.25rem" }}>
                      <a href="mailto:info@ariaint.in" className="serif-heading" style={{ fontSize: "1.35rem", color: "var(--color-text-dark)", textDecoration: "none", transition: "var(--transition-smooth)" }}
                         onMouseEnter={(e) => e.currentTarget.style.color = "var(--color-gold)"}
                         onMouseLeave={(e) => e.currentTarget.style.color = "var(--color-text-dark)"}>
                        info@ariaint.in
                      </a>
                    </div>
                    <p style={{ fontSize: "0.8rem", color: "var(--color-text-muted)", marginTop: "0.5rem", lineHeight: 1.4 }}>
                      Send design sheets, CAD layouts, or bespoke requirements catalogs.
                    </p>
                  </div>
                </div>

                {/* Phone Info */}
                <div style={{ display: "flex", gap: "1.25rem", alignItems: "flex-start" }}>
                  <div style={{ color: "var(--color-white)", backgroundColor: "var(--color-gold)", padding: "0.75rem", borderRadius: "50%", display: "inline-flex", flexShrink: 0 }}>
                    <Phone size={18} />
                  </div>
                  <div>
                    <span style={{ fontSize: "0.75rem", color: "var(--color-gold)", textTransform: "uppercase", fontWeight: 600, letterSpacing: "0.05em" }}>Corporate Phone Desk</span>
                    <div style={{ marginTop: "0.25rem" }}>
                      <a href="tel:+911294318821" className="serif-heading" style={{ fontSize: "1.35rem", color: "var(--color-text-dark)", textDecoration: "none", transition: "var(--transition-smooth)" }}
                         onMouseEnter={(e) => e.currentTarget.style.color = "var(--color-gold)"}
                         onMouseLeave={(e) => e.currentTarget.style.color = "var(--color-text-dark)"}>
                        +91 129-4318821
                      </a>
                    </div>
                    <p style={{ fontSize: "0.8rem", color: "var(--color-text-muted)", marginTop: "0.5rem", lineHeight: 1.4 }}>
                      Speak directly with our logistics, design, and estimation managers.
                    </p>
                  </div>
                </div>

                {/* Address Info */}
                <div style={{ display: "flex", gap: "1.25rem", alignItems: "flex-start" }}>
                  <div style={{ color: "var(--color-white)", backgroundColor: "var(--color-gold)", padding: "0.75rem", borderRadius: "50%", display: "inline-flex", flexShrink: 0 }}>
                    <MapPin size={18} />
                  </div>
                  <div>
                    <span style={{ fontSize: "0.75rem", color: "var(--color-gold)", textTransform: "uppercase", fontWeight: 600, letterSpacing: "0.05em" }}>Headquarters & Factory</span>
                    <p style={{ fontSize: "0.95rem", color: "var(--color-text-dark)", fontWeight: 500, marginTop: "0.25rem", lineHeight: 1.5 }}>
                      21, Sohna Rd, opp. Bethany Convent School, Pakhal, Faridabad, Selakhari, Haryana 121004, India
                    </p>
                  </div>
                </div>

              </div>

            </div>

          </div>
        </div>
      </section>
    </main>
  );
}

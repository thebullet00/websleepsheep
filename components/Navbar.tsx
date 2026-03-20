"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import logoImago from "../assets/logos/imago_sleepsheep_black.svg";

const NAV_ITEMS = [
  { href: "/#how-it-works", label: "How it works" },
  { href: "/#features", label: "Features" },
  { href: "/#pricing", label: "Pricing" },
  { href: "/#faq", label: "FAQ" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 120);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <header className={`nav ${scrolled ? "nav-scrolled" : ""}`}>
      <div className="section-container nav-inner">
        <a href="/" className="nav-brand" aria-label="Sleep Sheep home">
          <Image src={logoImago} alt="Sleep Sheep" className="brand-logo" priority />
        </a>

        <nav className="nav-links" aria-label="Primary">
          {NAV_ITEMS.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>

        <div className="nav-actions">
          <a className="btn btn-primary nav-cta" href="/#waitlist">
            Join waitlist
          </a>
          <button
            type="button"
            className="nav-hamburger"
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((prev) => !prev)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>

      <div
        className={`nav-overlay ${menuOpen ? "is-open" : ""}`}
        onClick={() => setMenuOpen(false)}
      />
      <aside className={`mobile-panel ${menuOpen ? "is-open" : ""}`} aria-hidden={!menuOpen}>
        <div className="mobile-panel-header">
          <p>Menu</p>
          <button type="button" onClick={() => setMenuOpen(false)} aria-label="Close menu">
            Close
          </button>
        </div>
        <nav className="mobile-links">
          {NAV_ITEMS.map((item) => (
            <a key={item.href} href={item.href} onClick={() => setMenuOpen(false)}>
              {item.label}
            </a>
          ))}
        </nav>
        <a className="btn btn-primary mobile-cta" href="/#waitlist" onClick={() => setMenuOpen(false)}>
          Join waitlist
        </a>
      </aside>
    </header>
  );
}

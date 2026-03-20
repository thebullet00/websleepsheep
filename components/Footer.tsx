import Image from "next/image";
import logoImago from "../assets/logos/imago_sleepsheep_black.svg";

function SocialIcons() {
  return (
    <div className="footer-socials" aria-label="Social links">
      <a href="#" aria-label="Instagram">
        <svg viewBox="0 0 24 24" fill="none" width="18" height="18" aria-hidden="true">
          <rect x="4" y="4" width="16" height="16" rx="4" stroke="currentColor" />
          <circle cx="12" cy="12" r="3.3" stroke="currentColor" />
          <circle cx="17" cy="7" r="1" fill="currentColor" />
        </svg>
      </a>
      <a href="#" aria-label="Twitter X">
        <svg viewBox="0 0 24 24" fill="none" width="18" height="18" aria-hidden="true">
          <path d="M5 5L19 19M19 5L5 19" stroke="currentColor" strokeLinecap="round" />
        </svg>
      </a>
      <a href="#" aria-label="TikTok">
        <svg viewBox="0 0 24 24" fill="none" width="18" height="18" aria-hidden="true">
          <path d="M13 5V14.2A3.2 3.2 0 1 1 9.8 11" stroke="currentColor" strokeLinecap="round" />
          <path d="M13 8.2C14 9.7 15.4 10.4 17 10.4" stroke="currentColor" strokeLinecap="round" />
        </svg>
      </a>
    </div>
  );
}

export default function Footer() {
  return (
    <footer className="footer">
      <div className="section-container">
        <div className="footer-grid">
          <section>
            <div className="footer-brand">
              <Image src={logoImago} alt="Sleep Sheep" className="brand-logo brand-logo-footer" />
            </div>
            <p className="muted body-small">Smart mornings start with softer nights.</p>
            <SocialIcons />
          </section>

          <section>
            <h3 className="footer-title">Product</h3>
            <ul className="footer-links">
              <li><a href="/#how-it-works">How it works</a></li>
              <li><a href="/#features">Features</a></li>
              <li><a href="/#pricing">Pricing</a></li>
              <li><a href="/#faq">FAQ</a></li>
              <li><a href="#">Blog (soon)</a></li>
            </ul>
          </section>

          <section>
            <h3 className="footer-title">Legal</h3>
            <ul className="footer-links">
              <li><a href="/privacy">Privacy Policy</a></li>
              <li><a href="/terms">Terms of Service</a></li>
              <li><a href="/cookies">Cookie Policy</a></li>
              <li><a href="mailto:media@sleepsheep.app">Contact</a></li>
            </ul>
          </section>
        </div>

        <p className="footer-copy muted body-small">
          © 2025 Sleep Sheep. All rights reserved. Made with love and very little sleep.
        </p>
      </div>
    </footer>
  );
}

"use client";

import { useEffect, useRef } from "react";
import DeviceFrame from "../components/DeviceFrame";
import FAQ from "../components/FAQ";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import PricingCard from "../components/PricingCard";
import Sheep from "../components/Sheep";
import StarField from "../components/StarField";
import WaitlistForm from "../components/WaitlistForm";

const STATS = [
  { value: "90 min", label: "Sleep cycle length" },
  { value: "5–6 cycles", label: "Per night" },
  { value: "~20 min", label: "Optimal wake window" },
];

const HOW_IT_WORKS = [
  {
    number: "01",
    title: "You fall asleep",
    description: "Sleep Sheep starts listening.\nQuietly tracking your night rhythm.",
  },
  {
    number: "02",
    title: "It maps your sleep cycles in real time",
    description: "The app reads your sleep movement.\nIt estimates your light/deep windows.",
  },
  {
    number: "03",
    title: "Your alarm fires at the lightest moment",
    description: "You wake during your gentlest phase.\nLess fog, more energy.",
  },
];

const FEATURES = [
  {
    title: "Smart alarm",
    text: "A wake-up window that adapts.\nBuilt to reduce morning grogginess.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <circle cx="12" cy="13" r="6.2" stroke="var(--purple-light)" />
        <path d="M12 10V13.3L14.4 14.8" stroke="var(--white-warm)" strokeLinecap="round" />
        <path d="M7.4 5L5.2 7" stroke="var(--border)" strokeLinecap="round" />
        <path d="M16.6 5L18.8 7" stroke="var(--border)" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "Sleep cycles graph",
    text: "Understand your night at a glance.\nTrends without clutter.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M4 17L8 14L11 16L16 9L20 12" stroke="var(--purple-light)" strokeLinecap="round" />
        <path d="M4 19H20" stroke="var(--border)" />
      </svg>
    ),
  },
  {
    title: "Morning energy score",
    text: "A simple daily check-in.\nSee how rested you feel.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M12 5L13.8 8.6L17.8 9.2L14.9 12L15.6 16L12 14.1L8.4 16L9.1 12L6.2 9.2L10.2 8.6Z" stroke="var(--purple-light)" />
      </svg>
    ),
  },
  {
    title: "Sleep sounds",
    text: "Soft ambient loops for bedtime.\nMade for calm routines.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M5 14H8L12 18V6L8 10H5V14Z" stroke="var(--purple-light)" />
        <path d="M15 10.5C16.2 11.5 16.2 12.5 15 13.5" stroke="var(--white-warm)" strokeLinecap="round" />
        <path d="M17.5 8.5C19.8 10.8 19.8 13.2 17.5 15.5" stroke="var(--border)" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "Wearable sync",
    text: "Optional integrations over time.\nUse what you already have.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <rect x="8.3" y="6" width="7.4" height="12" rx="3.2" stroke="var(--purple-light)" />
        <path d="M10 6V3.6M14 20.4V18" stroke="var(--border)" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "Weekly insights",
    text: "Small summaries each week.\nSpot patterns and improve faster.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <rect x="4.5" y="5" width="15" height="14" rx="2.5" stroke="var(--purple-light)" />
        <path d="M8 14V11M12 14V9M16 14V12" stroke="var(--white-warm)" strokeLinecap="round" />
      </svg>
    ),
  },
];

const TESTIMONIALS = [
  {
    initials: "AL",
    quote: "I wake up clearer and less stressed than with my old alarm.",
    name: "Ana L.",
    role: "Founder, Health Startup",
  },
  {
    initials: "MC",
    quote: "The sheep makes bedtime feel intentional, not chaotic.",
    name: "Marc C.",
    role: "iOS Engineer",
  },
  {
    initials: "RP",
    quote: "Simple data, better mornings. Exactly what I needed.",
    name: "Rita P.",
    role: "Product Manager",
  },
];

export default function HomePage() {
  const stepsRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const section = stepsRef.current;
    if (!section) return;

    const items = Array.from(section.querySelectorAll<HTMLElement>("[data-reveal]"));
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2, rootMargin: "0px 0px -8% 0px" }
    );

    items.forEach((item, index) => {
      item.style.transitionDelay = `${index * 120}ms`;
      observer.observe(item);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <main className="page">
      <Navbar />

      <section className="hero-section">
        <StarField className="hero-stars" />
        <div className="atmosphere-blob blob-a" />
        <div className="atmosphere-blob blob-b" />
        <div className="section-container hero-grid">
          <div className="hero-visual">
            <Sheep size={220} glow className="floating-sheep" />
          </div>
          <div className="hero-copy">
            <p className="hero-pill">✦ Now building · Join the waitlist</p>
            <h1 className="hero-gradient-title">
              Wake up clear,
              <br />
              not just awake.
            </h1>
            <p className="muted">Sleep Sheep wakes you in your lightest phase for softer mornings.</p>
            <div className="hero-actions">
              <a href="#waitlist" className="btn btn-primary">Join the waitlist</a>
              <a href="#how-it-works" className="btn btn-outline">See how it works</a>
            </div>
            <div className="hero-micro-pills">
              <span>Free to start</span>
              <span>iOS app</span>
              <span>Coming 2025</span>
            </div>
          </div>
        </div>
      </section>

      <section className="section-problem" id="problem">
        <div className="section-container section-centered">
          <h2>
            Most alarms wake you up at the worst possible moment.
          </h2>
          <p className="muted">
            Sleep cycles shift through the night. Wake in deep sleep and your body starts the day
            heavy, slow, and cognitively foggy.
          </p>
          <div className="stats-grid">
            {STATS.map((stat) => (
              <article key={stat.value}>
                <p className="stat-value">{stat.value}</p>
                <p className="muted body-small">{stat.label}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="surface section-how" id="how-it-works" ref={stepsRef}>
        <div className="section-container section-centered">
          <h2>How it works</h2>
          <div className="steps-list">
            {HOW_IT_WORKS.map((step) => (
              <article key={step.number} data-reveal className="fade-up step-item">
                <span>{step.number}</span>
                <div>
                  <h3>{step.title}</h3>
                  <p className="muted">{step.description}</p>
                </div>
              </article>
            ))}
          </div>
          <a href="#" className="science-link">Learn about the science →</a>
        </div>
      </section>

      <section className="section-mockup">
        <div className="section-container section-centered">
          <h2>Everything you need, nothing you don&apos;t.</h2>
          <div className="devices-row">
            <DeviceFrame variant="home" title="Sleep start" />
            <DeviceFrame variant="cycles" title="Cycles map" />
            <DeviceFrame variant="alarm" title="Gentle alarm" />
          </div>
        </div>
      </section>

      <section className="section-features" id="features">
        <div className="section-container section-centered">
          <h2>Core features built for real mornings.</h2>
          <div className="features-grid">
            {FEATURES.map((feature) => (
              <article key={feature.title} className="card feature-card">
                <div className="feature-icon">{feature.icon}</div>
                <h3>{feature.title}</h3>
                <p className="muted">{feature.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-mascot">
        <div className="section-container section-centered">
          <Sheep size={180} glow className="floating-sheep" />
          <h2>
            Meet your sleep companion.
          </h2>
          <p className="muted">
            Sleep Sheep is there when your day winds down, and there again at sunrise.
            <br />
            A soft guide for better nights, one cycle at a time.
          </p>
          <p className="mascot-quote">There every night. Gone by morning.</p>
        </div>
      </section>

      <section className="surface section-pricing" id="pricing">
        <div className="section-container section-centered">
          <h2>Choose your sleep plan.</h2>
          <div className="pricing-grid">
            <PricingCard
              name="Free"
              price="€0"
              priceHint="Forever starter tier"
              features={["Smart alarm", "Basic cycle tracking", "Morning log", "Weekly snapshot"]}
              cta="Start free"
            />
            <PricingCard
              name="Pro"
              price="€3.99/mes"
              priceHint="For deeper sleep insights"
              features={["Everything in Free", "Advanced cycle graph", "Sleep sounds", "Wearable sync", "Priority updates"]}
              cta="Go Pro"
              highlighted
            />
            <PricingCard
              name="Annual"
              price="€29.99/año"
              priceHint="Save 37%"
              features={["Everything in Pro", "Best value pricing", "Early features", "Priority support", "Annual reports"]}
              cta="Choose annual"
            />
          </div>
          <p className="muted body-small pricing-note">
            No credit card required to start. Cancel anytime.
          </p>
        </div>
      </section>

      <section className="section-faq" id="faq">
        <div className="section-container section-centered">
          <h2>Frequently asked questions</h2>
          <FAQ />
        </div>
      </section>

      <section className="surface section-social-proof">
        <div className="section-container">
          <div className="testimonials-grid">
            {TESTIMONIALS.map((item) => (
              <article key={item.name} className="card testimonial-card">
                <div className="avatar">{item.initials}</div>
                <p>{item.quote}</p>
                <p className="body-small muted">{item.name} · {item.role}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-press">
        <div className="section-container section-centered">
          <p className="eyebrow">As seen in</p>
          <div className="press-logos">
            <span>Product Hunt</span>
            <span>TechCrunch</span>
            <span>AppAdvice</span>
          </div>
          <a href="mailto:media@sleepsheep.app" className="body-small muted">
            Are you a journalist? media@sleepsheep.app
          </a>
        </div>
      </section>

      <section className="section-waitlist" id="waitlist">
        <div className="section-container section-centered">
          <h2>Be the first to sleep better.</h2>
          <WaitlistForm />
          <p className="body-small muted">Join 1,240 people already waiting.</p>
          <p className="body-small muted">No spam. Unsubscribe anytime.</p>
        </div>
      </section>

      <Footer />
    </main>
  );
}

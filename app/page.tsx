"use client";

import { useEffect, useRef } from "react";
import Sheep from "../components/Sheep";
import StarField from "../components/StarField";

const STEPS = [
  {
    number: "01",
    title: "You fall asleep",
    description: "Set your ideal wake-up range.\nThen close your eyes and drift off.",
  },
  {
    number: "02",
    title: "Sleep Sheep tracks your cycles",
    description: "Through the night, the app estimates\nwhere you are in each sleep phase.",
  },
  {
    number: "03",
    title: "You wake up at the perfect moment",
    description: "When your light-sleep window opens,\nSleep Sheep wakes you up gently.",
  },
];

const FEATURES = [
  {
    title: "Smart alarm",
    text: "Wakes you in your best window.\nLess groggy, more ready.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <circle cx="12" cy="13" r="6.5" stroke="var(--purple-light)" />
        <path d="M12 10V13.5L14.5 15" stroke="var(--white-warm)" strokeLinecap="round" />
        <path d="M7 4.5L4.8 6.7" stroke="var(--border)" strokeLinecap="round" />
        <path d="M17 4.5L19.2 6.7" stroke="var(--border)" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "Sleep insights",
    text: "See how nights evolve over time.\nSimple patterns, clear feedback.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M4 17L8 13L11 15.5L16 9L20 12" stroke="var(--purple-light)" strokeLinecap="round" />
        <path d="M4 19H20" stroke="var(--border)" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "Morning log",
    text: "Log mood and energy in seconds.\nBuild awareness day by day.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <rect x="5" y="4.5" width="14" height="15" rx="2.5" stroke="var(--purple-light)" />
        <path d="M9 9H15" stroke="var(--white-warm)" strokeLinecap="round" />
        <path d="M9 13H13" stroke="var(--border)" strokeLinecap="round" />
      </svg>
    ),
  },
];

const TESTIMONIALS = [
  {
    quote: "I stopped waking up confused. It feels gentle and surprisingly human.",
    name: "Maya, Product Designer",
  },
  {
    quote: "Two weeks in and mornings feel less like a fight.",
    name: "Leo, Software Engineer",
  },
  {
    quote: "The sheep makes bedtime feel calm instead of stressful.",
    name: "Nora, Medical Student",
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
      <section
        style={{
          position: "relative",
          minHeight: "100svh",
          overflow: "hidden",
          display: "flex",
          alignItems: "center",
        }}
      >
        <StarField
          className="starfield"
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            zIndex: 0,
          }}
        />
        <div
          className="atmosphere-blob"
          style={{ width: "14rem", height: "14rem", top: "12%", left: "-2rem" }}
        />
        <div
          className="atmosphere-blob"
          style={{ width: "18rem", height: "18rem", right: "-4rem", bottom: "8%" }}
        />

        <div
          className="section-container"
          style={{ position: "relative", zIndex: 1, textAlign: "center", paddingTop: "3rem", paddingBottom: "3rem" }}
        >
          <p className="eyebrow">Sleep Sheep · Coming Soon</p>
          <h1
            className="hero-gradient-title"
            style={{
              margin: "0.7rem 0 0",
              fontSize: "clamp(2rem, 8vw, 4.2rem)",
              lineHeight: 1.08,
              fontWeight: 400,
              letterSpacing: "-0.02em",
            }}
          >
            Wake up feeling
            <br />
            actually rested.
          </h1>

          <p className="muted" style={{ margin: "1rem auto 0", maxWidth: "33ch" }}>
            A softer alarm that waits for your right sleep moment.
          </p>

          <div
            style={{
              marginTop: "1.4rem",
              display: "flex",
              gap: "0.7rem",
              justifyContent: "center",
              flexWrap: "wrap",
            }}
          >
            <button className="btn btn-primary" type="button">
              Download on App Store
            </button>
            <button className="btn btn-outline" type="button">
              Join the waitlist
            </button>
          </div>

          <p className="body-small muted" style={{ marginTop: "0.75rem" }}>
            Anonymous · 2 min · No sign-up
          </p>

          <div style={{ marginTop: "1.35rem", display: "flex", justifyContent: "center" }}>
            <Sheep
              size={168}
              className="hero-sheep"
              style={{ animation: "sheepFloat 4.8s ease-in-out infinite" }}
            />
          </div>
        </div>
      </section>

      <section style={{ padding: "5.5rem 0", textAlign: "center" }}>
        <div className="section-container" style={{ maxWidth: "44rem" }}>
          <h2
            style={{
              margin: 0,
              fontSize: "clamp(1.7rem, 6vw, 2.8rem)",
              lineHeight: 1.16,
              fontWeight: 400,
            }}
          >
            Most alarms wake you up at the worst possible moment.
          </h2>
          <p className="muted" style={{ margin: "1rem auto 0", maxWidth: "38ch" }}>
            Sleep cycles shift all night. If your alarm rings in deep sleep, your brain and body
            fight the wake-up, and you start the day heavy, foggy, and drained.
          </p>
        </div>
      </section>

      <section ref={stepsRef} className="surface" style={{ padding: "5rem 0" }}>
        <div className="section-container" style={{ maxWidth: "42rem" }}>
          {STEPS.map((step) => (
            <article
              key={step.number}
              data-reveal
              className="fade-up"
              style={{
                display: "grid",
                gridTemplateColumns: "auto 1fr",
                gap: "1rem",
                alignItems: "start",
                padding: "1.2rem 0",
                borderBottom: "1px solid var(--border)",
              }}
            >
              <span
                style={{
                  fontSize: "2rem",
                  lineHeight: 1,
                  color: "var(--purple-light)",
                  fontWeight: 300,
                  minWidth: "2.6ch",
                }}
              >
                {step.number}
              </span>
              <div>
                <h3 style={{ margin: 0, fontSize: "1.25rem", lineHeight: 1.4, fontWeight: 400 }}>
                  {step.title}
                </h3>
                <p className="muted" style={{ margin: "0.45rem 0 0", whiteSpace: "pre-line" }}>
                  {step.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section style={{ padding: "5.5rem 0", textAlign: "center" }}>
        <div className="section-container" style={{ maxWidth: "38rem" }}>
          <div style={{ display: "flex", justifyContent: "center", marginBottom: "1rem" }}>
            <Sheep size={200} style={{ animation: "sheepFloat 5.4s ease-in-out infinite" }} />
          </div>
          <h2
            style={{
              margin: 0,
              fontSize: "clamp(1.7rem, 6vw, 2.7rem)",
              lineHeight: 1.16,
              fontWeight: 400,
            }}
          >
            Meet your sleep companion.
          </h2>
          <p className="muted" style={{ margin: "0.9rem auto 0", maxWidth: "35ch" }}>
            Sleep Sheep sits with you at bedtime and greets you in the morning.
            <br />
            A tiny ritual that makes nights feel safer and softer.
          </p>
        </div>
      </section>

      <section style={{ padding: "0 0 5.5rem" }}>
        <div className="section-container">
          <div
            style={{
              display: "grid",
              gap: "0.9rem",
              gridTemplateColumns: "1fr",
            }}
          >
            {FEATURES.map((feature) => (
              <article key={feature.title} className="card" style={{ padding: "1.1rem" }}>
                <div style={{ marginBottom: "0.55rem" }}>{feature.icon}</div>
                <h3 style={{ margin: 0, fontSize: "1.05rem", lineHeight: 1.45, fontWeight: 400 }}>
                  {feature.title}
                </h3>
                <p className="muted" style={{ margin: "0.45rem 0 0", whiteSpace: "pre-line" }}>
                  {feature.text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="surface" style={{ padding: "5rem 0" }}>
        <div className="section-container">
          <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "0.9rem" }}>
            {TESTIMONIALS.map((item) => (
              <article key={item.name} className="card" style={{ padding: "1rem" }}>
                <p style={{ margin: 0 }}>{item.quote}</p>
                <p className="body-small muted" style={{ margin: "0.45rem 0 0" }}>
                  {item.name}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: "5.5rem 0 4.5rem" }}>
        <div className="section-container" style={{ maxWidth: "44rem", textAlign: "center" }}>
          <h2
            style={{
              margin: 0,
              fontSize: "clamp(1.7rem, 6vw, 2.8rem)",
              lineHeight: 1.16,
              fontWeight: 400,
            }}
          >
            Be the first to sleep better.
          </h2>
          <form
            style={{
              marginTop: "1.2rem",
              display: "grid",
              gridTemplateColumns: "1fr",
              gap: "0.6rem",
            }}
          >
            <input
              type="email"
              className="input-base"
              placeholder="you@email.com"
              aria-label="Email address"
            />
            <button type="submit" className="btn btn-primary" style={{ width: "100%" }}>
              Join the waitlist
            </button>
          </form>
          <p className="body-small muted" style={{ marginTop: "0.7rem" }}>
            No spam. Ever.
          </p>
        </div>
      </section>

      <footer style={{ padding: "0 0 2rem" }}>
        <div className="section-container">
          <hr className="soft-divider" />
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              gap: "0.8rem",
              alignItems: "center",
              flexWrap: "wrap",
              paddingTop: "0.9rem",
            }}
          >
            <p style={{ margin: 0 }}>Sleep Sheep</p>
            <nav style={{ display: "flex", gap: "0.75rem" }} aria-label="Footer links">
              <a className="muted body-small" href="#">
                Privacy
              </a>
              <a className="muted body-small" href="#">
                Terms
              </a>
              <a className="muted body-small" href="#">
                Contact
              </a>
            </nav>
          </div>
        </div>
      </footer>

      <style jsx>{`
        @media (min-width: 768px) {
          section:nth-of-type(5) > div > div,
          section:nth-of-type(6) > div > div {
            grid-template-columns: repeat(3, 1fr);
          }

          section:nth-of-type(7) form {
            grid-template-columns: 1fr auto;
          }

          section:nth-of-type(7) form button {
            width: auto;
          }
        }
      `}</style>
    </main>
  );
}

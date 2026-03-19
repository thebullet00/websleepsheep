"use client";

import { useRef, useState } from "react";

const FAQ_ITEMS = [
  {
    q: "How does Sleep Sheep detect my sleep cycles?",
    a: "We combine movement and timing patterns to estimate cycle phases and trigger your alarm in the lightest window available.",
  },
  {
    q: "Does it work without a wearable?",
    a: "Yes. Sleep Sheep is designed to work with your iPhone only, and can optionally improve insights with wearable sync.",
  },
  {
    q: "Is my sleep data private?",
    a: "Yes. Your data is encrypted in transit and at rest, and you can request deletion at any time.",
  },
  {
    q: "Which devices are supported?",
    a: "At launch, Sleep Sheep is built for iOS. Wearable integrations will roll out progressively.",
  },
  {
    q: "When is the app launching?",
    a: "We are currently in pre-launch. Join the waitlist to get early access updates and release invites.",
  },
  {
    q: "How is this different from Sleep Cycle?",
    a: "Sleep Sheep focuses on a calmer wake-up ritual with fewer distractions, clearer insights, and a softer daily experience.",
  },
  {
    q: "Can I try it for free?",
    a: "Yes. We offer a free tier so you can test the core alarm experience before upgrading.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const contentRefs = useRef<Array<HTMLDivElement | null>>([]);

  return (
    <div className="faq-list">
      {FAQ_ITEMS.map((item, index) => {
        const open = openIndex === index;
        const contentHeight = contentRefs.current[index]?.scrollHeight ?? 0;

        return (
          <article key={item.q} className={`faq-item ${open ? "is-open" : ""}`}>
            <button
              type="button"
              className="faq-trigger"
              onClick={() => setOpenIndex((prev) => (prev === index ? null : index))}
              aria-expanded={open}
              aria-controls={`faq-panel-${index}`}
            >
              <span>{item.q}</span>
              <span className="faq-sign">{open ? "−" : "+"}</span>
            </button>
            <div
              id={`faq-panel-${index}`}
              className="faq-panel"
              style={{ maxHeight: open ? `${contentHeight + 8}px` : "0px" }}
            >
              <div ref={(node) => { contentRefs.current[index] = node; }} className="faq-content">
                <p className="muted">{item.a}</p>
              </div>
            </div>
          </article>
        );
      })}
    </div>
  );
}

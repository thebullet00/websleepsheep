type PricingCardProps = {
  name: string;
  price: string;
  priceHint?: string;
  features: string[];
  cta: string;
  highlighted?: boolean;
};

export default function PricingCard({
  name,
  price,
  priceHint,
  features,
  cta,
  highlighted = false,
}: PricingCardProps) {
  return (
    <article className={`card pricing-card ${highlighted ? "is-highlighted" : ""}`}>
      {highlighted && <p className="pricing-badge">Most popular</p>}
      <h3>{name}</h3>
      <p className="pricing-price">{price}</p>
      {priceHint && <p className="muted body-small">{priceHint}</p>}
      <ul className="pricing-features">
        {features.map((feature) => (
          <li key={feature}>
            <svg width="16" height="16" viewBox="0 0 20 20" fill="none" aria-hidden="true">
              <path d="M4.5 10L8.3 13.8L15.5 6.6" stroke="var(--purple-light)" strokeLinecap="round" />
            </svg>
            <span>{feature}</span>
          </li>
        ))}
      </ul>
      <a href="/#waitlist" className={`btn ${highlighted ? "btn-primary" : "btn-outline"}`}>
        {cta}
      </a>
    </article>
  );
}

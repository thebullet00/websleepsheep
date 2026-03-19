import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";

export default function CookiesPage() {
  return (
    <main className="page">
      <Navbar />
      <section className="legal-section">
        <div className="section-container legal-content">
          <h1>Cookie Policy</h1>
          <p className="muted">Last updated: March 2025</p>

          <h2>What cookies we use</h2>
          <p>
            We use essential cookies for core functionality and optional analytics cookies to
            understand traffic and improve product decisions.
          </p>

          <h2>Why we use them</h2>
          <p>
            Cookies help keep sessions stable, remember preferences, and measure feature
            performance in a privacy-aware way.
          </p>

          <h2>Managing preferences</h2>
          <p>
            You can accept or manage cookie preferences from the banner and update browser settings
            at any time.
          </p>
        </div>
      </section>
      <Footer />
    </main>
  );
}

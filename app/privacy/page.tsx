import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";

export default function PrivacyPage() {
  return (
    <main className="page">
      <Navbar />
      <section className="legal-section">
        <div className="section-container legal-content">
          <h1>Privacy Policy</h1>
          <p className="muted">Last updated: March 2025</p>

          <h2>What data we collect</h2>
          <p>
            We collect account details, sleep session metrics, app usage events, and support
            messages to provide Sleep Sheep and improve reliability.
          </p>

          <h2>How we use it</h2>
          <p>
            Data is used to deliver core features, personalize your wake-up timing, maintain
            service quality, and communicate product updates.
          </p>

          <h2>Data retention</h2>
          <p>
            We retain personal data only as long as needed for service delivery, legal compliance,
            and security purposes.
          </p>

          <h2>Third parties</h2>
          <p>
            We work with vetted providers for hosting, analytics, and email delivery under strict
            data processing agreements.
          </p>

          <h2>Your rights (GDPR)</h2>
          <p>
            You can request access, correction, export, restriction, or deletion of your data at
            any time, and you may object to processing where applicable.
          </p>

          <h2>Contact</h2>
          <p>
            For privacy requests, contact us at <a href="mailto:privacy@sleepsheep.app">privacy@sleepsheep.app</a>.
          </p>
        </div>
      </section>
      <Footer />
    </main>
  );
}

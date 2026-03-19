import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";

export default function TermsPage() {
  return (
    <main className="page">
      <Navbar />
      <section className="legal-section">
        <div className="section-container legal-content">
          <h1>Terms of Service</h1>
          <p className="muted">Last updated: March 2025</p>

          <h2>Acceptance</h2>
          <p>
            By using Sleep Sheep, you agree to these Terms and any additional policies referenced
            within the service.
          </p>

          <h2>Use of service</h2>
          <p>
            You agree to use the app lawfully, avoid misuse, and keep your account information
            accurate and secure.
          </p>

          <h2>Subscriptions &amp; billing</h2>
          <p>
            Paid plans renew automatically unless cancelled before renewal. Pricing and trial terms
            are shown clearly in-app before purchase.
          </p>

          <h2>Intellectual property</h2>
          <p>
            Sleep Sheep branding, software, and content are protected by intellectual property laws
            and may not be copied without permission.
          </p>

          <h2>Disclaimers</h2>
          <p>
            Sleep Sheep provides wellness guidance and is not a medical device or a substitute for
            professional medical advice.
          </p>

          <h2>Governing law</h2>
          <p>
            These Terms are governed by applicable local law where Sleep Sheep operates, unless
            mandatory consumer rights state otherwise.
          </p>
        </div>
      </section>
      <Footer />
    </main>
  );
}

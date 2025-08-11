import React, { useState } from "react";
import "./Privacy.css";
import { Link } from "react-router-dom";

const Section = ({ title, children }) => {
  const [open, setOpen] = useState(true);
  return (
    <div className="policy-section">
      <button className="section-toggle" onClick={() => setOpen(!open)}>
        <span className="chev">{open ? "▼" : "▶"}</span>
        <span className="section-title">{title}</span>
      </button>
      {open && <div className="section-body">{children}</div>}
    </div>
  );
};

const Privacy = () => {
  return (
    <div className="privacy-page">
      <div className="privacy-hero">
        <h1>Privacy & Policy</h1>
        <p>Your privacy matters — here’s how we handle data at MyAuthApp.</p>
      </div>

      <div className="privacy-content">
        <aside className="toc">
          <h3>Contents</h3>
          <ul>
              <li><Link to="/privacy">Introduction</Link></li>
  <li><Link to="/privacy">Data We Collect</Link></li>
  <li><Link to="/privacy">How We Use Data</Link></li>
  <li><Link to="/privacy">Security</Link></li>
  <li><Link to="/privacy">Sharing & Third Parties</Link></li>
  <li><Link to="/privacy">Your Rights</Link></li>
  <li><Link to="/privacy">Policy Updates</Link></li>
            <Link to="/contact">Contact</Link>
          </ul>
        </aside>

        <main className="policy-panel">
          <Section title="Introduction" id="intro">
            <p>
              MyAuthApp is committed to protecting your privacy. This policy explains what information we collect, why we collect it,
              how we use it, and your rights regarding that information.
            </p>
          </Section>

          <Section title="Data We Collect" id="data">
            <ul>
              <li><strong>Account info:</strong> name, email, hashed password (we never store plain-text passwords).</li>
              <li><strong>Usage data:</strong> basic analytics such as page visits and feature usage to improve the product.</li>
              <li><strong>Device & connection:</strong> IP address, browser type, and device metadata for security & debugging.</li>
            </ul>
          </Section>

          <Section title="How We Use Data" id="use">
            <p>
              We use data to provide and improve services, authenticate users (via JWT), secure accounts, respond to support requests,
              and send important notifications such as security alerts. We do not use your data for targeted advertising.
            </p>
          </Section>

          <Section title="Security" id="security">
            <p>
              We use industry-standard security measures such as hashed passwords (bcrypt), HTTPS, and secure JWT signing. While we
              strive to protect your data, no system is 100% secure — report concerns to our support contact below immediately.
            </p>
          </Section>

          <Section title="Sharing & Third Parties" id="sharing">
            <p>
              We do not sell personal data. We may share data with trusted third-party services that help deliver features
              (e.g., email providers, analytics). Any third party we work with is contractually required to protect your data.
            </p>
          </Section>

          <Section title="Your Rights" id="rights">
            <p>
              You may access, update, or delete your account information. To request deletion or a copy of your data, contact support.
              We’ll respond per applicable law.
            </p>
          </Section>

          <Section title="Policy Updates" id="updates">
            <p>
              We may update this policy occasionally. When changes are significant, we’ll display a prominent notice and include
              the effective date at the top of the page.
            </p>
          </Section>

          <Section title="Contact" id="contact">
            <p>
              Questions or requests? Email <a href="mailto:support@myauthapp.com">support@myauthapp.com</a> or visit our contact page.
            </p>
          </Section>

          <div className="policy-footer">
            <small>Effective date: August 10, 2025</small>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Privacy;

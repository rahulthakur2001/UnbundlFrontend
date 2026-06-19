import React, { useState } from "react";
import "./HeroSection.css";
import Header from "./Header";
import banner from "../../images/banner.png";
import Result from "./Result";

export default function HeroSection() {
  const [gap, setGap] = useState("");
  const [consent, setConsent] = useState(false);

  return (
    <div>
      <Header />
      <section className="hero">
        <div className="hero-top">
          <div className="hero-text">
            <h1>Invisible Aligners for a dream smile</h1>
            <p>
              Book a Scan and avail a free Orthodontist Consult{" "}
              <span className="hero-accent">worth ₹1500</span>
            </p>
          </div>
          <div className="hero-image">
            <img
              src={banner}
              alt="Smiling woman holding an invisible aligner"
            />
          </div>
        </div>

        <div className="hero-form">
          <p className="hero-form-question">
            Do you have Teeth Gaps or Crooked Teeth?
          </p>

          <div className="hero-radio-row">
            <label>
              <input
                type="radio"
                name="gap"
                checked={gap === "yes"}
                onChange={() => setGap("yes")}
              />
              Yes
            </label>
            <label>
              <input
                type="radio"
                name="gap"
                checked={gap === "no"}
                onChange={() => setGap("no")}
              />
              No
            </label>
          </div>

          <div className="hero-input-row">
            <div className="hero-input-group">
              <label>Full Name*</label>
              <input type="text" placeholder="Ajay Kumar" />
            </div>
            <div className="hero-input-group hero-phone">
              <span>+91</span>
              <input type="text" placeholder="Mobile number*" />
            </div>
            <button className="hero-cta">Book a Free Scan</button>
          </div>

          <label className="hero-consent">
            <input
              type="checkbox"
              checked={consent}
              onChange={() => setConsent(!consent)}
            />
            <span>
              I hereby consent to receive calls / messages from Whistle and its
              partners and override DND settings.
            </span>
          </label>
        </div>
      </section>

      <div className="ws-clove-wrap">
        <div className="ws-clove">
          <p>
            Book a Free 3D Teeth Scan and Orthodontist Consult in a Clove Dental
            Clinic near you.
          </p>
          <div className="ws-clove-right">
            <div className="ws-clove-logo">
              clove:)
              <small>DENTAL</small>
            </div>
            <a className="ws-clove-find" href="#clinics">
              Find Clinic ⌄
            </a>
          </div>
        </div>
      </div>

      <div className="ws-marquee-wrap">
        <div className="ws-marquee-track">
          {[0, 1].map((rep) => (
            <React.Fragment key={rep}>
              <span>Our inaugural launch benefit</span>
              <span>
                <b>Free teeth scan</b> worth ₹500
              </span>
              <span>
                <b>Free orthodontic consultation</b> worth ₹1500
              </span>
              <span>Our inaugural launch benefit</span>
              <span>
                <b>Free teeth scan</b> worth ₹500
              </span>
            </React.Fragment>
          ))}
        </div>
      </div>

      <div className="ws-section ws-dream">
        <div className="ws-inner">
          <div className="ws-dream-text">
            <h2>Dream smiles achieved secretly</h2>
            <p>
              Experience the superior quality of our Whistle Aligners crafted
              with 3-layer PU material. With 450+ clinics nationwide, enjoy
              comfortable treatment by expert orthodontists at House of Clove
            </p>
            <p>
              The pricing is different for every case. Cases with higher
              complexity requiring more aligners and additional time and effort
              from our dentists.
            </p>
          </div>
          <div className="ws-price-card">
            <div className="ws-aligner-graphic" />
            <h3>Whistle Aligners</h3>
            <div className="ws-price-old">₹84,000</div>
            <div className="ws-price-row">
              starting at <span className="now">₹47,999</span>
            </div>
            <div className="ws-price-tax">inc. of all taxes</div>
            <div className="ws-price-feat">
              <span className="ws-check-dot">✓</span> Offer valid for a limited
              time
            </div>
            <div className="ws-price-feat">
              <span className="ws-check-dot">✓</span> Easy financing options
            </div>
            <a className="ws-learn-more" href="#more">
              Learn more →
            </a>
          </div>
        </div>

        <Result/>
      </div>
    </div>
  );
}

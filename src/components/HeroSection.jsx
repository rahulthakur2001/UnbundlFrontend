import { useState } from "react";
import "./HeroSection.css";
import Header from "./Header";
import banner from "../../images/banner.png";


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
    </div>
  );
}

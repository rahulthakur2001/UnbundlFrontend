import React, { useEffect, useRef, useState } from "react";
import "./HeroSection.css";
import Header from "./Header";
import banner from "../../images/banner.png";
import alignerCase from "../../images/d14528a1e9e28b2f472900fc2658a64a1c97983c.png";

const CITIES = [
  "Delhi NCR",
  "Mumbai",
  "Bengaluru",
  "Hyderabad",
  "Pune",
  "Chennai",
];

const CLINICS_BY_CITY = {
  "Delhi NCR": [
    "Clove Dental - Rajouri Garden",
    "Clove Dental - Janakpuri",
    "Clove Dental - Saket",
  ],
  Mumbai: [
    "Clove Dental - Andheri West",
    "Clove Dental - Powai",
    "Clove Dental - Bandra",
  ],
  Bengaluru: [
    "Clove Dental - Koramangala",
    "Clove Dental - Indiranagar",
    "Clove Dental - Whitefield",
  ],
  Hyderabad: ["Clove Dental - Banjara Hills", "Clove Dental - Gachibowli"],
  Pune: ["Clove Dental - Kothrud", "Clove Dental - Viman Nagar"],
  Chennai: ["Clove Dental - Adyar", "Clove Dental - Anna Nagar"],
};

function Dropdown({ label, value, options, onSelect, disabled, placeholder }) {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    function handleClickOutside(e) {
      if (ref.current && !ref.current.contains(e.target)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="ws-dd" ref={ref}>
      <button
        type="button"
        className={
          "ws-dd-trigger" + (disabled ? " ws-dd-trigger--disabled" : "")
        }
        onClick={() => !disabled && setOpen((o) => !o)}
        disabled={disabled}
        aria-haspopup="listbox"
        aria-expanded={open}
      >
        <span className={value ? "ws-dd-value" : "ws-dd-placeholder"}>
          {value || placeholder}
        </span>
        <span className={"ws-dd-caret" + (open ? " ws-dd-caret--open" : "")}>
          ⌄
        </span>
      </button>

      {open && (
        <ul className="ws-dd-menu" role="listbox">
          {options.length === 0 ? (
            <li className="ws-dd-empty">No options available</li>
          ) : (
            options.map((opt) => (
              <li
                key={opt}
                role="option"
                aria-selected={opt === value}
                className={
                  "ws-dd-item" + (opt === value ? " ws-dd-item--selected" : "")
                }
                onClick={() => {
                  onSelect(opt);
                  setOpen(false);
                }}
              >
                {opt}
              </li>
            ))
          )}
        </ul>
      )}
    </div>
  );
}

export default function HeroSection() {
  const [gap, setGap] = useState("");
  const [consent, setConsent] = useState(false);

  const [city, setCity] = useState("");
  const [clinic, setClinic] = useState("");
  const [mobile, setMobile] = useState("");
  const [captcha, setCaptcha] = useState("");

  const clinicOptions = city ? CLINICS_BY_CITY[city] || [] : [];

  function handleCitySelect(selected) {
    setCity(selected);
    setClinic("");
  }

  function handleSubmit() {
    console.log({ mobile, captcha, city, clinic });
  }

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

        <div className="ws-clove-form">
          <div className="ws-clove-row">
            <div className="ws-input ws-input--phone">
              <span className="ws-input-prefix">+91</span>
              <input
                type="tel"
                placeholder="Mobile number*"
                value={mobile}
                onChange={(e) =>
                  setMobile(e.target.value.replace(/\D/g, "").slice(0, 10))
                }
              />
            </div>

            <div className="ws-input">
              <input
                type="text"
                placeholder="Enter Captcha"
                value={captcha}
                onChange={(e) => setCaptcha(e.target.value)}
              />
            </div>

            <div className="ws-captcha-box">234</div>
          </div>

          <div className="ws-clove-row">
            <Dropdown
              placeholder="Select City"
              value={city}
              options={CITIES}
              onSelect={handleCitySelect}
            />

            <Dropdown
              placeholder="Select Clinic"
              value={clinic}
              options={clinicOptions}
              onSelect={setClinic}
              disabled={!city}
            />

            <button type="button" className="ws-submit" onClick={handleSubmit}>
              Submit
            </button>
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
            <img
              className="ws-aligner-graphic"
              src={alignerCase}
              alt="Whistle aligner case"
            />
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
      </div>
    </div>
  );
}

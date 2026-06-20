import React from "react";
import "./CompareSection.css";
import logo from "../../images/logo.png";
import { compareData } from "../Data";

export default function CompareSection() {
  return (
    <div className="ws-compare-section">
      <h2 className="ws-h2 ws-center">What sets Whistle apart?</h2>
      <div className="ws-compare-table">
        <div className="ws-ct-row ws-ct-head">
          <span>Features</span>
          <span className="ws-logo-mini">
            <img src={logo} alt="Whistle" />
          </span>
          <span>Other Brands</span>
        </div>
        {compareData.map((row) => (
          <div className="ws-ct-row" key={row.label}>
            <div className="ws-ct-label">
              {row.label}
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M6 9l6 6 6-6" />
              </svg>
            </div>
            <div className="ws-ct-w">
              {row.type === "check" ? (
                <span className="ws-icon-check">✓</span>
              ) : (
                row.whistle
              )}
            </div>
            <div className="ws-ct-o">
              {row.type === "check" ? (
                <span className="ws-icon-x">✕</span>
              ) : (
                row.other
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

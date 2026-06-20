import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="ws-footer">
      <div className="ws-footer-grid">
        <div className="ws-footer-col">
          <h4>Quick Links</h4>
          <a href="#home">Home</a>
          <a href="#scan">Book a Free Scan</a>
          <a href="#how">How it Works</a>
          <a href="#range">Range of Aligners</a>
          <a href="#vs">Aligners vs Braces</a>
          <a href="#faq">FAQs</a>
        </div>
        <div className="ws-footer-col">
          <h4>Get in Touch Now!</h4>
          <div className="ws-footer-contact">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
              <path d="M6.6 10.8c1.5 3 4 5.4 7 7l2.3-2.3c.3-.3.8-.4 1.1-.2 1.3.6 2.7.9 4.1 1 .6 0 1 .5 1 1V21c0 .6-.4 1-1 1C10.6 22 2 13.4 2 3c0-.6.4-1 1-1h3.7c.6 0 1 .4 1 1 .1 1.4.4 2.8 1 4.1.2.4.1.8-.2 1.1L6.6 10.8z" />
            </svg>
            011-8932-8350
          </div>
          <div className="ws-footer-contact">
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <rect x="3" y="5" width="18" height="14" rx="2" />
              <path d="M3 7l9 6 9-6" />
            </svg>
            support@whistle.in
          </div>
        </div>
        <div className="ws-footer-col">
          <h4>Follow us on</h4>
          <div className="ws-social-row">
            <a href="#ig" aria-label="Instagram">
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#fff"
                strokeWidth="2"
              >
                <rect x="3" y="3" width="18" height="18" rx="5" />
                <circle cx="12" cy="12" r="4" />
                <circle cx="17.5" cy="6.5" r="1" fill="#fff" />
              </svg>
            </a>
            <a href="#fb" aria-label="Facebook">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="#fff">
                <path d="M13 22v-8h2.7l.5-3H13V9c0-.9.3-1.5 1.7-1.5H16V5c-.3 0-1.3-.1-2.4-.1-2.4 0-4.1 1.5-4.1 4.2V11H7v3h2.5v8H13z" />
              </svg>
            </a>
            <a href="#x" aria-label="X (Twitter)">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="#fff">
                <path d="M3 3l8.5 9-8 9h2.4l6.7-7.5L18.5 21H21l-8.9-9.6L20.6 3h-2.4l-6.2 7L8 3H3z" />
              </svg>
            </a>
          </div>
        </div>
        <div className="ws-footer-col ws-footer-legal">
          <a href="#privacy">Privacy Policy</a>
          <a href="#terms">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
}

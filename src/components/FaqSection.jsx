import React, { useState } from "react";
import "./FaqSection.css";
import { faqData } from "../Data";

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState(null);

  function toggle(index) {
    setOpenIndex((prev) => (prev === index ? null : index));
  }

  return (
    <section className="faq">
      <h2 className="faq-heading">
        <span className="faq-accent">Got Questions?</span> We've got answers
      </h2>

      <div className="faq-list">
        {faqData.map((f, i) => (
          <div className="faq-item" key={f.q}>
            <button
              className="faq-question"
              onClick={() => toggle(i)}
              aria-expanded={openIndex === i}
            >
              <span>{f.q}</span>
              <span className="faq-toggle">{openIndex === i ? "−" : "+"}</span>
            </button>
            {openIndex === i && <p className="faq-answer">{f.a}</p>}
          </div>
        ))}
      </div>
    </section>
  );
}

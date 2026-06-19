import { useEffect, useState } from "react";
import "./FaqSection.css";

const API_URL = "https://jsonplaceholder.typicode.com/posts?_limit=5";

function toQuestion(title) {
  const clean = title.charAt(0).toUpperCase() + title.slice(1);
  return clean.endsWith("?") ? clean : `${clean}?`;
}

export default function FaqSection() {
  const [faqs, setFaqs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [openIndex, setOpenIndex] = useState(null); // Task C: expand/collapse

  useEffect(() => {
    let isMounted = true;

    async function fetchFaqs() {
      setLoading(true);
      setError(null);
      try {
        const res = await fetch(API_URL);
        if (!res.ok) {
          throw new Error(`Request failed with status ${res.status}`);
        }
        const data = await res.json();
        if (isMounted) {
          setFaqs(
            data.map((post) => ({
              id: post.id,
              question: toQuestion(post.title),
              answer: post.body,
            }))
          );
        }
      } catch (err) {
        if (isMounted) setError(err.message || "Something went wrong");
      } finally {
        if (isMounted) setLoading(false);
      }
    }

    fetchFaqs();
    return () => {
      isMounted = false;
    };
  }, []);

  function toggle(index) {
    setOpenIndex((prev) => (prev === index ? null : index));
  }

  return (
    <section className="faq">
      <h2 className="faq-heading">
        <span className="faq-accent">Got Questions?</span> We've got answers
      </h2>

      {loading && (
        <div className="faq-list">
          {[1, 2, 3].map((n) => (
            <div className="faq-item faq-skeleton" key={n}>
              <div className="faq-skeleton-line" />
            </div>
          ))}
        </div>
      )}

      {!loading && error && (
        <div className="faq-error">
          <p>Couldn't load the FAQs right now. ({error})</p>
        </div>
      )}

      {!loading && !error && (
        <div className="faq-list">
          {faqs.map((f, i) => (
            <div className="faq-item" key={f.id}>
              <button
                className="faq-question"
                onClick={() => toggle(i)}
                aria-expanded={openIndex === i}
              >
                <span>{f.question}</span>
                <span className="faq-toggle">{openIndex === i ? "−" : "+"}</span>
              </button>
              {openIndex === i && <p className="faq-answer">{f.answer}</p>}
            </div>
          ))}
        </div>
      )}
    </section>
  );
}

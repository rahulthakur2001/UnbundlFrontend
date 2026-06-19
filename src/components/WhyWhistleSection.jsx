import { useEffect, useState } from "react";
import "./WhyWhistleSection.css";

// Task B: dynamic data.
// The Figma cards in this frame are image + bold title + short description,
// which maps cleanly onto Fake Store API products (image / title / description),
// so no mock JSON was needed here — see README for reasoning.
const API_URL = "https://fakestoreapi.com/products?limit=4";

export default function WhyWhistleSection() {
  const [cards, setCards] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let isMounted = true;

    async function fetchCards() {
      setLoading(true);
      setError(null);
      try {
        const res = await fetch(API_URL);
        if (!res.ok) {
          throw new Error(`Request failed with status ${res.status}`);
        }
        const data = await res.json();
        if (isMounted) setCards(data);
      } catch (err) {
        if (isMounted) setError(err.message || "Something went wrong");
      } finally {
        if (isMounted) setLoading(false);
      }
    }

    fetchCards();
    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <section className="why">
      <h2 className="why-heading">Why Whistle?</h2>

      {loading && (
        <div className="why-grid">
          {[1, 2, 3, 4].map((n) => (
            <div className="why-card why-skeleton" key={n}>
              <div className="why-skeleton-img" />
              <div className="why-skeleton-line" style={{ width: "70%" }} />
              <div className="why-skeleton-line" style={{ width: "90%" }} />
              <div className="why-skeleton-line" style={{ width: "60%" }} />
            </div>
          ))}
        </div>
      )}

      {!loading && error && (
        <div className="why-error">
          <p>Couldn't load this section right now. ({error})</p>
        </div>
      )}

      {!loading && !error && (
        <div className="why-grid">
          {cards.map((item) => (
            <div className="why-card" key={item.id}>
              <img
                src={`https://picsum.photos/seed/why-${item.id}/280/200`}
                alt={item.title}
              />
              <div className="why-card-body">
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}

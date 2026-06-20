import React, { useEffect, useState } from "react";
import axios from "axios";
import "./WhyWhistleSection.css";

export default function WhyWhistleSection() {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);


  const page = 1;
  const limit = 4;

  const fetchApi = async () => {
    try {
      const response = await axios.get(
        `https://fakestoreapi.com/products?limit=${limit}`,
      );
      setData(response.data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchApi();
  }, []);

  return (
    <div className="ws-section">
      <div className="ws-inner">
        <h2 className="ws-h2 ws-center">Why Whistle?</h2>

        <div className="why-grid">
          {loading
            ? Array(4)
                .fill(null)
                .map((_, index) => (
                  <div className="why-card skeleton-card" key={index}>
                    <div className="skeleton-img"></div>

                    <div className="why-card-body">
                      <div className="skeleton-title"></div>
                      <div className="skeleton-text"></div>
                      <div className="skeleton-text short"></div>
                    </div>
                  </div>
                ))
            : data.map((item) => (
                <div className="why-card" key={item.id}>
                  <img src={item.image} alt={item.title} />

                  <div className="why-card-body">
                    <h3>{item.title}</h3>
                    <p>
                      {item.description.length > 100
                        ? item.description.slice(0, 100) + "..."
                        : item.description}
                    </p>
                  </div>
                </div>
              ))}
        </div>
      </div>
    </div>
  );
}

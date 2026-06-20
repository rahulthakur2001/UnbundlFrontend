import React from "react";
import "./Result.css";
import { resultsData } from "../Data";

const Result = () => {
  return (
    <div className="ws-section">
      <div className="ws-inner">
        <h2 className="ws-h2 ws-center">Results You'll Love</h2>
        <div className="ws-results-grid">
          {resultsData.map((r) => (
            <div className="ws-result-card" key={r.concern}>
              <div className="ws-result-imgs">
                <img src={r.before} alt={`Before treatment - ${r.concern}`} />
                <img src={r.after} alt={`After treatment - ${r.concern}`} />
              </div>
              <div className="ws-result-labels">
                <span>Before</span>
                <span>After</span>
              </div>
              <div className="ws-result-row">
                <span>Concern</span>
                <span>{r.concern}</span>
              </div>
              <div className="ws-result-row">
                <span>Treatment Duration</span>
                <span>{r.duration}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Result;

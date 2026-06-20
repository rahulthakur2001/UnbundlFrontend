import React from "react";
import "./StepsSection.css";
import videoThumb from "../../images/e7fcddf46d0bfaed28a3a3e0935ce84d68eacca3.png";
import { stepsData } from "../Data";

export default function StepsSection() {
  return (
    <div className="ws-section ws-steps-section">
      <div className="ws-inner">
        <div className="ws-steps-card">
          <div className="ws-steps-left">
            <h2>Get your perfect smile in four simple steps</h2>
            <div className="ws-steps-grid">
              {stepsData.map((s) => (
                <div className="ws-step" key={s.n}>
                  <div className="ws-step-num">{s.n}</div>
                  <div>
                    <h4>{s.title}</h4>
                    <p>{s.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="ws-steps-video">
            <img src={videoThumb} alt="Orthodontist examining a patient" />
            <div className="ws-play-btn">▶</div>
          </div>
        </div>
      </div>
    </div>
  );
}

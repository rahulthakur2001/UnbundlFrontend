import React from "react";
import "./WhistleDifferenceSection.css";
import printerImg from "../../images/918595c3db7671089e72ae70362721d2f833c0c5.png";
import { diffData } from "../Data";

export default function WhistleDifferenceSection() {
  return (
    <div className="ws-section ws-diff">
      <div className="ws-inner">
        <div className="ws-diff-card">
          <h2>The Whistle Difference</h2>
          {diffData.map((d) => (
            <div className="ws-diff-item" key={d.title}>
              <div className="ws-diff-icon">
                <d.Icon size={22} />
              </div>
              <div>
                <h4>{d.title}</h4>
                <p>{d.desc}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="ws-diff-img">
          <img src={printerImg} alt="3D printer manufacturing an aligner" />
        </div>
      </div>
    </div>
  );
}

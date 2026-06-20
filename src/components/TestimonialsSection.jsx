import React from "react";
import "./TestimonialsSection.css";
import testimonialsGif from "../../images/2327457f93a14d94b01b3e2b1188f5ecb9b499d4.gif";

export default function TestimonialsSection() {
  return (
    <div className="ws-happy">
      <h2 className="ws-h2 ws-center">Happy Smilers!</h2>
      <div className="ws-happy-scroll">
        <img
          src={testimonialsGif}
          alt="Happy Whistle customers sharing their smile transformation stories"
        />
      </div>
    </div>
  );
}

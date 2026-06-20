import React from "react";
import "./DoctorSection.css";
import doctorImg from "../../images/c7ebc93cddffad0959f95c067e6e651e6b2c802d.png";

export default function DoctorSection() {
  return (
    <div className="ws-doctor">
      <div className="ws-doctor-text">
        <h2>We are Doctor-led, not direct-to-customers</h2>
        <p>
          We don't offer direct-to-customer invisible aligners. We treat you
          in a Dental clinic with an Orthodontist. Aligners are just the
          beginning; we ensure comprehensive treatment in over 450+ clinics
          nationwide.
        </p>
        <button className="ws-cta-btn">Get a Callback</button>
      </div>
      <div className="ws-doctor-img">
        <img src={doctorImg} alt="Orthodontist standing in a dental clinic" />
      </div>
    </div>
  );
}

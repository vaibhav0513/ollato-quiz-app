import React from "react";
import counselors from "../assets/counselor";
import "./Service.css";

const CounselorList = () => {
  const handleBookSession = (counselorName) => {
    alert(`You have booked a session with ${counselorName}!`);
  };

  return (
    <div className="con-container">
      <h1 className="con-heading">Counselors</h1>
      <ul className="con-unordered">
        {counselors.map((counselor) => (
          <li key={counselor.id} className="con-list">
            <h2 className="con-sub-heading">{counselor.name}</h2>
            <p>Specialty: {counselor.specialty}</p>
            <p>Email: {counselor.contact.email}</p>
            <p>Phone: {counselor.contact.phone}</p>
            <p>Bio: {counselor.bio}</p>
            <button
              className="btn btn-submit"
              onClick={() => handleBookSession(counselor.name)}
            >
              Book Session
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CounselorList;

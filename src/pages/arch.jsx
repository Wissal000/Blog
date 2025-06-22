import React from "react";
import architecture from "../assets/architecture.png";
import './arch.css';

export const Arch = () => {
  return (
    <div className="arch-container">
      <img src={architecture} alt="arch" className="arch-image" />
    </div>
  );
};

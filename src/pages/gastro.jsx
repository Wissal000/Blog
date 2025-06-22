import React from "react";
import gastroImage from "../assets/gastronomie.jpg";
import './gastro.css';

export const Gastro = () => {
  return (
    <div className="gastro-container">
      <img src={gastroImage} alt="gastro" className="gastro-image" />
    </div>
  );
};

import React from "react";
import automobile from "../assets/automobile.jpg";
import './auto.css';

export const Auto = () => {
  return (
    <div className="auto-container">

     <div className="header">
      <img src={automobile} alt="auto" className="auto-image" />
      <p className="sait-tu-que">
        <span className="highlight">Sais-tu que</span> le Japon a une des cultures automobiles les plus connues au
        monde, surtout avec des marques comme Toyota, Honda ou Nissan ? C’est
        fou de voir comment ils modifient leurs voitures pour en faire des
        vraies œuvres d’art roulantes ! T’aimerais pas assister à une course de
        drift à Tokyo, toi aussi ? Tu m’écoutes toujours ? Au fait, "JDM" ça
        veut dire "Japanese Domestic Market", c’est pour les modèles faits juste
        pour le Japon. Et la nuit, leurs moteurs font un bruit énorme, un peu
        comme des guerriers prêts à se battre ! Tu sais, "samouraï" désigne les
        anciens guerriers japonais, symbole de force et d’honneur, un peu comme
        ces voitures prêtes à dominer la route.
       </p>
      </div> 
    </div>
  );
};



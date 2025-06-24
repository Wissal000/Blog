import React from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./home.css";
import footer from "../assets/japan-map.png";
import sakuraIcon from "../assets/sakura.png";


export const Home = () => {
  const slides = [
    {
      title: "Architecture",
      path: "/architecture",
      image: require("../assets/archhh.jpg"),
    },
    {
      title: "Religion",
      path: "/religion",
      image: require("../assets/religion.jpg"),
    },
    {
      title: "Gastronomie",
      path: "/gastronomie",
      image: require("../assets/gastronomie.jpg"),
    },
    {
      title: "Cinema",
      path: "/cinema",
      image: require("../assets/cinema.jpg"),
    },
    {
      title: "Automobile",
      path: "/automobile",
      image: require("../assets/car.jpg"),
    },
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "40px",
    arrows: true,
  };

  return (
    <div className="home">
      <div className="hero-background">
        <div className="hero-text">
          <h1 className="hero-title">JAPAN</h1>
          <p className="hero-subtitle">NIPPON</p>
        </div>
      </div>

      <div className="cards-section">
        <Slider {...settings}>
          {slides.map((slide, index) => (
            <div key={index} className="card-slide">
              <Link to={slide.path} className="card-link">
                <img src={slide.image} alt={slide.title} />
                <h3>{slide.title}</h3>
              </Link>
            </div>
          ))}
        </Slider>

        <section className="japanese-quote">
          <p>
            « Plutôt que de chasser le chat, retire le poisson. »
          </p>
          <span>— Proverbe japonais</span>
        </section>
        <section className="footer">
          <img src={footer} alt="footer" />
          <p className="footer-text">
            <h2 className="footer-header">Japan</h2>Le Japon est un pays
            insulaire d’Asie de l’Est, situé dans l’océan Pacifique. Il est
            connu pour son mélange unique de culture traditionnelle et de
            technologie moderne, ses magnifiques cerisiers en fleurs et sa riche
            histoire. Le pays est composé de quatre îles principales et de
            nombreuses îles plus petites, avec Tokyo pour capitale.
          </p>
        </section>
      </div>
      <img src={sakuraIcon} alt="Sakura" className="footer1" />
    </div>
  );
};

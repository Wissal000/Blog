import React from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./home.css";

export const Home = () => {
  const slides = [
    {
      title: "Architecture",
      path: "/architecture",
      image: require("../assets/architecture.png"),
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
      image: require("../assets/automobile.jpg"),
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
            « Même la poussière, lorsqu'elle s'accumule, peut devenir une
            montagne. »
          </p>
          <span>— Proverbe japonais</span>
        </section>
      </div>
    </div>
  );
};

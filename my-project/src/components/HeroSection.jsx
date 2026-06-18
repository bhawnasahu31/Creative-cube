import React, { useState, useEffect } from "react";
import "./HeroSection.css";

import sofa1 from "../assets/sofa1.jpg";
import bed1 from "../assets/bed1.jpg";
import reclinersofa from "../assets/reclinersofa.jpg";
import dining1 from "../assets/dining1.jpg";
import recliner from "../assets/recliner.jpg";
import diningVideo from "../assets/dining.mp4";

const slides = [
  { image: sofa1, title: "Designed for Deep Sleep", subtitle: "Premium Wooden Beds" },
  { image: bed1, title: "Sleep on a Cloud of Comfort", subtitle: "Cozy Luxury Beds" },
  { image: reclinersofa, title: "Relax in Ultimate Comfort", subtitle: "Luxury Recliners" },
  { image: dining1, title: "Dine in Style", subtitle: "Elegant Dining Sets" },
];

const Home = () => {
  const [index, setIndex] = useState(0);

  // ✅ Auto Slide
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="mosaic-home">
      <div className="mosaic-grid">

        {/* RECLINER */}
        <div className="mosaic-card tall">
          <img src={recliner} alt="recliner" />
          <div className="card-info">
            {/* <p>Single Seater</p>
            <h3>Luxury Recliner</h3>
            <span>₹15,200 Onwards</span> */}
          </div>
        </div>

        {/* HERO SLIDER */}
        <div className="mosaic-hero">
          <img src={slides[index].image} alt="slide" />

          <div className="hero-strip">
            <h1>{slides[index].title}</h1>
            <h2>{slides[index].subtitle}</h2>
          </div>

          <button
            className="arrow left"
            onClick={() =>
              setIndex((index - 1 + slides.length) % slides.length)
            }
          >
            ❮
          </button>

          <button
            className="arrow right"
            onClick={() =>
              setIndex((index + 1) % slides.length)
            }
          >
            ❯
          </button>
        </div>

        {/* DINING CARD - ONLY VIDEO */}
        <div className="mosaic-card small">
          <video
            src={diningVideo}
            controls
            className="card-video"
          />

          <div className="card-info bottom">
            {/* <h3>Denzen</h3>
            <p>Marble Dining Set</p> */}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Home;
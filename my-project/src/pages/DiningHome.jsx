import React from "react";
import "./DiningHome.css";

// images
import four from "../assets/dining4_4.jpg";
import six from "../assets/dining6_1.jpg";
import eight from "../assets/dining8_2.jpg";
import cabinet from "../assets/diningunit1.jpg";

const diningData = [
  { title: "4 Seater Dining Tables", img: four },
  { title: "6 Seater Dining Tables", img: six },
  { title: "8 Seater Dining Tables", img: eight },
  { title: "Crockery Units", img: cabinet },
];

const DiningHome = () => {
  return (
    <div className="dining-home">

      {/* HERO */}
      <section className="dining-hero">
        <h1>Dining Room Furniture</h1>
        <p>Style • Comfort • Togetherness</p>
      </section>

      {/* GRID */}
      <section className="dining-grid">
        {diningData.map((item, index) => (
          <div className="dining-card" key={index}>

            <img src={item.img} alt={item.title} />

            <div className="dining-card-overlay">
              <h3>{item.title}</h3>
              <button>Explore</button>
            </div>

          </div>
        ))}
      </section>

    </div>
  );
};

export default DiningHome;
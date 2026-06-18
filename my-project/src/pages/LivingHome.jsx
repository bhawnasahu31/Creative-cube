import React from "react";
import "./LivingHome.css";

// images (aap apni images laga sakte ho)
import sofa from "../assets/sofa1.jpg";
import recliner from "../assets/reclinersofa.jpg";
import table from "../assets/centertable.jpg";
import tvunit from "../assets/tvunit.jpg";
import set from "../assets/sofaset.jpg";

const livingData = [
  { title: "Sofas", img: sofa },
  { title: "Recliners", img: recliner },
  { title: "Center Tables", img: table },
  { title: "TV Units", img: tvunit },
  { title: "Living Sets", img: set },
];

const LivingHome = () => {
  return (
    <div className="living-home">

      {/* HERO */}
      <section className="living-hero">
        <h1>Living Room Furniture</h1>
        <p>Comfort • Style • Functionality</p>
      </section>

      {/* GRID */}
      <section className="living-grid">
        {livingData.map((item, index) => (
          <div className="living-card" key={index}>
            <div className="product-image">
           <img src={item.img} alt={item.name} />
            </div>
            <div className="living-card-overlay">
              <h3>{item.title}</h3>
              <button>Explore</button>
            </div>
          </div>
        ))}
      </section>

    </div>
  );
};

export default LivingHome;
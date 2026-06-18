import React from "react";
import "./OfficeHome.css";

// images
import computer from "../assets/ct1.jpg";
import desk from "../assets/od1.jpg";

import chair from "../assets/oc1.jpg";
import gaming from "../assets/oc2.jpg";
import shelf from "../assets/bs1.jpg";

const officeData = [
  { title: "Computer Tables", img: computer },
  { title: "Office Desks", img: desk },
  { title: "Office Chairs", img: chair },
  { title: "Gaming Chairs", img: gaming },
  { title: "Bookshelves", img: shelf },
];

const OfficeHome = () => {
  return (
    <div className="office-home">

      {/* HERO */}
      <section className="office-hero">
        <h1>Study & Office Furniture</h1>
        <p>Work • Comfort • Productivity</p>
      </section>

      {/* GRID */}
      <section className="office-grid">
        {officeData.map((item, index) => (
          <div className="office-card" key={index}>

            <img src={item.img} alt={item.title} />

            <div className="office-card-overlay">
              <h3>{item.title}</h3>
              <button>Explore</button>
            </div>

          </div>
        ))}
      </section>

    </div>
  );
};

export default OfficeHome;
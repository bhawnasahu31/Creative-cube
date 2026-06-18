import React from "react";
import "./BedroomHome.css";

// images
import bed from "../assets/king1.jpg";
import wardrobe from "../assets/mirror1.jpg";
// import dresser from "../assets/dresser.jpg";
import bedside from "../assets/bedside1.jpg";
import mattress from "../assets/mat1.jpg";

const bedroomData = [
  { title: "Beds", img: bed },
  { title: "Wardrobes", img: wardrobe },
//   { title: "Dressers", img: dresser },
  { title: "Bedside Tables", img: bedside },
  { title: "Mattresses", img: mattress },
];

const BedroomHome = () => {
  return (
    <div className="bedroom-home">

      {/* HERO */}
      <section className="bedroom-hero">
        <h1>Bedroom Furniture</h1>
        <p>Relax • Comfort • Storage</p>
      </section>

      {/* GRID */}
      <section className="bedroom-grid">
        {bedroomData.map((item, index) => (
          <div className="bedroom-card" key={index}>
            
            <div className="product-image">
              <img src={item.img} alt={item.title} />
            </div>

            <div className="bedroom-card-overlay">
              <h3>{item.title}</h3>
              <button>Explore</button>
            </div>

          </div>
        ))}
      </section>

    </div>
  );
};

export default BedroomHome;
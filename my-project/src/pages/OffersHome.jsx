import React from "react";
import "./OffersHome.css";

// images
import offer1 from "../assets/f1.jpg";
import offer2 from "../assets/f2.jpg";
import offer3 from "../assets/c1.jpg";
import offer4 from "../assets/c2.jpg";
import offer5 from "../assets/sc1.jpg";

const offersData = [
  { title: "Flat 50% Off", img: offer1 },
  { title: "Combo Deals", img: offer2 },
  { title: "Stock Clearance", img: offer3 },
  { title: "Limited Time Deals", img: offer4 },
  { title: "Festival Offers", img: offer5 },
];

const OffersHome = () => {
  return (
    <div className="offers-home">

      {/* HERO */}
      {/* <section className="offers-hero">
        <h1>Special Furniture Offers</h1>
        <p>Save More • Shop Smart</p>
      </section> */}

      {/* GRID */}
      <section className="offers-grid">
        {offersData.map((item, index) => (
          <div className="offers-card" key={index}>

            <div className="product-image">
              <img src={item.img} alt={item.title} />
            </div>

            <div className="offers-card-overlay">
              <h3>{item.title}</h3>
              <button>Explore</button>
            </div>

          </div>
        ))}
      </section>

    </div>
  );
};

export default OffersHome;
import React from "react";
import "./ProductGrid.css";
import { Link } from "react-router-dom";

import tv1 from "../assets/tv1.jpg";
import tv2 from "../assets/tv2.jpg";

const tvWallUnits = [
  { id: 1501, name: "Modern TV Wall Unit", price: "₹35,000", img: tv1 },
  { id: 1502, name: "Wooden TV Wall Panel", price: "₹42,000", img: tv2 },
];

const TVWallUnits = () => {
  return (
    <div className="product-page">

      <div className="product-hero">
        <h1>TV Wall Units</h1>
        <p>Modern Living Room Design</p>
      </div>

      <div className="product-grid">
        {tvWallUnits.map((item) => (
          <div className="product-card" key={item.id}>
            <img src={item.img} alt={item.name} />

            <div className="product-info">
              <h3>{item.name}</h3>
              <p className="price">{item.price}</p>

              <Link to={`/product/${item.id}`}>
                <button>View Details</button>
              </Link>
            </div>

          </div>
        ))}
      </div>

    </div>
  );
};

export default TVWallUnits;
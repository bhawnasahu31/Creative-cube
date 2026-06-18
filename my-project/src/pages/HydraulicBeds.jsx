import React from "react";
import "./ProductGrid.css";
import { Link } from "react-router-dom";

import hyd1 from "../assets/hyd1.jpg";
import hyd2 from "../assets/hyd2.jpg";
import hyd3 from "../assets/hyd3.jpg";
import hyd4 from "../assets/hyd4.jpg";

const hydraulicBeds = [
  { id: 501, name: "Luxury Hydraulic Bed", price: "₹42,999", img: hyd1 },
  { id: 502, name: "Modern Hydraulic Bed", price: "₹38,999", img: hyd2 },
  { id: 503, name: "Wooden Hydraulic Bed", price: "₹40,999", img: hyd3 },
  { id: 504, name: "Premium Hydraulic Bed", price: "₹44,999", img: hyd4 },
];

const HydraulicBeds = () => {
  return (
    <div className="product-page">

      <div className="product-hero">
        <h1>Hydraulic Beds</h1>
        <p>Easy Lift • Modern • Functional</p>
      </div>

      <div className="product-grid">
        {hydraulicBeds.map((item) => (
          <div className="product-card" key={item.id}>
            <div className="product-image">
           <img src={item.img} alt={item.name} />
            </div>
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

export default HydraulicBeds;
import React from "react";
import "./ProductGrid.css";
import { Link } from "react-router-dom";

import f1 from "../assets/f1.jpg";
import f2 from "../assets/f2.jpg";

const flatDeals = [
  { id: 1701, name: "Modern Sofa (50% Off)", price: "₹25,000", img: f1 },
  { id: 1702, name: "Luxury Bed (50% Off)", price: "₹30,000", img: f2 },
];

const Flat50Off = () => {
  return (
    <div className="product-page">

      <div className="product-hero">
        <h1>Flat 50% Off</h1>
        <p>Best Deals • Half Price Offer</p>
      </div>

      <div className="product-grid">
        {flatDeals.map((item) => (
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

export default Flat50Off;
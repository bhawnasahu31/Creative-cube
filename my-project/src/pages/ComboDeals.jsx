import React from "react";
import "./ProductGrid.css";
import { Link } from "react-router-dom";

import c1 from "../assets/c1.jpg";
import c2 from "../assets/c2.jpg";

const comboDeals = [
  { id: 1801, name: "Dining Table + Chairs Combo", price: "₹40,000", img: c1 },
  { id: 1802, name: "Bed + Side Table Combo", price: "₹55,000", img: c2 },
];

const ComboDeals = () => {
  return (
    <div className="product-page">

      <div className="product-hero">
        <h1>Combo Deals</h1>
        <p>Buy More • Save More</p>
      </div>

      <div className="product-grid">
        {comboDeals.map((item) => (
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

export default ComboDeals;
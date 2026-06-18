import React from "react";
import "./ProductGrid.css";
import { Link } from "react-router-dom";

import sc1 from "../assets/sc1.jpg";
import sc2 from "../assets/sc2.jpg";

const stockClearance = [
  { id: 1901, name: "Office Table Clearance", price: "₹8,999", img: sc1 },
  { id: 1902, name: "Wooden Cabinet Clearance", price: "₹12,500", img: sc2 },
];

const StockClearance = () => {
  return (
    <div className="product-page">

      <div className="product-hero">
        <h1>Stock Clearance</h1>
        <p>Last Chance Deals</p>
      </div>

      <div className="product-grid">
        {stockClearance.map((item) => (
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

export default StockClearance;
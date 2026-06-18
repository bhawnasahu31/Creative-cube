import React from "react";
import "./ProductGrid.css";
import { Link } from "react-router-dom";

import ts1 from "../assets/ts1.jpg";
import ts2 from "../assets/ts2.jpg";

const tvStands = [
  { id: 1601, name: "Modern TV Stand", price: "₹12,500", img: ts1 },
  { id: 1602, name: "Wooden TV Cabinet", price: "₹16,000", img: ts2 },
];

const TVStands = () => {
  return (
    <div className="product-page">

      <div className="product-hero">
        <h1>TV Stands</h1>
        <p>Compact Design • Stylish Living</p>
      </div>

      <div className="product-grid">
        {tvStands.map((item) => (
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

export default TVStands;
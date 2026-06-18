import React from "react";
import "./ProductGrid.css";
import { Link } from "react-router-dom";

import od1 from "../assets/od1.jpg";
import od2 from "../assets/od2.jpg";

const officeDesks = [
  { id: 911, name: "Executive Office Desk", price: "₹12,999", img: od1 },
  { id: 912, name: "Premium Work Desk", price: "₹10,499", img: od2 },
];

const OfficeDesks = () => {
  return (
    <div className="product-page">

      <div className="product-hero">
        <h1>Office Desks</h1>
        <p>Professional • Elegant Workspace</p>
      </div>

      <div className="product-grid">
        {officeDesks.map((item) => (
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

export default OfficeDesks;
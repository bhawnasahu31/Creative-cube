import React from "react";
import "./ProductGrid.css";
import { Link } from "react-router-dom";

import mk1 from "../assets/mk1.jpg";
import mk2 from "../assets/mk2.jpg";

const modularKitchens = [
  { id: 1001, name: "Modern Modular Kitchen", price: "₹1,25,000", img: mk1 },
  { id: 1002, name: "Luxury Wooden Kitchen", price: "₹1,75,000", img: mk2 },
];

const ModularKitchen = () => {
  return (
    <div className="product-page">

      <div className="product-hero">
        <h1>Modular Kitchen</h1>
        <p>Smart Storage • Elegant Design</p>
      </div>

      <div className="product-grid">
        {modularKitchens.map((item) => (
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

export default ModularKitchen;
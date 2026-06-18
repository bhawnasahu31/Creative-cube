import React from "react";
import { Link } from "react-router-dom";
import "./ProductGrid.css";

import single1 from "../assets/single1.jpg";
import single2 from "../assets/single2.jpg";
import single3 from "../assets/single3.jpg";
import single4 from "../assets/single4.jpg";
import products from "../data/products";

const singleSeaters = [
  { id: 1, name: "Classic Single Seater", price: "₹14,999", img: single1 },
  { id: 2, name: "Modern Single Seater", price: "₹17,999", img: single2 },
  { id: 3, name: "Luxury Single Seater", price: "₹21,999", img: single3 },
  { id: 4, name: "Compact Single Seater", price: "₹12,999", img: single4 },

];

const SingleSeaters = () => {
  return (
    <div className="product-page">
      <div className="product-hero">
        <h1>Single Seaters</h1>
        <p>Compact • Comfortable • Elegant</p>
      </div>

      <div className="product-grid">
        {singleSeaters.map((item) => (
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

export default SingleSeaters;
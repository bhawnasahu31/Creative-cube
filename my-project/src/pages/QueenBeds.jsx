import React from "react";
import "./ProductGrid.css";
import { Link } from "react-router-dom";

import queen1 from "../assets/queen1.jpg";
import queen2 from "../assets/queen2.jpg";
import queen3 from "../assets/queen3.jpg";
import queen4 from "../assets/queen4.jpg";

const queenBeds = [
  { id: 201, name: "Classic Queen Bed", price: "₹28,999", img: queen1 },
  { id: 202, name: "Modern Queen Bed", price: "₹31,999", img: queen2 },
  { id: 203, name: "Elegant Queen Bed", price: "₹29,999", img: queen3 },
  { id: 204, name: "Premium Queen Bed", price: "₹33,999", img: queen4 },
];

const QueenBeds = () => {
  return (
    <div className="product-page">

      <div className="product-hero">
        <h1>Queen Size Beds</h1>
        <p>Elegant • Stylish • Comfortable</p>
      </div>

      <div className="product-grid">
        {queenBeds.map((item) => (
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

export default QueenBeds;
import React from "react";
import "./ProductGrid.css";
import { Link } from "react-router-dom";

import open1 from "../assets/open1.jpg";
import open2 from "../assets/open2.jpg";
import open3 from "../assets/open3.jpg";
import open4 from "../assets/open4.jpg";

const wardrobes = [
  { id: 601, name: "Classic Openable Wardrobe", price: "₹29,999", img: open1 },
  { id: 602, name: "Modern Wooden Wardrobe", price: "₹34,999", img: open2 },
  { id: 603, name: "Luxury Wardrobe", price: "₹38,999", img: open3 },
  { id: 604, name: "Premium Wardrobe", price: "₹41,999", img: open4 },
];

const OpenableWardrobe = () => {
  return (
    <div className="product-page">

      <div className="product-hero">
        <h1>Openable Wardrobes</h1>
        <p>Classic • Spacious • Elegant</p>
      </div>

      <div className="product-grid">
        {wardrobes.map((item) => (
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

export default OpenableWardrobe;
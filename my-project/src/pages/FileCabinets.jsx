import React from "react";
import "./ProductGrid.css";
import { Link } from "react-router-dom";

import fc1 from "../assets/fc1.jpg";
import fc2 from "../assets/fc2.jpg";

const fileCabinets = [
  { id: 961, name: "Metal File Cabinet", price: "₹6,999", img: fc1 },
  { id: 962, name: "Wooden Storage Cabinet", price: "₹8,499", img: fc2 },
];

const FileCabinets = () => {
  return (
    <div className="product-page">

      <div className="product-hero">
        <h1>File Cabinets</h1>
        <p>Secure • Organized Storage</p>
      </div>

      <div className="product-grid">
        {fileCabinets.map((item) => (
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

export default FileCabinets;
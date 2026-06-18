import React from "react";
import "./ProductGrid.css";
import { Link } from "react-router-dom";

import mirror1 from "../assets/mirror1.jpg";
import mirror2 from "../assets/mirror2.jpg";
import mirror3 from "../assets/mirror3.jpg";
import mirror4 from "../assets/mirror4.jpg";

const mirrors = [
  {
    id: 901,
    name: "Classic Wooden Bedroom Mirror",
    price: "₹3,999",
    img: mirror1,
  },
  {
    id: 902,
    name: "Modern Wall Mirror",
    price: "₹4,499",
    img: mirror2,
  },
  {
    id: 903,
    name: "Designer Bedroom Mirror",
    price: "₹5,299",
    img: mirror3,
  },
  {
    id: 904,
    name: "Luxury Frame Mirror",
    price: "₹6,199",
    img: mirror4,
  },
];

const Mirrors = () => {
  return (
    <div className="product-page">

      {/* HERO */}
      <div className="product-hero">
        <h1>Bedroom Mirrors</h1>
        <p>Elegant • Stylish • Functional</p>
      </div>

      {/* PRODUCT GRID */}
      <div className="product-grid">
        {mirrors.map((item) => (
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

export default Mirrors;
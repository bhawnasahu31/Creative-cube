import React from "react";
import "./ProductGrid.css";
import { Link } from "react-router-dom";

import ct1 from "../assets/ct1.jpg";
import ct2 from "../assets/ct2.jpg";
import products from "../data/products";

const computerTables = [
  { id: 901, name: "Modern Computer Table", price: "₹5,999", img: ct1 },
  { id: 902, name: "Wooden Computer Desk", price: "₹7,499", img: ct2 },
];

const ComputerTables = () => {

  const computerTables = products.filter(
    (item) => item.category === "computer"
  );

  return (
    <div className="product-page">

      <div className="product-hero">
        <h1>Computer Tables</h1>
        <p>Smart Workspace • Modern Design</p>
      </div>

      <div className="product-grid">
        {computerTables.map((item) => (
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

export default ComputerTables;
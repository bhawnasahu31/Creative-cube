import React from "react";
import "./ProductGrid.css";
import { Link } from "react-router-dom";

import wc1 from "../assets/wc1.jpg";
import wc2 from "../assets/wc2.jpg";

const walkInClosets = [
  { id: 1401, name: "Luxury Walk-in Closet", price: "₹1,20,000", img: wc1 },
  { id: 1402, name: "Modern Walk-in Wardrobe", price: "₹1,45,000", img: wc2 },
];

const WalkInCloset = () => {
  return (
    <div className="product-page">

      <div className="product-hero">
        <h1>Walk-in Closet</h1>
        <p>Luxury Storage • Premium Design</p>
      </div>

      <div className="product-grid">
        {walkInClosets.map((item) => (
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

export default WalkInCloset;
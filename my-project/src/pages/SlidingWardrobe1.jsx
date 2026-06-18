import React from "react";
import "./ProductGrid.css";
import { Link } from "react-router-dom";

import sw1 from "../assets/sw1.jpg";
import sw2 from "../assets/sw2.jpg";

const slidingWardrobes = [
  { id: 1301, name: "Modern Sliding Wardrobe", price: "₹65,000", img: sw1 },
  { id: 1302, name: "Glass Door Sliding Wardrobe", price: "₹75,000", img: sw2 },
];

const SlidingWardrobe = () => {
  return (
    <div className="product-page">

      <div className="product-hero">
        <h1>Sliding Wardrobe</h1>
        <p>Space Saving • Modern Design</p>
      </div>

      <div className="product-grid">
        {slidingWardrobes.map((item) => (
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

export default SlidingWardrobe;
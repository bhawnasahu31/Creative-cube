import React from "react";
import "./ProductGrid.css";
import { Link } from "react-router-dom";

import kc1 from "../assets/kc1.jpg";
import kc2 from "../assets/kc2.jpg";

const kitchenCabinets = [
  { id: 1101, name: "Modern Kitchen Cabinet", price: "₹45,000", img: kc1 },
  { id: 1102, name: "Wooden Storage Cabinet", price: "₹55,000", img: kc2 },
];

const KitchenCabinets = () => {
  return (
    <div className="product-page">

      <div className="product-hero">
        <h1>Kitchen Cabinets</h1>
        <p>Smart Storage • Elegant Kitchen Design</p>
      </div>

      <div className="product-grid">
        {kitchenCabinets.map((item) => (
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

export default KitchenCabinets;
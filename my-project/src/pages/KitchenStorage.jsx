import React from "react";
import "./ProductGrid.css";
import { Link } from "react-router-dom";

import ks1 from "../assets/ks1.jpg";
import ks2 from "../assets/ks2.jpg";

const kitchenStorage = [
  { id: 1201, name: "Modern Kitchen Storage Unit", price: "₹25,000", img: ks1 },
  { id: 1202, name: "Wooden Kitchen Storage Rack", price: "₹18,500", img: ks2 },
];

const KitchenStorage = () => {
  return (
    <div className="product-page">

      <div className="product-hero">
        <h1>Kitchen Storage</h1>
        <p>Organized Space • Smart Kitchen</p>
      </div>

      <div className="product-grid">
        {kitchenStorage.map((item) => (
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

export default KitchenStorage;
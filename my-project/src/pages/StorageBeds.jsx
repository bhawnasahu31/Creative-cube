import React from "react";
import "./ProductGrid.css";
import { Link } from "react-router-dom";

import storage1 from "../assets/storage1.jpg";
import storage2 from "../assets/storage2.jpg";
import storage3 from "../assets/storage3.jpg";
import storage4 from "../assets/storage4.jpg";

const storageBeds = [
  { id: 401, name: "Hydraulic Storage Bed", price: "₹34,999", img: storage1 },
  { id: 402, name: "Wooden Storage Bed", price: "₹31,999", img: storage2 },
  { id: 403, name: "Premium Storage Bed", price: "₹36,999", img: storage3 },
  { id: 404, name: "Modern Storage Bed", price: "₹33,999", img: storage4 },
];

const StorageBeds = () => {
  return (
    <div className="product-page">

      <div className="product-hero">
        <h1>Storage Beds</h1>
        <p>Smart Storage • Stylish • Comfortable</p>
      </div>

      <div className="product-grid">
        {storageBeds.map((item) => (
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

export default StorageBeds;
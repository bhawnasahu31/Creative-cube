import React from "react";
import { Link } from "react-router-dom";
import "./ProductGrid.css";

// images
import recliner1 from "../assets/recliner1.jpg";
import recliner2 from "../assets/recliner2.jpg";
import recliner3 from "../assets/recliner3.jpg";
import recliner4 from "../assets/recliner4.jpg";
import products from "../data/products";

const recliners = [
  { id: 1, name: "Comfort Recliner", price: "₹32,999", img: recliner1 },
  { id: 2, name: "Luxury Recliner", price: "₹39,999", img: recliner2 },
  { id: 3, name: "Modern Recliner", price: "₹36,999", img: recliner3 },
  { id: 4, name: "Compact Recliner", price: "₹28,999", img: recliner4 },
];

const Recliners = () => {
  return (
    <div className="product-page">
      <div className="product-hero">
        <h1>Recliners</h1>
        <p>Relax • Recline • Refresh</p>
      </div>

      <div className="product-grid">
        {recliners.map((item) => (
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

export default Recliners;
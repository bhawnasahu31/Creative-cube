import React from "react";
import "./ProductGrid.css";
import { Link } from "react-router-dom";

import king1 from "../assets/king1.jpg";
import king2 from "../assets/king2.jpg";
import king3 from "../assets/king3.jpg";
import king4 from "../assets/king4.jpg";

const beds = [
  { id: 101, name: "Modern King Bed", price: "₹32,999", img: king1 },
  { id: 102, name: "Luxury King Bed", price: "₹39,999", img: king2 },
  { id: 103, name: "Wooden King Bed", price: "₹35,999", img: king3 },
  { id: 104, name: "Premium King Bed", price: "₹41,999", img: king4 },
];

const KingBeds = () => {
  return (
    <div className="product-page">

      <div className="product-hero">
        <h1>King Size Beds</h1>
        <p>Luxury • Comfort • Spacious</p>
      </div>

      <div className="product-grid">
        {beds.map((item) => (
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

export default KingBeds;
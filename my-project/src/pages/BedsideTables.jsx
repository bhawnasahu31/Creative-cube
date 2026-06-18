import React from "react";
import "./ProductGrid.css";
import { Link } from "react-router-dom";

import bed1 from "../assets/bedside1.jpg";
import bed2 from "../assets/bedside2.jpg";
import bed3 from "../assets/bedside3.jpg";
import bed4 from "../assets/bedside4.jpg";

const bedside = [
  { id: 701, name: "Modern Bedside Table", price: "₹4,999", img: bed1 },
  { id: 702, name: "Wooden Bedside Table", price: "₹5,499", img: bed2 },
  { id: 703, name: "Classic Bedside Table", price: "₹4,299", img: bed3 },
  { id: 704, name: "Premium Bedside Table", price: "₹6,199", img: bed4 },
];

const BedsideTables = () => {
  return (
    <div className="product-page">

      <div className="product-hero">
        <h1>Bedside Tables</h1>
        <p>Compact • Functional • Stylish</p>
      </div>

      <div className="product-grid">
        {bedside.map((item) => (
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

export default BedsideTables;
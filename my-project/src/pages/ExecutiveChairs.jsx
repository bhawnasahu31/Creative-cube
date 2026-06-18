import React from "react";
import "./ProductGrid.css";
import { Link } from "react-router-dom";

import ec1 from "../assets/ec1.jpg";
import ec2 from "../assets/ec2.jpg";

const executiveChairs = [
  { id: 941, name: "Luxury Executive Chair", price: "₹12,999", img: ec1 },
  { id: 942, name: "Premium Leather Chair", price: "₹14,999", img: ec2 },
];

const ExecutiveChairs = () => {
  return (
    <div className="product-page">

      <div className="product-hero">
        <h1>Executive Chairs</h1>
        <p>Luxury • Premium Comfort</p>
      </div>

      <div className="product-grid">
        {executiveChairs.map((item) => (
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

export default ExecutiveChairs;
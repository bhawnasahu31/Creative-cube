import React from "react";
import "./ProductGrid.css";
import { Link } from "react-router-dom";

import mat1 from "../assets/mat1.jpg";
import mat2 from "../assets/mat2.jpg";
// import mat3 from "../assets/mat3.jpg";
// import mat4 from "../assets/mat4.jpg";

const mattresses = [
  { id: 801, name: "Memory Foam Mattress", price: "₹12,999", img: mat1 },
  { id: 802, name: "Orthopedic Mattress", price: "₹15,999", img: mat2 },
//   { id: 803, name: "Latex Mattress", price: "₹18,999", img: mat3 },
//   { id: 804, name: "Premium Spring Mattress", price: "₹21,999", img: mat4 },
];

const Mattress = () => {
  return (
    <div className="product-page">

      <div className="product-hero">
        <h1>Mattresses</h1>
        <p>Comfort • Support • Healthy Sleep</p>
      </div>

      <div className="product-grid">
        {mattresses.map((item) => (
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

export default Mattress;
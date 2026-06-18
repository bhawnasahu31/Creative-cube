import React from "react";
import "./ProductGrid.css";
import { Link } from "react-router-dom";

import unit1 from "../assets/diningunit1.jpg";
import unit2 from "../assets/diningunit2.jpg";
import unit3 from "../assets/diningunit3.jpg";
import unit4 from "../assets/diningunit4.jpg";

const diningUnits = [
  { id: 231, name: "Modern Crockery Unit", price: "₹18,999", img: unit1 },
  { id: 232, name: "Wooden Dining Cabinet", price: "₹21,999", img: unit2 },
  { id: 233, name: "Glass Door Crockery Unit", price: "₹24,999", img: unit3 },
  { id: 234, name: "Premium Dining Storage", price: "₹27,999", img: unit4 },
];

const DiningUnits = () => {
  return (
    <div className="product-page">

      <div className="product-hero">
        <h1>Crockery Units & Dining Cabinets</h1>
        <p>Stylish Dining Storage</p>
      </div>

      <div className="product-grid">

        {diningUnits.map((item) => (

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

export default DiningUnits;
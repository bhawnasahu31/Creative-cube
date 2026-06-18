import React from "react";
import "./ProductGrid.css";
import { Link } from "react-router-dom";

import dining1 from "../assets/dining8_1.jpg";
import dining2 from "../assets/dining8_2.jpg";
import dining3 from "../assets/dining8_3.jpg";
import dining4 from "../assets/dining8_4.jpg";

const eightSeaterDining = [
  { id: 221, name: "Luxury 8 Seater Dining", price: "₹59,999", img: dining1 },
  { id: 222, name: "Royal 8 Seater Dining", price: "₹64,999", img: dining2 },
  { id: 223, name: "Premium 8 Seater Dining", price: "₹69,999", img: dining3 },
  { id: 224, name: "Modern 8 Seater Dining", price: "₹61,999", img: dining4 },
];

const EightSeaterDining = () => {
  return (
    <div className="product-page">

      <div className="product-hero">
        <h1>8 Seater Dining Tables</h1>
        <p>Luxury Dining Experience</p>
      </div>

      <div className="product-grid">

        {eightSeaterDining.map((item) => (

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

export default EightSeaterDining;
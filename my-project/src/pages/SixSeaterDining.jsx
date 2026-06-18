import React from "react";
import "./ProductGrid.css";
import { Link } from "react-router-dom";

import dining1 from "../assets/dining6_1.jpg";
import dining2 from "../assets/dining6_2.jpg";
import dining3 from "../assets/dining6_3.jpg";
import dining4 from "../assets/dining6_4.jpg";

const sixSeaterDining = [
  {
    id: 211,
    name: "Modern 6 Seater Dining",
    price: "₹38,999",
    img: dining1,
  },
  {
    id: 212,
    name: "Premium 6 Seater Dining",
    price: "₹42,999",
    img: dining2,
  },
  {
    id: 213,
    name: "Luxury 6 Seater Dining",
    price: "₹46,999",
    img: dining3,
  },
  {
    id: 214,
    name: "Classic 6 Seater Dining",
    price: "₹40,999",
    img: dining4,
  },
];

const SixSeaterDining = () => {
  return (
    <div className="product-page">

      <div className="product-hero">
        <h1>6 Seater Dining Tables</h1>
        <p>Perfect for Family Dining</p>
      </div>

      <div className="product-grid">

        {sixSeaterDining.map((item) => (
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

export default SixSeaterDining;
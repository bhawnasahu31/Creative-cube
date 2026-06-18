import React from "react";
import "./ProductGrid.css";
import { Link } from "react-router-dom";

// DINING IMAGES
import dining4_1 from "../assets/dining4_1.jpg";
import dining4_2 from "../assets/dining4_2.jpg";
import dining4_3 from "../assets/dining4_3.jpg";
import dining4_4 from "../assets/dining4_4.jpg";

const fourSeaterDining = [
  {
    id: 201,
    name: "Modern 4 Seater Dining",
    price: "₹24,999",
    img: dining4_1,
  },
  {
    id: 202,
    name: "Classic Wooden 4 Seater",
    price: "₹27,999",
    img: dining4_2,
  },
  {
    id: 203,
    name: "Luxury 4 Seater Dining",
    price: "₹29,999",
    img: dining4_3,
  },
  {
    id: 204,
    name: "Compact 4 Seater Dining",
    price: "₹21,999",
    img: dining4_4,
  },
];

const FourSeaterDining = () => {
  return (
    <div className="product-page">

      <div className="product-hero">
        <h1>4 Seater Dining Tables</h1>
        <p>Perfect for Small Families</p>
      </div>

      <div className="product-grid">

        {fourSeaterDining.map((item) => (
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

export default FourSeaterDining;
import React from "react";
import { Link } from "react-router-dom";
import "./ProductGrid.css";
import products from "../data/products";
import three1 from "../assets/three1.jpg";
import three2 from "../assets/three2.jpg";
import three3 from "../assets/three3.jpg";
import three4 from "../assets/three4.jpg";

const threeSeaters = [
  { id: 1, name: "Classic Three Seater", price: "₹29,999", img: three1 },
  { id: 2, name: "Modern Three Seater", price: "₹34,999", img: three2 },
  { id: 3, name: "Luxury Three Seater", price: "₹39,999", img: three3 },
  { id: 4, name: "Compact Three Seater", price: "₹26,999", img: three4 },
];

const ThreeSeaters = () => {
  return (
    <div className="product-page">
      <div className="product-hero">
        <h1>Three Seaters</h1>
        <p>Spacious • Premium • Elegant</p>
      </div>

      <div className="product-grid">
        {threeSeaters.map((item) => (
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

export default ThreeSeaters;
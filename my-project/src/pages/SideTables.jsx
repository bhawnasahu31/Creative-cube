import React from "react";
import "./ProductGrid.css";
import { Link } from "react-router-dom";

import side1 from "../assets/side1.jpg";
import side2 from "../assets/side2.jpg";
import side3 from "../assets/side3.jpg";
import side4 from "../assets/side4.jpg";
import products from "../data/products";

const sideTables = [
  {
    id: 301,
    name: "Wooden Side Table",
    price: "₹4,999",
    img: side1,
  },
  {
    id: 302,
    name: "Minimal Side Table",
    price: "₹5,499",
    img: side2,
  },
  {
    id: 303,
    name: "Drawer Side Table",
    price: "₹6,999",
    img: side3,
  },
  {
    id: 304,
    name: "Metal Frame Side Table",
    price: "₹5,999",
    img: side4,
  },
];

const SideTables = () => {

  const sideTables = products.filter(
    (item) => item.category === "side"
  );

  return (
    <div className="product-page">

      <div className="product-hero">
        <h1>Side Tables</h1>
        <p>Compact • Useful • Stylish</p>
      </div>

      <div className="product-grid">

        {sideTables.map((item) => (
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

export default SideTables;
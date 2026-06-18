import React from "react";
import "./ProductGrid.css";
import { Link } from "react-router-dom";

import coffee1 from "../assets/coffee1.jpg";
import coffee2 from "../assets/coffee2.jpg";
import coffee3 from "../assets/coffee3.jpg";
import coffee4 from "../assets/coffee4.jpg";
import products from "../data/products";

const coffeeTables = [
  {
    id: 201,
    name: "Classic Coffee Table",
    price: "₹9,999",
    img: coffee1,
  },
  {
    id: 202,
    name: "Round Coffee Table",
    price: "₹11,999",
    img: coffee2,
  },
  {
    id: 203,
    name: "Industrial Coffee Table",
    price: "₹13,499",
    img: coffee3,
  },
  {
    id: 204,
    name: "Minimal Coffee Table",
    price: "₹10,499",
    img: coffee4,
  },
];

const CoffeeTables = () => {

  const coffeeTables = products.filter(
    (item) => item.category === "coffee"
  );

  return (
    <div className="product-page">

      <div className="product-hero">
        <h1>Coffee Tables</h1>
        <p>Compact • Stylish • Modern</p>
      </div>

      <div className="product-grid">

        {coffeeTables.map((item) => (
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


export default CoffeeTables;
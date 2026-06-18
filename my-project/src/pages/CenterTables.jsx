import React from "react";
import "./ProductGrid.css";
import { Link } from "react-router-dom";

import center1 from "../assets/centertable1.jpg";
import center2 from "../assets/centertable2.jpg";
import center3 from "../assets/centertable3.jpg";
import center4 from "../assets/centertable4.jpg";
import products from "../data/products";

const centerTables = [
  {
    id: 101,
    name: "Modern Center Table",
    price: "₹12,999",
    img: center1,
  },
  {
    id: 102,
    name: "Glass Top Center Table",
    price: "₹15,999",
    img: center2,
  },
  {
    id: 103,
    name: "Wooden Storage Center Table",
    price: "₹18,999",
    img: center3,
  },
  {
    id: 104,
    name: "Luxury Marble Center Table",
    price: "₹22,999",
    img: center4,
  },
];

const CenterTables = () => {

  const centerTables = products.filter(
    (item) => item.category === "center"
  );

  return (
    <div className="product-page">

      <div className="product-hero">
        <h1>Center Tables</h1>
        <p>Stylish • Functional • Elegant</p>
      </div>

      <div className="product-grid">

        {centerTables.map((item) => (
          <div className="product-card" key={item.id}>

            <img src={item.img} alt={item.name} />

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
export default CenterTables;
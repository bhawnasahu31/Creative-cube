import React from "react";
import "./ProductGrid.css";
import { Link } from "react-router-dom";

import bs1 from "../assets/bs1.jpg";
import bs2 from "../assets/bs2.jpg";

const bookshelves = [
  { id: 971, name: "Modern Bookshelf", price: "₹5,999", img: bs1 },
  { id: 972, name: "Wooden Book Rack", price: "₹7,499", img: bs2 },
];

const Bookshelves = () => {
  return (
    <div className="product-page">

      <div className="product-hero">
        <h1>Bookshelves</h1>
        <p>Storage • Style • Organization</p>
      </div>

      <div className="product-grid">
        {bookshelves.map((item) => (
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

export default Bookshelves;
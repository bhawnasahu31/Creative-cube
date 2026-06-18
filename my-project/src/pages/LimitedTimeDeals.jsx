import React from "react";
import "./ProductGrid.css";
import { Link } from "react-router-dom";

import l1 from "../assets/l1.jpg";
import l2 from "../assets/l2.jpg";

const limitedDeals = [
  { id: 2001, name: "Modern Wardrobe Deal", price: "₹38,000", img: l1 },
  { id: 2002, name: "TV Unit Limited Offer", price: "₹18,500", img: l2 },
];

const LimitedTimeDeals = () => {
  return (
    <div className="product-page">

      <div className="product-hero">
        <h1>Limited Time Deals</h1>
        <p>Hurry Up • Limited Stock</p>
      </div>

      <div className="product-grid">
        {limitedDeals.map((item) => (
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

export default LimitedTimeDeals;
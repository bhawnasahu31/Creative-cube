import React from "react";
import "./ProductGrid.css";
import { Link } from "react-router-dom";

import oc1 from "../assets/oc1.jpg";
import oc2 from "../assets/oc2.jpg";

const officeChairs = [
  { id: 931, name: "Comfort Office Chair", price: "₹4,999", img: oc1 },
  { id: 932, name: "Mesh Ergonomic Chair", price: "₹6,499", img: oc2 },
];

const OfficeChairs = () => {
  return (
    <div className="product-page">

      <div className="product-hero">
        <h1>Office Chairs</h1>
        <p>Comfort • Productivity</p>
      </div>

      <div className="product-grid">
        {officeChairs.map((item) => (
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

export default OfficeChairs;
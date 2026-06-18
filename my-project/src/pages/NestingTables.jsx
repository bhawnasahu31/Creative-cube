import React from "react";
import "./ProductGrid.css";
import { Link } from "react-router-dom";

import nest1 from "../assets/nest1.jpg";
import products from "../data/products";
// import nest2 from "../assets/nest2.jpg";
// import nest3 from "../assets/nest3.jpg";
// import nest4 from "../assets/nest4.jpg";

const nestingTables = [
    {
        id: 401,
        name: "3 Piece Nesting Table Set",
        price: "₹8,999",
        img: nest1,
    }
    //   ,
    //   {
    //     id: 402,
    //     name: "Wooden Nesting Tables",
    //     price: "₹9,499",
    //     img: nest2,
    //   },
    //   {
    //     id: 403,
    //     name: "Modern Nesting Table Set",
    //     price: "₹10,999",
    //     img: nest3,
    //   },
    //   {
    //     id: 404,
    //     name: "Luxury Marble Nesting Tables",
    //     price: "₹12,499",
    //     img: nest4,
    //   },
];

const NestingTables = () => {

  const nestingTables = products.filter(
    (item) => item.category === "nesting"
  );

  return (
    <div className="product-page">

      <div className="product-hero">
        <h1>Nesting Tables</h1>
        <p>Space Saving • Stylish • Smart</p>
      </div>

      <div className="product-grid">

        {nestingTables.map((item) => (
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

export default NestingTables;
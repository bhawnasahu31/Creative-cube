import React from "react";
import "./ProductGrid.css";
import products from "../data/products";
import { Link } from "react-router-dom";

// images (apni wooden sofa images use karo)
import wooden1 from "../assets/wooden1.jpg";
import wooden2 from "../assets/wooden2.jpg";
import wooden3 from "../assets/wooden3.jpg";
import wooden4 from "../assets/wooden4.jpg";

const woodenSofas = [
    {
        id: 1,
        name: "Solid Wood Sofa",
        price: "₹27,999",
        img: wooden1,
    },
    {
        id: 2,
        name: "Teak Wood Sofa",
        price: "₹34,999",
        img: wooden2,
    },
    {
        id: 3,
        name: "Sheesham Wood Sofa",
        price: "₹39,999",
        img: wooden3,
    },
    {
        id: 4,
        name: "Modern Wooden Sofa",
        price: "₹31,999",
        img: wooden4,
    },
];

const WoodenSofas = () => {
    return (
        <div className="product-page">

            {/* HERO */}
            <div className="product-hero">
                <h1>Wooden Sofas</h1>
                <p>Strong • Natural • Timeless</p>
            </div>

            {/* PRODUCT GRID */}
            <div className="product-grid">
                {woodenSofas.map((item) => (
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

export default WoodenSofas;
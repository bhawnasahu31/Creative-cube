import React from "react";
import "./ProductGrid.css";
import { Link } from "react-router-dom";

// images (apni images use kar sakti ho)
import leather1 from "../assets/leather1.jpg";
import leather2 from "../assets/leather2.jpg";
import leather3 from "../assets/leather3.jpg";
import leather4 from "../assets/leather4.jpg";
import products from "../data/products";

const leatherSofas = [
    {
        id: 1,
        name: "Premium Leather Sofa",
        price: "₹39,999",
        img: leather1,
    },
    {
        id: 2,
        name: "Luxury Leather Sofa",
        price: "₹44,999",
        img: leather2,
    },
    {
        id: 3,
        name: "Modern Leather Sofa",
        price: "₹36,999",
        img: leather3,
    },
    {
        id: 4,
        name: "Classic Leather Sofa",
        price: "₹32,999",
        img: leather4,
    },
];

const LeatherSofas = () => {
    return (
        <div className="product-page">

            {/* HERO */}
            <div className="product-hero">
                <h1>Leather Sofas</h1>
                <p>Premium • Durable • Elegant</p>
            </div>

            {/* PRODUCT GRID */}
            <div className="product-grid">
                {leatherSofas.map((item) => (
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

export default LeatherSofas;
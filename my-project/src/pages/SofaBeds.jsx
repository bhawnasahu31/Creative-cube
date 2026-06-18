import React from "react";
import "./ProductGrid.css";

// images (apni images use karo)
import bed1 from "../assets/sofabed1.jpg";
import bed2 from "../assets/sofabed2.jpg";
import bed3 from "../assets/sofabed3.jpg";
import bed4 from "../assets/sofabed4.jpg";
import products from "../data/products";

const sofaBeds = [
    {
        id: 1,
        name: "Fabric Sofa Cum Bed",
        price: "₹32,999",
        img: bed1,
    },
    {
        id: 2,
        name: "Wooden Sofa Bed",
        price: "₹38,999",
        img: bed2,
    },
    {
        id: 3,
        name: "Storage Sofa Bed",
        price: "₹41,999",
        img: bed3,
    },
    {
        id: 4,
        name: "Luxury Sofa Bed",
        price: "₹47,999",
        img: bed4,
    },
];

const SofaBeds = () => {
    return (
        <div className="product-page">

            {/* HERO */}
            <div className="product-hero">
                <h1>Sofa Beds</h1>
                <p>Comfort • Space Saving • Multi-Purpose</p>
            </div>

            {/* GRID */}
            <div className="product-grid">
                {sofaBeds.map((item) => (
                    <div className="product-card" key={item.id}>
                         <div className="product-image">
           <img src={item.img} alt={item.name} />
            </div>
                        <div className="product-info">
                            <h3>{item.name}</h3>
                            <p className="price">{item.price}</p>
                            {/* <Link to={`/product/${item.id}`}>
                                <button>View Details</button>
                            </Link> */}
                        </div>
                    </div>
                ))}
            </div>

        </div>
    );
};

export default SofaBeds;
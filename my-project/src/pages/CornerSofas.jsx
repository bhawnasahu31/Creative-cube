import React from "react";
import "./ProductGrid.css";
import { Link } from "react-router-dom";

// images (apni images laga sakti ho)
import corner1 from "../assets/corner1.jpg";
import corner2 from "../assets/corner2.jpg";
import corner3 from "../assets/corner3.jpg";
import corner4 from "../assets/corner4.jpg";
import products from "../data/products";

const cornerSofas = [
    {
        id: 1,
        name: "Modern Corner Sofa",
        price: "₹45,999",
        img: corner1,
    },
    {
        id: 2,
        name: "Luxury L-Shape Sofa",
        price: "₹52,999",
        img: corner2,
    },
    {
        id: 3,
        name: "Compact Corner Sofa",
        price: "₹38,999",
        img: corner3,
    },
    {
        id: 4,
        name: "Premium Fabric Corner Sofa",
        price: "₹49,999",
        img: corner4,
    },
];

const CornerSofas = () => {
    return (
        <div className="product-page">

            {/* HERO */}
            <div className="product-hero">
                <h1>Corner Sofas</h1>
                <p>Space Saving • Stylish • Comfortable</p>
            </div>

            {/* PRODUCT GRID */}
            <div className="product-grid">
                {cornerSofas.map((item) => (
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

export default CornerSofas;
import React from "react";
import { Link } from "react-router-dom";
import "./ProductGrid.css";
import products from "../data/products";

// images
import sofa1 from "../assets/sofa1.jpg";
import sofa2 from "../assets/sofa2.jpg";
import sofa3 from "../assets/sofa3.jpg";
import sofa4 from "../assets/sofa4.jpg";

const fabricSofas = [
    {
        id: 1,
        name: "Classic Fabric Sofa",
        price: "₹24,999",
        img: sofa1,
    },
    {
        id: 2,
        name: "Modern Fabric Sofa",
        price: "₹29,999",
        img: sofa2,
    },
    {
        id: 3,
        name: "Luxury Fabric Sofa",
        price: "₹34,999",
        img: sofa3,
    },
    {
        id: 4,
        name: "Compact Fabric Sofa",
        price: "₹19,999",
        img: sofa4,
    },
];

const FabricSofas = () => {
    return (
        <div className="product-page">

            {/* HERO */}
            <div className="product-hero">
                <h1>Fabric Sofas</h1>
                <p>Soft • Comfortable • Stylish</p>
            </div>

            {/* GRID */}
            <div className="product-grid">
                {products.map((item) => (
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

export default FabricSofas;
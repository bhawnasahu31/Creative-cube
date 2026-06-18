import React from "react";
import "./ProductGrid.css";

// images (apni images laga sakti ho)
import set1 from "../assets/sofaset1.jpg";
import set2 from "../assets/sofaset2.jpg";
import set3 from "../assets/sofaset3.jpg";
import set4 from "../assets/sofaset4.jpg";
import products from "../data/products";

const sofaSets = [
    {
        id: 1,
        name: "3+1+1 Sofa Set",
        price: "₹49,999",
        img: set1,
    },
    {
        id: 2,
        name: "3+2 Sofa Set",
        price: "₹54,999",
        img: set2,
    },
    {
        id: 3,
        name: "Luxury Fabric Sofa Set",
        price: "₹59,999",
        img: set3,
    },
    {
        id: 4,
        name: "Premium Wooden Sofa Set",
        price: "₹64,999",
        img: set4,
    },
];

const SofaSets = () => {
    return (
        <div className="product-page">
            {/* HERO */}
            <div className="product-hero">
                <h1>Sofa Sets</h1>
                <p>Complete Seating • Elegant • Family Comfort</p>
            </div>

            {/* GRID */}
            <div className="product-grid">
                {sofaSets.map((item) => (
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

export default SofaSets;
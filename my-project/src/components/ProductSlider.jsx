import { useState } from "react";
import { FaHeart } from "react-icons/fa";
import "./ProductSlider.css";

import sofa from "../assets/p1.png";
import wardrobe from "../assets/p2.png";
import chair from "../assets/p3.png";
import dining from "../assets/p4.png";
import bed from "../assets/p5.png";

const ProductSlider = () => {
  const itemsPerView = 4;

  const products = [
    { id: 1, image: sofa, title: "Grandeur Power Recliner Sofa Set", price: "220,000", mrp: "232,000" },
    { id: 2, image: wardrobe, title: "Brilliant 4 Door Wardrobe", price: "165,000", mrp: "174,000" },
    { id: 3, image: chair, title: "Cordial Visitor Chair - Maroon", price: "6,540", mrp: "6,890" },
    { id: 4, image: dining, title: "Reveka 6 Seater Dining Table Set", price: "44,500", mrp: "46,900" },
    { id: 5, image: bed, title: "Luxury Bed", price: "75,000", mrp: "80,000" },
  ];

  const [index, setIndex] = useState(0);
  const [wishlist, setWishlist] = useState([]);

  const maxIndex = products.length - itemsPerView;

  const toggleWishlist = (id) => {
    if (wishlist.includes(id)) {
      setWishlist(wishlist.filter((item) => item !== id));
    } else {
      setWishlist([...wishlist, id]);
    }
  };

  const nextSlide = () => {
    if (index < maxIndex) {
      setIndex(index + 1);
    }
  };

  const prevSlide = () => {
    if (index > 0) {
      setIndex(index - 1);
    }
  };

  return (
    <div className="slider-wrapper">
      <div className="section-title">
        <h2>NEW ARRIVAL</h2>
        <p>Explore Our New Collections</p>
      </div>

      <button className="arrow left" onClick={prevSlide}>‹</button>

      <div className="slider-container">
        <div
          className="slider-track"
          style={{
            transform: `translateX(-${(index * 100) / itemsPerView}%)`,
          }}
        >
          {products.map((item) => (
            <div className="product-card" key={item.id}>
              <div className="image-box">
                <img src={item.image} alt={item.title} />

                {/* Wishlist */}
                <FaHeart
                  className={`wishlist ${wishlist.includes(item.id) ? "active" : ""}`}
                  onClick={() => toggleWishlist(item.id)}
                />

                {/* Add to Cart */}
                <button className="add-cart">Add to Cart</button>
              </div>

              <h4>{item.title}</h4>

              <div className="price-section">
                <span className="price">₹ {item.price}</span>
                <span className="mrp">MRP ₹ {item.mrp}</span>
                <span className="discount">(5% Off)</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <button className="arrow right" onClick={nextSlide}>›</button>
    </div>
  );
};

export default ProductSlider;
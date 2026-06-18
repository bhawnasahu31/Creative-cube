import React from "react";
import { useParams } from "react-router-dom";
import "./ProductDetail.css";
import products from "../data/products";

const ProductDetail = () => {

  const { id } = useParams();

  const product = products.find(
    (item) => item.id == id
  );

  if (!product) {
    return <h2 style={{ textAlign: "center" }}>Product Not Found</h2>;
  }

  return (
    <div className="product-detail">

      <div className="product-images">
        <img src={product.img} alt={product.name} />
      </div>

      <div className="product-info-detail">
        <h1>{product.name}</h1>
        <p className="price">{product.price}</p>

        <p className="desc">{product.desc}</p>

        <ul className="features">
          {product.features.map((feature, index) => (
            <li key={index}>✔ {feature}</li>
          ))}
        </ul>

        <div className="actions">
          <button className="add-cart">Add to Cart</button>
          <button className="buy-now">Buy Now</button>
        </div>

      </div>

    </div>
  );
};

export default ProductDetail;
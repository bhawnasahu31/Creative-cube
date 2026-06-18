import React, { useContext } from "react";
import { CartContext } from "../context1/CartContext";

const Cart = () => {

  const { cart, removeFromCart } = useContext(CartContext);

  return (
    <div style={{ padding: "20px" }}>

      <h2>Cart</h2>

      <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>

        {cart.length === 0 ? (
          <p>Your cart is empty</p>
        ) : (
          cart.map((item) => (
            <div
              key={item.id}
              style={{
                border: "1px solid #ddd",
                padding: "15px",
                width: "200px",
                borderRadius: "10px",
                boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
                textAlign: "center"
              }}
            >

              <h4>{item.name}</h4>

              <button
                onClick={() => removeFromCart(item.id)}
                style={{
                  marginTop: "10px",
                  padding: "6px 12px",
                  background: "red",
                  color: "white",
                  border: "none",
                  borderRadius: "5px",
                  cursor: "pointer"
                }}
              >
                Remove
              </button>

            </div>
          ))
        )}

      </div>

    </div>
  );
};

export default Cart;
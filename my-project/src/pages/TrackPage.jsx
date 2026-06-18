import React, { useState } from "react";
import "./TrackPage.css";

const TrackPage = () => {

  const [orderId, setOrderId] = useState("");
  const [showStatus, setShowStatus] = useState(false);

  const handleTrack = () => {
    if(orderId !== ""){
      setShowStatus(true);
    }
  };

  return (
    <div className="track-container">

      <div className="track-card">

        <h2>Track Your Order</h2>
        <p>Enter your order ID to check delivery status</p>

        <div className="track-input">

          <input
            type="text"
            placeholder="Enter Order ID"
            value={orderId}
            onChange={(e)=>setOrderId(e.target.value)}
          />

          <button onClick={handleTrack}>
            Track Order
          </button>

        </div>

        {showStatus && (

          <div className="order-status">

            <h3>Order ID: {orderId}</h3>

            <div className="status-line">

              <div className="status active">
                <span>✔</span>
                <p>Order Placed</p>
              </div>

              <div className="status active">
                <span>✔</span>
                <p>Packed</p>
              </div>

              <div className="status active">
                <span>✔</span>
                <p>Shipped</p>
              </div>

              <div className="status">
                <span>4</span>
                <p>Out for Delivery</p>
              </div>

              <div className="status">
                <span>5</span>
                <p>Delivered</p>
              </div>

            </div>

          </div>

        )}

      </div>

    </div>
  );
};

export default TrackPage;
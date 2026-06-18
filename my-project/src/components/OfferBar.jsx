import React, { useState, useEffect } from "react";
import "./OfferBar.css";

import sofa3 from "../assets/sofa3.jpg";
import right1 from "../assets/right1.mp4";

import dining4_2 from "../assets/dining4_1.jpg";
import right2 from "../assets/right2.jpg";

import king1 from "../assets/king1.jpg";
import right3 from "../assets/right3.jpg";

const offers = [
  {
    left: sofa3,
    right: right1,
    type: "video",
  },
  {
    left: dining4_2,
    right: right2,
    type: "image",
  },
  {
    left: king1,
    right: right3,
    type: "image",
  },
];

const OfferBar = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const slide = setInterval(() => {
      setIndex((prev) => (prev + 1) % offers.length);
    }, 4000);

    return () => clearInterval(slide);
  }, []);

  return (
    <div className="offer-wrapper">
      <div
        className="offer-track"
        style={{ transform: `translateX(-${index * 100}%)` }}
      >
        {offers.map((item, i) => (
          <div className="offer-slide" key={i}>

            {/* LEFT IMAGE */}
            <div className="offer-left">
              <img src={item.left} alt="left offer" />
            </div>

            {/* RIGHT SIDE */}
            <div className="offer-right">
              {item.type === "video" ? (
                <video
                  src={item.right}
                  autoPlay
                  loop
                  muted
                  playsInline
                />
              ) : (
                <img src={item.right} alt="right offer" />
              )}
            </div>

          </div>
        ))}
      </div>
    </div>
  );
};

export default OfferBar;
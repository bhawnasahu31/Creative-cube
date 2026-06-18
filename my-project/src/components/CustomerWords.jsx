import React from "react";
import "./CustomerWords.css";

import img1 from "../assets/t1.png";
import img2 from "../assets/t2.png";
import img3 from "../assets/t3.png";
import img4 from "../assets/t4.png";

const CustomerWords = () => {
  const testimonials = [
    {
      id: 1,
      image: img1,
      text: `Top-Notch Quality with Excellent Service!
      Highly impressed with the quality of the furniture I purchased.
      The team was friendly, professional, and`,
      name: "Khizer Ameen",
      location: "Bilaspur",
    },
    {
      id: 2,
      image: img2,
      text: `I recently visited Damro for furniture shopping,
      and their service was outstanding The staff was knowledgeable,
      patient, and helpful in guiding me to the`,
      name: "Bandana Singh",
      location: "Jamshedpur, Jharkhand",
    },
    {
      id: 3,
      image: img3,
      text: `Superb collection. I regret not going to this place
      for the last two years when I bought some furniture
      from other places including Ikea.`,
      name: "Chanakya",
      location: "A S Rao Nagar, Telangana",
    },
    {
      id: 4,
      image: img4,
      text: `We ordered an office chair that was delivered
      promptly and installed efficiently.
      He was very well`,
      name: "Deepika",
      location: "Anna Nagar, Tamil Nadu",
    },
  ];

  return (
    <div className="testimonial-section">
      <div className="testimonial-title">
        <h2>Customer Words</h2>
        <p>Happy Testimonials From Our Satisfied Customers</p>
      </div>

      <div className="testimonial-container">
        {testimonials.map((item) => (
          <div className="testimonial-card" key={item.id}>
            <img src={item.image} alt={item.name} />

            <p className="testimonial-text">{item.text}</p>

            <div className="stars">
              ★★★★★
            </div>

            <h4>{item.name}</h4>
            <span>{item.location}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CustomerWords;
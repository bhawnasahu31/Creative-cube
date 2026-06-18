import React from "react";
import "./OurServices.css";

const OurServices = () => {
  const services = [
    {
      title: "Custom Furniture",
      desc: "Premium modular and custom-made furniture tailored to your space and needs."
    },
    {
      title: "Fast Delivery",
      desc: "Safe and quick delivery service right to your doorstep."
    },
    {
      title: "Free Installation",
      desc: "Professional installation service with zero hidden charges."
    },
    {
      title: "24/7 Support",
      desc: "Dedicated customer support team to assist you anytime."
    },
    {
      title: "Interior Solutions",
      desc: "Complete home and office interior design solutions."
    },
    {
      title: "Space Planning",
      desc: "Smart space planning for modern and efficient living."
    },
  ];

  return (
    <section className="services-section">
      <div className="services-title">
        <h2>Our Services</h2>
        <p>We Provide Best Furniture & Interior Services</p>
      </div>

      <div className="services-container">
        {services.map((service, index) => (
          <div className="service-card" key={index}>
            <h3>{service.title}</h3>
            <p>{service.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OurServices;
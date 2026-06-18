import React from "react";
import "./ModularKitchenHome.css";

// images
import mk1 from "../assets/mk1.jpg";
import mk2 from "../assets/mk2.jpg";
import mk3 from "../assets/kc1.jpg";
import mk4 from "../assets/kc2.jpg";
import mk5 from "../assets/ks1.jpg";

const kitchenData = [
  { title: "Modern Kitchen", img: mk1 },
  { title: "Luxury Wooden Kitchen", img: mk2 },
  { title: "L Shape Kitchen", img: mk3 },
  { title: "U Shape Kitchen", img: mk4 },
  { title: "Island Kitchen", img: mk5 },
];

const ModularKitchenHome = () => {
  return (
    <div className="kitchen-home">

      {/* HERO */}
      {/* <section className="kitchen-hero">
        <h1>Modular Kitchen</h1>
        <p>Smart Storage • Elegant Design</p>
      </section> */}

      {/* GRID */}
      <section className="kitchen-grid">
        {kitchenData.map((item, index) => (
          <div className="kitchen-card" key={index}>

            <div className="product-image">
              <img src={item.img} alt={item.title} />
            </div>

            <div className="kitchen-card-overlay">
              <h3>{item.title}</h3>
              <button>Explore</button>
            </div>

          </div>
        ))}
      </section>

    </div>
  );
};

export default ModularKitchenHome;
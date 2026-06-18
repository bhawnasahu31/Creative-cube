import "./Collections.css";

import recliner from "../assets/c1.png";
import dining from "../assets/c2.png";
import chair from "../assets/c3.png";
import office from "../assets/c4.png";
import study from "../assets/c5.png";
import mattress from "../assets/c6.png";
import bed from "../assets/c7.png";
import sofa from "../assets/c8.png";
import tv from "../assets/c9.png";
import center from "../assets/c10.png";
import wardrobe from "../assets/c11.png";
import modular from "../assets/c12.png";

const Collections = () => {
  const categories = [
    { id: 1, name: "Recliners", image: recliner },
    { id: 2, name: "Dining Table Sets", image: dining },
    { id: 3, name: "Chairs", image: chair },
    { id: 4, name: "Office Tables", image: office },
    { id: 5, name: "Study & Computer Tables", image: study },
    { id: 6, name: "Mattresses", image: mattress },
    { id: 7, name: "Beds", image: bed },
    { id: 8, name: "Sofa Sets", image: sofa },
    { id: 9, name: "TV Stands & Wall Units", image: tv },
    { id: 10, name: "Center Tables", image: center },
    { id: 11, name: "Wardrobes", image: wardrobe },
    { id: 12, name: "Modular Furniture", image: modular },
  ];

  return (
    <section className="collections">
      <h2>Our Collections</h2>

      <div className="collections-grid">
        {categories.map((item) => (
          <div className="collection-card" key={item.id}>
            <img src={item.image} alt={item.name} />
            <p>{item.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Collections;
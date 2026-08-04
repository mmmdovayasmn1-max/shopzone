import "./FeaturedProductsHer.css";
import { useState } from "react";
import pinkBag from "../../assets/images/HER/pink-bag.png";
import pinkHighHeeledShoes from "../../assets/images/HER/pink-high-heeled-shoes.png";
import bloomPerfume from "../../assets/images/HER/bloom-perfume.png";
import makeupSet from "../../assets/images/HER/makeup-set.png";

const FeaturedProductsHer = () => {
  const [activeCategory, setActiveCategory]= useState("All");
  return (
    <section className="featured-products-her">

      <div className="featured-header-her">
        <h2>Featured Products</h2>
        <p>Handpicked just for you</p>
      </div>

<div className="categories-her">
  <button
    className={activeCategory === "All" ? "active-her" : ""}
    onClick={() => setActiveCategory("All")}
  >
    All
  </button>

  <button
    className={activeCategory === "Dresses" ? "active-her" : ""}
    onClick={() => setActiveCategory("Dresses")}
  >
    Dresses
  </button>

  <button
    className={activeCategory === "Shoes" ? "active-her" : ""}
    onClick={() => setActiveCategory("Shoes")}
  >
    Shoes
  </button>

  <button
    className={activeCategory === "Bags" ? "active-her" : ""}
    onClick={() => setActiveCategory("Bags")}
  >
    Bags
  </button>

  <button
    className={activeCategory === "Beauty" ? "active-her" : ""}
    onClick={() => setActiveCategory("Beauty")}
  >
    Beauty
  </button>
</div>

      <div className="product-grid-her">

        <div className="product-card-her">
          ❤️
          <div className="product-image-her"> 
            <img src={pinkBag} alt=" Pink Bag" />
          </div>
          <h3>Pink Bag</h3>
          <p className="price-her">$89</p>
          <button>Buy Now</button>
        </div>

        <div className="product-card-her">
          ❤️
          <div className="product-image-her">
         <img src={pinkHighHeeledShoes} alt="Pink High Heeled Shoes" />
         </div>
          <h3>Pink High-Heeled Shoes</h3>
          <p className="price-her">$75</p>
          <button>Buy Now</button>
        </div>

        <div className="product-card-her">
          ❤️
          <div className="product-image-her">
          <img src={bloomPerfume} alt="Bloom Perfume" />
          </div>
          <h3>Carolina Herrera Perfume</h3>
          <p className="price-her">$95</p>
          <button>Buy Now</button>
        </div>

        <div className="product-card-her">
          ❤️
         <div className="product-image-her">
         <img src={makeupSet} alt="Makeup Set" />
         </div>
          <h3>Princess Dress</h3>
          <p className="price-her">$120</p>
          <button>Buy Now</button>
        </div>

      </div>

    </section>
  );
};

export default FeaturedProductsHer;
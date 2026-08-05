import "./FeaturedProductsHim.css";
import { useState } from "react";
import { menProducts } from "../../data/products";
const FeaturedProductsHim = () => {
  const [activeCategory, setActiveCategory]= useState("All");
  const products = menProducts
 
  
  const filteredProducts =
  activeCategory === "All"
    ? products
    : products.filter(
        (product) => product.category === activeCategory
      );

  return (
    <section className="featured-products-him">

      <div className="featured-header-him">
        <h2>Featured Products</h2>
        <p>Handpicked just for you</p>
      </div>

      <div className="categories-him">
       <button
  className={activeCategory === "All" ? "active-him" : ""}
  onClick={() => setActiveCategory("All")}
>
  All
</button>

<button
  className={activeCategory === "Clothing" ? "active-him" : ""}
  onClick={() => setActiveCategory("Clothing")}
>
  Clothing
</button>

<button
  className={activeCategory === "Sneakers" ? "active-him" : ""}
  onClick={() => setActiveCategory("Sneakers")}
>
  Sneakers
</button>

<button
  className={activeCategory === "Watches" ? "active-him" : ""}
  onClick={() => setActiveCategory("Watches")}
>
  Watches
</button>

<button
  className={activeCategory === "Grooming" ? "active-him" : ""}
  onClick={() => setActiveCategory("Grooming")}
>
  Grooming
</button>
      </div>

      <div className="product-grid-him">
  {filteredProducts.map((product) => (
    <div className="product-card-him" key={product.id}>
      💙
      <div className="product-image-him">
        <img src={product.image} alt={product.name} />
      </div>

      <h3>{product.name}</h3>

      <p className="price-him">${product.price}</p>

      <button>Buy Now</button>
    </div>
  ))}
</div>

    </section>
  );
};

export default FeaturedProductsHim;
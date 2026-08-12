import "./FeaturedProductsHer.css";
import { useState } from "react";
import {useNavigate} from "react-router-dom";
import { womenProducts } from "../../data/products";
import { useCart } from "../../context/CartContext";
import WishlistButton from "../WishlistButton/WishlistButton";
const FeaturedProductsHer = () => {
  const { addToCart, cartItems } = useCart();
  const navigate = useNavigate();
  const [activeCategory, setActiveCategory] = useState("All");
  const [addedProducts, setAddedProducts] = useState([]);

  const products = womenProducts
const filteredProducts =
  activeCategory === "All"
    ? products
    : products.filter(
        (product) => product.category === activeCategory
      );

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
    className={activeCategory === "Perfume" ? "active-her" : ""}
    onClick={() => setActiveCategory("Perfume")}
  >
    Perfume
  </button>
</div>

        <div className="product-grid-her">
  {filteredProducts.map((product) => (
   <div className="product-card-her" key={product.id}>
  
  <WishlistButton product={product} variant="her" />

  <div
  className="product-image-her"
  onClick={() => navigate(`/product/her/${product.id}`)}
>
  <img src={product.image} alt={product.name} />
</div>

<h3 onClick={() => navigate(`/product/her/${product.id}`)}>
  {product.name}
</h3>
  <p className="price-her">${product.price}</p>
      

      

    <button
  className={addedProducts.includes(product.id) ? "added-btn" : ""}
  onClick={() => {
    addToCart(product);
    setAddedProducts((prev) => [...prev, product.id]);
  }}
>
  {addedProducts.includes(product.id)
    ? "✓ Added to Basket"
    : "Add to Basket"}
</button>
    </div>
  ))}

       
   </div>

    </section>
  );
};

export default FeaturedProductsHer;
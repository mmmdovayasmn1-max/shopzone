import "./ProductDetailsHer.css";
import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import { useProducts } from "../context/ProductContext";
import { useCart } from "../context/CartContext";
import { useWishlist } from "../context/WishlistContext";
import { useState } from "react";

const ProductDetailsHer = () => {
  const { id } = useParams();
  const { addToCart, cartItems } = useCart();
  const { toggleWishlist, isInWishlist } = useWishlist();
  const [selectedColor, setSelectedColor] = useState("");
  const [selectedSize, setSelectedSize] = useState("");

  const { products } = useProducts();
  const product = products.find(
    (item) => item.id === id && item.gender === "her"
  );
 
  if (!product) {
    return <h2>Product not found</h2>;
  }
 const isClothing = product.category === "Dresses";
const isShoes = product.category === "Shoes";
 const isInCart = cartItems.some((item) => item.id === product.id);
 const wishlistActive = isInWishlist(product.id);

  return (
    <>
      <Navbar />

      <section className="product-details-her">

        <div className="product-image-section-her">

          <div className="main-image-her">
            <img
              src={product.image}
              alt={product.name}
            />
          </div>

          <div className="thumbnail-gallery-her">

            <div className="thumb-her">
              <img src={product.image} alt={product.name} />
            </div>

            <div className="thumb-her">
              <img src={product.image} alt={product.name} />
            </div>

            <div className="thumb-her">
              <img src={product.image} alt={product.name} />
            </div>

          </div>

        </div>

        <div className="product-info-her">

          <span className="product-category-her">
            {product.category}
          </span>

          <h1>{product.name}</h1>

          <div className="rating-her">
            ⭐⭐⭐⭐⭐
            <span>(128 Reviews)</span>
          </div>

          <h2>${product.price}</h2>

          <p>
            Discover our {product.name}, carefully selected
            to bring elegance, quality and style to your
            everyday look.
          </p>

         {product.category !== "Perfume" && (
  <div className="colors-her">
    <h4>Color</h4>

    <div className="color-list-her">
      <button type="button" aria-label="Pink" className={`pink-her ${selectedColor === "pink" ? "selected" : ""}`} onClick={() => setSelectedColor("pink")}></button>
      <button type="button" aria-label="Black" className={`black-her ${selectedColor === "black" ? "selected" : ""}`} onClick={() => setSelectedColor("black")}></button>
      <button type="button" aria-label="White" className={`white-her ${selectedColor === "white" ? "selected" : ""}`} onClick={() => setSelectedColor("white")}></button>
    </div>
  </div>
)}
          {(isClothing || isShoes) && (
    <div className="sizes-her">
        <h4>Size</h4>

        {isClothing ? (
            <>
                {["XS", "S", "M", "L"].map((size) => <button key={size} className={selectedSize === size ? "selected" : ""} onClick={() => setSelectedSize(size)}>{size}</button>)}
            </>
        ) : (
            <>
                {["36", "37", "38", "39", "40", "41"].map((size) => <button key={size} className={selectedSize === size ? "selected" : ""} onClick={() => setSelectedSize(size)}>{size}</button>)}
            </>
        )}
    </div>
)}

          <div className="actions-her">

            <button className={`cart-btn-her ${isInCart ? "added" : ""}`} onClick={() => addToCart(product)}>
              {isInCart ? "✓ Added to Basket" : "Add to Basket"}
            </button>

            <button className={`wishlist-btn-her ${wishlistActive ? "active" : ""}`} onClick={() => toggleWishlist(product)}>
              {wishlistActive ? "♥ Wishlisted" : "♡ Wishlist"}
            </button>

          </div>

        </div>

      </section>

      <Footer />
    </>
  );
};

export default ProductDetailsHer;

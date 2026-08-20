import "./ProductDetailsHim.css";
import Navbar from "../components/Navbar/NavbarHim";
import Footer from "../components/Footer/Footer";
import { useParams } from "react-router-dom";
import { useProducts } from "../context/ProductContext";
import { useCart } from "../context/CartContext";
import { useWishlist } from "../context/WishlistContext";
import { useState } from "react";
const ProductDetailsHim = () => {
    const { id } = useParams();
    const { addToCart, cartItems } = useCart();
    const { toggleWishlist, isInWishlist } = useWishlist();
    const [selectedColor, setSelectedColor] = useState("");
    const [selectedSize, setSelectedSize] = useState("");

    const { products } = useProducts();
    const product = products.find(
        (item) => item.id === id && item.gender === "him"
    );

    if (!product) {
        return <h2>Product not found</h2>;
    }

    const isClothing = product.category === "Clothing";
    const isShoes = product.category === "Sneakers";
    const isInCart = cartItems.some((item) => item.id === product.id);
    const wishlistActive = isInWishlist(product.id);

    return (
  <>
    <Navbar />

    <section className="product-details-him">

      <div className="product-image-section-him">

        <div className="main-image-him">
          <img
            src={product.image}
            alt={product.name}
          />
        </div>

        <div className="thumbnail-gallery-him">
          <div className="thumb-him"></div>
          <div className="thumb-him"></div>
          <div className="thumb-him"></div>
          <div className="thumb-him"></div>
        </div>

      </div>

      <div className="product-info-him">

        <span className="product-category-him">
          {product.category}
        </span>

        <h1>{product.name}</h1>

        <div className="rating-him">
          ⭐⭐⭐⭐⭐
          <span>(128 Reviews)</span>
        </div>

        <h2>${product.price}</h2>

        <p>
          Elegant product designed for everyday style.
          Crafted with premium materials and modern details.
        </p>

        {product.category !== "Grooming" && (
          <div className="colors-him">
            <h4>Color</h4>

            <div className="color-list-him">
              <button type="button" aria-label="Blue" className={`pink-him ${selectedColor === "blue" ? "selected" : ""}`} onClick={() => setSelectedColor("blue")}></button>
              <button type="button" aria-label="Black" className={`black-him ${selectedColor === "black" ? "selected" : ""}`} onClick={() => setSelectedColor("black")}></button>
              <button type="button" aria-label="White" className={`white-him ${selectedColor === "white" ? "selected" : ""}`} onClick={() => setSelectedColor("white")}></button>
            </div>
          </div>
        )}

        {(isClothing || isShoes) && (
          <div className="sizes-him">

            <h4>Size</h4>

            {isClothing ? (
              <>
                {["XS", "S", "M", "L", "XL"].map((size) => <button key={size} className={selectedSize === size ? "selected" : ""} onClick={() => setSelectedSize(size)}>{size}</button>)}
              </>
            ) : (
              <>
                {["36", "37", "38", "39", "40", "41"].map((size) => <button key={size} className={selectedSize === size ? "selected" : ""} onClick={() => setSelectedSize(size)}>{size}</button>)}
              </>
            )}

          </div>
        )}

        <div className="actions-him">

          <button className={`cart-btn-him ${isInCart ? "added" : ""}`} onClick={() => addToCart(product)}>
            {isInCart ? "✓ Added to Basket" : "Add to Basket"}
          </button>

          <button className={`wishlist-btn-him ${wishlistActive ? "active" : ""}`} onClick={() => toggleWishlist(product)}>
            {wishlistActive ? "♥ Wishlisted" : "♡ Wishlist"}
          </button>

        </div>

      </div>

    </section>

    <Footer />
  </>
);
};

export default ProductDetailsHim;

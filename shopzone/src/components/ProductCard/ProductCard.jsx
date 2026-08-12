import { Link } from "react-router-dom";

import { useCart } from "../../context/CartContext";
import "./ProductCard.css";
import WishlistButton from "../WishlistButton/WishlistButton";

function ProductCard({ product, gender }) {
  const { addToCart, cartItems } = useCart();

  const isInCart = cartItems.some(
    (item) => item.id === product.id
  );

  return (
    <div className={`product-card ${gender}`}>

      {/* Wishlist */}
      <WishlistButton
        product={product}
        variant={gender}
      />

      {/* Product Image + Name */}
      <Link
        to={`/product/${gender === "women" ? "her" : gender}/${product.id}`}
        className="product-link"
      >
        <div className="product-image">
          <img
            src={product.image}
            alt={product.name}
          />
        </div>

        <h3>{product.name}</h3>
      </Link>

      {/* Price */}
      <p>${product.price}</p>

      {/* Add To Basket */}
      <button
        className={`basket-button ${gender} ${
          isInCart ? "added" : ""
        }`}
        onClick={() => addToCart(product)}
      >
        {isInCart
          ? "✓ Added to Basket"
          : "Add to Basket"}
      </button>

    </div>
  );
}

export default ProductCard;

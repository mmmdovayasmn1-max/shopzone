import { useWishlist } from "../../context/WishlistContext";
import "./WishlistButton.css";

function WishlistButton({ product, variant="her" }) {
  const { toggleWishlist, isInWishlist } = useWishlist();

  const active = isInWishlist(product.id);

  return (
    <button
      className={`wishlist-btn ${variant} ${
        active ? "wishlist-active" : ""
      }`}
      onClick={() => toggleWishlist(product)}
    >
      {active ? "♥️" : "♡"}
    </button>
  );
}

export default WishlistButton;
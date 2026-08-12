import { useWishlist } from "../../context/WishlistContext";
import WishlistButton from "../../components/WishlistButton/WishlistButton";
import "./Wishlist.css";

const Wishlist = () => {
  const { wishlistItems } = useWishlist();

  return (
    <div className="wishlist-page">
      <h1>My Wishlist</h1>

      {wishlistItems.length === 0 ? (
        <p className="empty-wishlist">Your wishlist is empty 🤍</p>
      ) : (
        <div className="wishlist-grid">
          {wishlistItems.map((product) => (
            <div className="wishlist-card" key={product.id}>

              <WishlistButton product={product} />

              <div className="wishlist-image">
                <img src={product.image} alt={product.name} />
              </div>

              <h3>{product.name}</h3>

              <p>${product.price}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Wishlist;
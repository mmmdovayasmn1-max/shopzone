import { Link } from "react-router-dom";
import { useProducts } from "../../context/ProductContext";
import { useCart } from "../../context/CartContext";
import WishlistButton from "../WishlistButton/WishlistButton";
import "./NewArrivalsHer.css";

const NewArrivalsHer = () => {
  const { addToCart, cartItems } = useCart();
  const { products } = useProducts();
  const newArrivals = products.filter((product) => product.gender === "her").slice(0, 4);

  return (
    <section className="new-arrivals-her">
      <div className="new-header-her">
        <span className="new-badge-her">NEW ARRIVALS</span>
        <h2>Fresh Drops</h2>
        <p>Discover the latest styles picked just for you.</p>
      </div>
      <div className="new-grid-her">
        {newArrivals.map((product) => {
          const isInCart = cartItems.some((item) => item.id === product.id);
          return (
            <article className="new-card-her" key={product.id}>
              <span className="tag-her">NEW</span>
              <WishlistButton product={product} variant="her" />
              <Link to={`/product/her/${product.id}`} className="new-product-link-her">
                <img className="new-image-her" src={product.image} alt={product.name} />
                <h3>{product.name}</h3>
              </Link>
              <p className="price-her">${product.price}</p>
              <button className={`view-btn-her ${isInCart ? "added" : ""}`} onClick={() => addToCart(product)}>
                {isInCart ? "✓ Added to Basket" : "Add to Basket"}
              </button>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default NewArrivalsHer;

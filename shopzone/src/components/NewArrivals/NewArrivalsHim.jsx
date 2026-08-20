import { Link } from "react-router-dom";
import { useProducts } from "../../context/ProductContext";
import { useCart } from "../../context/CartContext";
import WishlistButton from "../WishlistButton/WishlistButton";
import "./NewArrivalsHim.css";

const NewArrivalsHim = () => {
  const { addToCart, cartItems } = useCart();
  const { products } = useProducts();
  const newArrivals = products.filter((product) => product.gender === "him").slice(0, 4);

  return (
    <section className="new-arrivals-him">
      <div className="new-header-him">
        <span className="new-badge-him">NEW ARRIVALS</span>
        <h2>Fresh Essentials</h2>
        <p>Discover the latest men's collection.</p>
      </div>
      <div className="new-grid-him">
        {newArrivals.map((product) => {
          const isInCart = cartItems.some((item) => item.id === product.id);
          return (
            <article className="new-card-him" key={product.id}>
              <span className="tag-him">NEW</span>
              <WishlistButton product={product} variant="him" />
              <Link to={`/product/him/${product.id}`} className="new-product-link-him">
                <img className="new-image-him" src={product.image} alt={product.name} />
                <h3>{product.name}</h3>
              </Link>
              <p className="price-him">${product.price}</p>
              <button className={`view-btn-him ${isInCart ? "added" : ""}`} onClick={() => addToCart(product)}>
                {isInCart ? "✓ Added to Basket" : "Add to Basket"}
              </button>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default NewArrivalsHim;

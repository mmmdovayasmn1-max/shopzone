import "./ProductDetailsHim.css";
import Navbar from "../components/Navbar/NavbarHim";
import Footer from "../components/Footer/Footer";

const ProductDetailsHim = () => {
  return (
    <>
      <Navbar />

      <section className="product-details-him">

        <div className="product-image-section-him">
          <div className="main-image-him"></div>

          <div className="thumbnail-gallery-him">
            <div className="thumb-him"></div>
            <div className="thumb-him"></div>
            <div className="thumb-him"></div>
            <div className="thumb-him"></div>
          </div>
        </div>

        <div className="product-info-him">

          <span className="product-category-him">
            New Collection
          </span>

          <h1>Luxury Handbag</h1>

          <div className="rating-him">
            ⭐⭐⭐⭐⭐
            <span>(128 Reviews)</span>
          </div>

          <h2>$189</h2>

          <p>
            Elegant handbag designed for everyday style.
            Crafted with premium materials and modern details.
          </p>

          <div className="colors-him">
            <h4>Color</h4>

            <div className="color-list-him">
              <span className="pink-him"></span>
              <span className="black-him"></span>
              <span className="white-him"></span>
            </div>
          </div>

          <div className="sizes-him">
            <h4>Size</h4>

            <button>S</button>
            <button>M</button>
            <button>L</button>
          </div>

          <div className="actions-him">
            <button className="cart-btn-him">
              Add to Cart
            </button>

            <button className="wishlist-btn-him">
              ♡ Wishlist
            </button>
          </div>

        </div>

      </section>

      <Footer />
    </>
  );
};

export default ProductDetailsHim
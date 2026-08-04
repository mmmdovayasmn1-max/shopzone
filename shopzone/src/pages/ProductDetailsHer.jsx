import "./ProductDetailsHer.css";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";

const ProductDetailsHer = () => {
  return (
    <>
      <Navbar />

      <section className="product-details-her">

        <div className="product-image-section-her">
          <div className="main-image-her"></div>

          <div className="thumbnail-gallery-her">
            <div className="thumb-her"></div>
            <div className="thumb-her"></div>
            <div className="thumb-her"></div>
            <div className="thumb-her"></div>
          </div>
        </div>

        <div className="product-info-her">

          <span className="product-category-her">
            New Collection
          </span>

          <h1>Luxury Handbag</h1>

          <div className="rating-her">
            ⭐⭐⭐⭐⭐
            <span>(128 Reviews)</span>
          </div>

          <h2>$189</h2>

          <p>
            Elegant handbag designed for everyday style.
            Crafted with premium materials and modern details.
          </p>

          <div className="colors-her">
            <h4>Color</h4>

            <div className="color-list-her">
              <span className="pink-her"></span>
              <span className="black-her"></span>
              <span className="white-her"></span>
            </div>
          </div>

          <div className="sizes-her">
            <h4>Size</h4>

            <button>S</button>
            <button>M</button>
            <button>L</button>
          </div>

          <div className="actions-her">
            <button className="cart-btn-her">
              Add to Cart
            </button>

            <button className="wishlist-btn-her">
              ♡ Wishlist
            </button>
          </div>

        </div>

      </section>

      <Footer />
    </>
  );
};

export default ProductDetailsHer;
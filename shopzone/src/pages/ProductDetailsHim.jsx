import "./ProductDetailsHim.css";
import Navbar from "../components/Navbar/NavbarHim";
import Footer from "../components/Footer/Footer";
import { useParams } from "react-router-dom";
import { menProducts } from "../data/products";
const ProductDetailsHim = () => {
    const { id } = useParams();

    const product = menProducts.find(
        (item) => item.id === Number(id)
    );

    if (!product) {
        return <h2>Product not found</h2>;
    }

    const isClothing = product.category === "Clothing";
    const isShoes = product.category === "Sneakers";

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
              <span className="pink-him"></span>
              <span className="black-him"></span>
              <span className="white-him"></span>
            </div>
          </div>
        )}

        {(isClothing || isShoes) && (
          <div className="sizes-him">

            <h4>Size</h4>

            {isClothing ? (
              <>
                <button>XS</button>
                <button>S</button>
                <button>M</button>
                <button>L</button>
                <button>XL</button>
              </>
            ) : (
              <>
                <button>36</button>
                <button>37</button>
                <button>38</button>
                <button>39</button>
                <button>40</button>
                <button>41</button>
              </>
            )}

          </div>
        )}

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

export default ProductDetailsHim;
  
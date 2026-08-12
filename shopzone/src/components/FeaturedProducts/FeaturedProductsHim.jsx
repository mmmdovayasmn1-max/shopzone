import "./FeaturedProductsHim.css";
import { useState } from "react";
import { menProducts } from "../../data/products";
import { useCart } from "../../context/CartContext";
import { Link } from "react-router-dom";
import WishlistButton from "../WishlistButton/WishlistButton";

const FeaturedProductsHim = () => {

  const { addToCart } = useCart();

  const [activeCategory, setActiveCategory] = useState("All");
  const [addedProducts, setAddedProducts] = useState([]);

  const products = menProducts;

  const filteredProducts =
    activeCategory === "All"
      ? products
      : products.filter(
          (product) => product.category === activeCategory
        );

  return (
    <section className="featured-products-him">

      <div className="featured-header-him">
        <h2>Featured Products</h2>
        <p>Handpicked just for you</p>
      </div>

      <div className="categories-him">

        <button
          className={activeCategory === "All" ? "active-him" : ""}
          onClick={() => setActiveCategory("All")}
        >
          All
        </button>

        <button
          className={activeCategory === "Clothing" ? "active-him" : ""}
          onClick={() => setActiveCategory("Clothing")}
        >
          Clothing
        </button>

        <button
          className={activeCategory === "Sneakers" ? "active-him" : ""}
          onClick={() => setActiveCategory("Sneakers")}
        >
          Sneakers
        </button>

        <button
          className={activeCategory === "Watches" ? "active-him" : ""}
          onClick={() => setActiveCategory("Watches")}
        >
          Watches
        </button>

        <button
          className={activeCategory === "Grooming" ? "active-him" : ""}
          onClick={() => setActiveCategory("Grooming")}
        >
          Grooming
        </button>

      </div>

      <div className="product-grid-him">

        {filteredProducts.map((product) => (

          <div
            className="product-card-him"
            key={product.id}
          >

            <WishlistButton
              product={product}
              variant="him"
            />

            {/* Yalnız şəkil kliklənəndə detail səhifəsinə keçəcək */}
            <Link to={`/product/him/${product.id}`}>

              <div className="product-image-him">
                <img
                  src={product.image}
                  alt={product.name}
                />
              </div>

            </Link>

            <h3>{product.name}</h3>

            <p className="price-him">
              ${product.price}
            </p>

            {/* Add to Basket button */}

            <button
              className={
                addedProducts.includes(product.id)
                  ? "added-btn"
                  : ""
              }
              onClick={() => {
                addToCart(product);

                setAddedProducts((prev) =>
                  prev.includes(product.id)
                    ? prev
                    : [...prev, product.id]
                );
              }}
            >
              {addedProducts.includes(product.id)
                ? "✓ Added to Basket"
                : "Add to Basket"}
            </button>

          </div>

        ))}

      </div>

    </section>
  );
};

export default FeaturedProductsHim;
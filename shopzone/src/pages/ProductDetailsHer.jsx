import "./ProductDetailsHer.css";
import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import { womenProducts } from "../data/products";

const ProductDetailsHer = () => {
  const { id } = useParams();

  const product = womenProducts.find(
    (item) => item.id === Number(id)
  );
 
  if (!product) {
    return <h2>Product not found</h2>;
  }
 const isClothing = product.category === "Dresses";
const isShoes = product.category === "Shoes";

  return (
    <>
      <Navbar />

      <section className="product-details-her">

        <div className="product-image-section-her">

          <div className="main-image-her">
            <img
              src={product.image}
              alt={product.name}
            />
          </div>

          <div className="thumbnail-gallery-her">

            <div className="thumb-her">
              <img src={product.image} alt={product.name} />
            </div>

            <div className="thumb-her">
              <img src={product.image} alt={product.name} />
            </div>

            <div className="thumb-her">
              <img src={product.image} alt={product.name} />
            </div>

          </div>

        </div>

        <div className="product-info-her">

          <span className="product-category-her">
            {product.category}
          </span>

          <h1>{product.name}</h1>

          <div className="rating-her">
            ⭐⭐⭐⭐⭐
            <span>(128 Reviews)</span>
          </div>

          <h2>${product.price}</h2>

          <p>
            Discover our {product.name}, carefully selected
            to bring elegance, quality and style to your
            everyday look.
          </p>

         {product.category !== "Perfume" && (
  <div className="colors-her">
    <h4>Color</h4>

    <div className="color-list-her">
      <span className="pink-her"></span>
      <span className="black-her"></span>
      <span className="white-her"></span>
    </div>
  </div>
)}
          {(isClothing || isShoes) && (
    <div className="sizes-her">
        <h4>Size</h4>

        {isClothing ? (
            <>
                <button>XS</button>
                <button>S</button>
                <button>M</button>
                <button>L</button>
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
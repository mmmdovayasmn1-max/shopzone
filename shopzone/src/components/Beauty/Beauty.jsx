import "../../styles/ProductCard.css";
import Navbar from "../Navbar/Navbar";

import { womenProducts } from "../../data/products";
import ProductCard from "../ProductCard/ProductCard";
function Beauty() {
  const beauty = womenProducts.filter(
    (product) => product.category === "Perfume"
  );

  return (
    <>
      <Navbar />

      <div className="product-page women-category-page">
        <div className="product-grid">
          {beauty.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              gender="women"
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default Beauty;

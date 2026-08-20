import "../../styles/ProductCard.css";
import Navbar from "../Navbar/Navbar";

import { useProducts } from "../../context/ProductContext";
import ProductCard from "../ProductCard/ProductCard";
function Beauty() {
  const { products } = useProducts();
  const beauty = products.filter(
    (product) => product.gender === "her" && product.category === "Perfume"
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

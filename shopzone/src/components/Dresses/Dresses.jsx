import "../../styles/ProductCard.css";
import Navbar from "../Navbar/Navbar";
import ProductCard from "../ProductCard/ProductCard";
import { womenProducts } from "../../data/products";

function Dresses() {
  const dresses = womenProducts.filter(
    (product) => product.category === "Dresses"
  );

  return (
    <>
      <Navbar />

      <div className="product-page women-category-page">
        <div className="product-grid">
          {dresses.map((product) => (
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

export default Dresses;

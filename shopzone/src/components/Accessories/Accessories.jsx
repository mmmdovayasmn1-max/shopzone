import "../../styles/ProductCard.css";
import Navbar from "../Navbar/Navbar";
import ProductCard from "../ProductCard/ProductCard";
import { womenProducts } from "../../data/products";

function Accessories() {
  const accessories = womenProducts.filter(
    (product) => product.category === "Accessories"
  );

  return (
    <>
      <Navbar />

      <div className="product-page women-category-page">
        <div className="product-grid">
          {accessories.map((product) => (
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

export default Accessories;

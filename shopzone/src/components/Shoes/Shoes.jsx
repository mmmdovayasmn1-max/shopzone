import "../../styles/ProductCard.css";
import Navbar from "../Navbar/Navbar";
import ProductCard from "../ProductCard/ProductCard";
import { womenProducts } from "../../data/products";

function Shoes() {
  const shoes = womenProducts.filter(
    (product) => product.category === "Shoes"
  );

  return (
    <>
      <Navbar />

      <div className="product-page women-category-page">
        <div className="product-grid">
          {shoes.map((product) => (
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

export default Shoes;

import "../../styles/ProductCard.css";
import Navbar from "../Navbar/Navbar";
import ProductCard from "../ProductCard/ProductCard";
import { useProducts } from "../../context/ProductContext";

function Dresses() {
  const { products } = useProducts();
  const dresses = products.filter(
    (product) => product.gender === "her" && product.category === "Dresses"
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

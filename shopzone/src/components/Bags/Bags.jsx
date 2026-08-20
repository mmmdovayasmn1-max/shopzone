import "../../styles/ProductCard.css";
import Navbar from "../Navbar/Navbar";
import ProductCard from "../ProductCard/ProductCard";
import { useProducts } from "../../context/ProductContext";

function Bags() {
  const { products } = useProducts();
  const bags = products.filter(
    (product) => product.gender === "her" && product.category === "Bags"
  );

  return (
    <>
      <Navbar />

      <div className="product-page women-category-page">
        <div className="product-grid">
          {bags.map((product) => (
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

export default Bags;

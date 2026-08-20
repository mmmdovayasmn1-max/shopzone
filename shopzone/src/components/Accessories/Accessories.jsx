import "../../styles/ProductCard.css";
import Navbar from "../Navbar/Navbar";
import ProductCard from "../ProductCard/ProductCard";
import { useProducts } from "../../context/ProductContext";

function Accessories() {
  const { products } = useProducts();
  const accessories = products.filter(
    (product) => product.gender === "her" && product.category === "Accessories"
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

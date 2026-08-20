import "../../styles/ProductCard.css";
import Navbar from "../Navbar/Navbar";
import ProductCard from "../ProductCard/ProductCard";
import { useProducts } from "../../context/ProductContext";

function Shoes() {
  const { products } = useProducts();
  const shoes = products.filter(
    (product) => product.gender === "her" && product.category === "Shoes"
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

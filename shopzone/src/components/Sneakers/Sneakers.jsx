import "../../styles/ProductCard.css";
import NavbarHim from "../Navbar/NavbarHim";
import { useProducts } from "../../context/ProductContext";
import ProductCard from "../ProductCard/ProductCard";
function Sneakers() {

  const { products } = useProducts();
  const sneakers = products.filter(
    (product) => product.gender === "him" && product.category === "Sneakers"
  );

  return (
    <>
      <NavbarHim />

      <div className="product-page">
        
<div className="product-grid">
  {sneakers.map((product) => (
    <ProductCard
      key={product.id}
      product={product}
      gender="him"
    />
  ))}
</div>
      </div>
    </>
  );
}

export default Sneakers;

import "../../styles/ProductCard.css";
import NavbarHim from "../Navbar/NavbarHim";
import { menProducts } from "../../data/products";
import ProductCard from "../ProductCard/ProductCard";
function Grooming() {
  
  const grooming = menProducts.filter(
    (product) => product.category === "Grooming"
  );

  return (
    <>
      <NavbarHim />

      <div className="product-page">
    

        <div className="product-grid">
  {grooming.map((product) => (
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

export default Grooming;
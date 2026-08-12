import "../../styles/ProductCard.css";
import NavbarHim from "../Navbar/NavbarHim";
import { menProducts } from "../../data/products";
import ProductCard from "../ProductCard/ProductCard";
function Sneakers() {

  const sneakers = menProducts.filter(
    (product) => product.category === "Sneakers"
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
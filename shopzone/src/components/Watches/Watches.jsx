import "../../styles/ProductCard.css";
import NavbarHim from "../Navbar/NavbarHim";
import { menProducts } from "../../data/products";
import ProductCard from "../ProductCard/ProductCard";
function Watches() {

  const watches = menProducts.filter(
    (product) => product.category === "Watches"
  );

  return (
    <>
      <NavbarHim />

      <div className="product-page">
    

     <div className="product-grid">
  {watches.map((product) => (
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

export default Watches; 
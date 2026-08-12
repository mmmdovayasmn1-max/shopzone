import "../../styles/ProductCard.css";
import NavbarHim from "../Navbar/NavbarHim";
import { menProducts } from "../../data/products";
import ProductCard from "../ProductCard/ProductCard";
function AccessoriesHim() {

  const accessories = menProducts.filter(
    (product) => product.category === "Accessories"
  );

  return (
    <>
      <NavbarHim />

      <div className="product-page">
        

      <div className="product-grid">
  {accessories.map((product) => (
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

export default AccessoriesHim;
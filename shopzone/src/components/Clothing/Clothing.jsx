import "../../styles/ProductCard.css";
import NavbarHim from "../Navbar/NavbarHim";
import { menProducts } from "../../data/products";
import ProductCard from "../ProductCard/ProductCard";
function Clothing() {
  
  const clothing = menProducts.filter(
    (product) => product.category === "Clothing"
  );

  return (
    <>
      <NavbarHim />

      <div className="product-page">


        <div className="product-grid">
  {clothing.map((product) => (
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

export default Clothing;
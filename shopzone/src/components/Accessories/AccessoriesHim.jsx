import "../../styles/ProductCard.css";
import NavbarHim from "../Navbar/NavbarHim";
import { useProducts } from "../../context/ProductContext";
import ProductCard from "../ProductCard/ProductCard";
function AccessoriesHim() {

  const { products } = useProducts();
  const accessories = products.filter(
    (product) => product.gender === "him" && product.category === "Accessories"
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

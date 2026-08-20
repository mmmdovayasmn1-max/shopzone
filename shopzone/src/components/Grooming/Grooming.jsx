import "../../styles/ProductCard.css";
import NavbarHim from "../Navbar/NavbarHim";
import { useProducts } from "../../context/ProductContext";
import ProductCard from "../ProductCard/ProductCard";
function Grooming() {
  
  const { products } = useProducts();
  const grooming = products.filter(
    (product) => product.gender === "him" && product.category === "Grooming"
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

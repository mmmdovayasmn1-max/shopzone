import "../../styles/ProductCard.css";
import NavbarHim from "../Navbar/NavbarHim";
import { useProducts } from "../../context/ProductContext";
import ProductCard from "../ProductCard/ProductCard";
function Watches() {

  const { products } = useProducts();
  const watches = products.filter(
    (product) => product.gender === "him" && product.category === "Watches"
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

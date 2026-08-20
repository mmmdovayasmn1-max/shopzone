import "../../styles/ProductCard.css";
import NavbarHim from "../Navbar/NavbarHim";
import { useProducts } from "../../context/ProductContext";
import ProductCard from "../ProductCard/ProductCard";
function Clothing() {
  
  const { products } = useProducts();
  const clothing = products.filter(
    (product) => product.gender === "him" && product.category === "Clothing"
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

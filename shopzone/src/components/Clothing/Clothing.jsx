import "./Clothing.css";
import NavbarHim from "../Navbar/NavbarHim";
import { menProducts } from "../../data/products";

function Clothing() {
  const clothing = menProducts.filter(
    (product) => product.category === "Clothing"
  );

  return (
    <>
      <NavbarHim />

      <div className="clothing-page">
        <h1>Clothing</h1>

        <div className="clothing-grid">
          {clothing.map((product) => (
            <div key={product.id}>
              <img src={product.image} alt={product.name} width="200" />
              <h3>{product.name}</h3>
              <p>${product.price}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Clothing;
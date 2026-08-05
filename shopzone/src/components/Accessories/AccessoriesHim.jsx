import "./AccessoriesHim.css";
import NavbarHim from "../Navbar/NavbarHim";
import { menProducts } from "../../data/products";

function AccessoriesHim() {
  const accessories = menProducts.filter(
    (product) => product.category === "Accessories"
  );

  return (
    <>
      <NavbarHim />

      <div className="accessories-page">
        <h1>Accessories</h1>

        <div className="accessories-grid">
          {accessories.map((product) => (
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

export default AccessoriesHim;
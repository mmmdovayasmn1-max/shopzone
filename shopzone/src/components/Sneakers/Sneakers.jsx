import "./Sneakers.css";
import NavbarHim from "../Navbar/NavbarHim";
import { menProducts } from "../../data/products";

function Sneakers() {
  const sneakers = menProducts.filter(
    (product) => product.category === "Sneakers"
  );

  return (
    <>
      <NavbarHim />

      <div className="sneakers-page">
        <h1>Sneakers</h1>

        <div className="sneakers-grid">
          {sneakers.map((product) => (
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

export default Sneakers;
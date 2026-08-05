import "./Grooming.css";
import NavbarHim from "../Navbar/NavbarHim";
import { menProducts } from "../../data/products";

function Grooming() {
  const grooming = menProducts.filter(
    (product) => product.category === "Grooming"
  );

  return (
    <>
      <NavbarHim />

      <div className="grooming-page">
        <h1>Grooming</h1>

        <div className="grooming-grid">
          {grooming.map((product) => (
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

export default Grooming;
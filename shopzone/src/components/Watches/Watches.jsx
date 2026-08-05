import "./Watches.css";
import NavbarHim from "../Navbar/NavbarHim";
import { menProducts } from "../../data/products";

function Watches() {
  const watches = menProducts.filter(
    (product) => product.category === "Watches"
  );

  return (
    <>
      <NavbarHim />

      <div className="watches-page">
        <h1>Watches</h1>

        <div className="watches-grid">
          {watches.map((product) => (
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

export default Watches; 
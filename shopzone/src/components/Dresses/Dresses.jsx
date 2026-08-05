import "./Dresses.css";
import Navbar from "../Navbar/Navbar";
import { womenProducts } from "../../data/products";

function Dresses() {
  const dresses = womenProducts.filter(
    (product) => product.category === "Dresses"
  );

  return (
    <>
      <Navbar />

      <div className="dresses-page">
        <h1>Dresses</h1>

        <div className="dresses-grid">
          {dresses.map((product) => (
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

export default Dresses;
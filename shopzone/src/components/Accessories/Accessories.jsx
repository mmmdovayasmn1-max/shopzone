import "./Accessories.css";
import Navbar from "../Navbar/Navbar";
import { womenProducts } from "../../data/products";

function Accessories() {
  const accessories = womenProducts.filter(
    (product) => product.category === "Accessories"
  );

  return (
    <>
      <Navbar />

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

export default Accessories;
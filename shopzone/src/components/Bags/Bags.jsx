import "./Bags.css";
import Navbar from "../Navbar/Navbar";
import { womenProducts } from "../../data/products";

function Bags() {
  const bags = womenProducts.filter(
    (product) => product.category === "Bags"
  );

  return (
    <>
      <Navbar />

      <div className="bags-page">
        <h1>Bags</h1>

        <div className="bags-grid">
          {bags.map((product) => (
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

export default Bags;
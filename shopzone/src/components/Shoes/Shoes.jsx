import "./Shoes.css";
import Navbar from "../Navbar/Navbar";
import { womenProducts } from "../../data/products";

function Shoes() {
  const shoes = womenProducts.filter(
    (product) => product.category === "Shoes"
  );

  return (
    <>
      <Navbar />

      <div className="shoes-page">
        <h1>Shoes</h1>

        <div className="shoes-grid">
          {shoes.map((product) => (
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

export default Shoes;
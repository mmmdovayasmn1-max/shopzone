import "./Beauty.css";
import Navbar from "../Navbar/Navbar";
import { womenProducts } from "../../data/products";

function Beauty() {
  const beauty = womenProducts.filter(
    (product) => product.category === "Perfume"
  );

  return (
    <>
      <Navbar />

      <div className="beauty-page">
        <h1>Beauty</h1>

        <div className="beauty-grid">
          {beauty.map((product) => (
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

export default Beauty;
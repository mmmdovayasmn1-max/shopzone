import { useSearchParams } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import NavbarHim from "../components/Navbar/NavbarHim";
import ProductCard from "../components/ProductCard/ProductCard";
import { useProducts } from "../context/ProductContext";
import "../styles/ProductCard.css";
import "./SearchResults.css";

function SearchResults({ gender }) {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("q")?.trim() || "";
  const isHer = gender === "her";
  const { products: allProducts } = useProducts();
  const products = allProducts.filter((product) => product.gender === (isHer ? "her" : "him"));
  const matches = products.filter((product) =>
    `${product.name} ${product.category}`.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <>
      {isHer ? <Navbar /> : <NavbarHim />}
      <main className={`search-results ${isHer ? "women-category-page" : ""}`}>
        <h1>Search results</h1>
        {query && <p className="search-summary">Results for “{query}”</p>}
        {!query ? (
          <p className="empty-search">Enter a product name to search.</p>
        ) : matches.length ? (
          <div className="product-grid">
            {matches.map((product) => (
              <ProductCard key={product.id} product={product} gender={isHer ? "women" : "him"} />
            ))}
          </div>
        ) : (
          <p className="empty-search">No products matched your search.</p>
        )}
      </main>
    </>
  );
}

export default SearchResults;

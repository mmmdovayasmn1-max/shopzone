import "./Navbar.css";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { useState } from "react";

function Navbar() {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const handleSearch = (event) => {
    event.preventDefault();
    const value = query.trim();
    if (value) navigate(`/search/her?q=${encodeURIComponent(value)}`);
  };

  return (
    <nav className="navbar">
      <div className="navbar-top">
        <div className="logo">
          <h2>🛍️ ShopZone</h2>
          <span>For Her</span>
        </div>
        <form className="search-box" onSubmit={handleSearch}>
          <input
            type="text"
            placeholder="Search for products..."
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            aria-label="Search women's products"
          />
          <button type="submit" aria-label="Search">🔍</button>
        </form>
        <div className="nav-icons">
          <Link to="/wishlist" aria-label="Wishlist">🤍</Link>
          <Link to="/cart" aria-label="Cart">🛒</Link>
          <Link to="/login?gender=her" aria-label="Profile">👤</Link>
        </div>
      </div>
      <div className="navbar-menu">
        <NavLink to="/home">Home</NavLink>
        <NavLink to="/new-arrivals-her">New Arrivals</NavLink>
        <NavLink to="/dresses">Dresses</NavLink>
        <NavLink to="/shoes">Shoes</NavLink>
        <NavLink to="/bags">Bags</NavLink>
        <NavLink to="/beauty">Beauty</NavLink>
        <NavLink to="/accessories">Accessories</NavLink>
      </div>
    </nav>
  );
}

export default Navbar;

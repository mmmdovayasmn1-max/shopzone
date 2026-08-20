import "./NavbarHim.css";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { useState } from "react";

function NavbarHim() {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const handleSearch = (event) => {
    event.preventDefault();
    const value = query.trim();
    if (value) navigate(`/search/him?q=${encodeURIComponent(value)}`);
  };

  return (
    <nav className="navbar-him">
      <div className="navbar-top-him">
        <div className="logo-him">
          <h2>💙 ShopZone</h2>
          <span>For Him</span>
        </div>
        <form className="search-box-him" onSubmit={handleSearch}>
          <input
            type="text"
            placeholder="Search for products..."
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            aria-label="Search men's products"
          />
          <button type="submit" aria-label="Search">🔍</button>
        </form>
        <div className="nav-icons-him">
          <Link to="/wishlist" aria-label="Wishlist">🤍</Link>
          <Link to="/cart" aria-label="Cart">🛒</Link>
         <Link to="/login?gender=him" aria-label="Login">👤</Link>
        </div>
      </div>
      <div className="navbar-menu-him">
        <NavLink to="/home-him">Home</NavLink>
        <NavLink to="/new-arrivals-him">New Arrivals</NavLink>
        <NavLink to="/clothing">Clothing</NavLink>
        <NavLink to="/sneakers">Sneakers</NavLink>
        <NavLink to="/watches">Watches</NavLink>
        <NavLink to="/grooming">Grooming</NavLink>
        <NavLink to="/accessories-him">Accessories</NavLink>
      </div>
    </nav>
  );
}

export default NavbarHim;

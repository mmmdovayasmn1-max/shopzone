import "./Navbar.css";
import { Link, NavLink } from "react-router-dom";
function Navbar() {
  return (
    <nav className="navbar">

      <div className="navbar-top">

        <div className="logo">
          <h2>🩷 ShopZone</h2>
          <span>For Her</span>
        </div>

        <div className="search-box">
          <input
            type="text"
            placeholder="Search for products..."
          />
          <button>🔍</button>
        </div>

        <div className="nav-icons">
          <span>🤍</span>
          <span>🛒</span>
          <span>👤</span>
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
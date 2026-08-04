import "./NavbarHim.css";
import { Link, NavLink } from "react-router-dom";
function NavbarHim() {
  return (
    <nav className="navbar-him">

      <div className="navbar-top-him">

        <div className="logo-him">
          <h2>💙 ShopZone</h2>
          <span>For Him</span>
        </div>

        <div className="search-box-him">
          <input
            type="text"
            placeholder="Search for products..."
          />
          <button>🔍</button>
        </div>

        <div className="nav-icons-him">
          <span>🤍</span>
          <span>🛒</span>
          <span>👤</span>
        </div>

      </div>

      <div className="navbar-menu-him">
        <NavLink to="/home-him">Home</NavLink>
        <NavLink to="/new-arrivals-him">New Arrivals</NavLink>
        <a href="#">Clothing</a>
        <a href="#">Sneakers</a>
        <a href="#">Watches</a>
        <a href="#">Grooming</a>
        <a href="#">Accessories</a>
        
        
      </div>

    </nav>
  );
}

export default NavbarHim;

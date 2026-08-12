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
          <Link to="/wishlist">🤍</Link>
          <Link to="/cart"><span>🛒</span></Link>
          <span>👤</span>
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

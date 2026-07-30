import "./Navbar.css";
import "./Navbar.css";

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
        <a href="#">New Arrivals</a>
        <a href="#">Dresses</a>
        <a href="#">Shoes</a>
        <a href="#">Bags</a>
        <a href="#">Beauty</a>
        <a href="#">Accessories</a>
        <a href="#">Deals</a>
        <a href="#">Contact</a>
      </div>

    </nav>
  );
}

export default Navbar;
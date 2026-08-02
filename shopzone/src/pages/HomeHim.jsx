
import "./HomeHim.css";
import NavbarHim from "../components/Navbar/NavbarHim";
import heroHim from "../assets/images/heroHim.png";
import ServicesHim from "../components/Services/ServicesHim";

function HomeHim() {
  return (
    <div className="home-him">
      <NavbarHim />

      <section className="hero-him">

  <img
    src={heroHim}
    alt="Hero Banner"
    className="hero-banner-him"
  />

  <div className="hero-content-him">
    <h1>
      Find Your <br />
      <span>Next Favorite.</span>
    </h1>

    <p>
      Discover premium fashion and essentials
      made for your style.
    </p>

    <div className="hero-buttons-him">
      <button className="shop-btn-him">Shop Now</button>
      <button className="deal-btn-him">Explore Deals</button>
    </div>
  </div>

</section>

      <ServicesHim />
    </div>
  );
}

export default HomeHim;
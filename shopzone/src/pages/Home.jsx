import "./Home.css";
import hero from "../assets/images/hero.png";
import Navbar from "../components/Navbar/Navbar";
import Services from "../components/Services/Services";
import FeaturedProductsHer from "../components/FeaturedProducts/FeaturedProductsHer";

function Home() {
  return (
    <div className="home">
      <Navbar/>
      <section className="hero">

        <img src={hero} alt="Hero" className="hero-banner" />

        <div className="hero-content">
          <h1>
            Find Your <br />
            <span>Next Favorite.</span>
          </h1>

          <p>
            Trendy products, best prices and a shopping
            experience you'll love.
          </p>

          <div className="hero-buttons">
            <button className="shop-btn">Shop Now</button>
            <button className="deal-btn">Explore Deals</button>
          </div>
        </div>

      </section>
     <Services/>
     <FeaturedProductsHer />
    
    </div>
  );
}

export default Home;
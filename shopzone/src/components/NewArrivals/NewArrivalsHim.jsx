import "./NewArrivalsHim.css";

const NewArrivalsHim = () => {
  return (
    <section className="new-arrivals-him">

      <div className="new-header-him">
        <span className="new-badge-him">NEW ARRIVALS</span>

        <h2>Fresh Essentials</h2>

        <p>Discover the latest men's collection.</p>
      </div>

      <div className="new-grid-him">

        <div className="new-card-him">
          <span className="tag-him">NEW</span>

          <div className="new-image-him"></div>

          <h3>Black Hoodie</h3>

          <p className="price-him">$85</p>

          <button className="view-btn-him">
            View Item
          </button>
        </div>

        <div className="new-card-him">
          <span className="tag-him sale-him">-15%</span>

          <div className="new-image-him"></div>

          <h3>Running Shoes</h3>

          <p className="price-him">$110</p>

          <button className="view-btn-him">
            View Item
          </button>
        </div>

        <div className="new-card-him">
          <span className="tag-him">NEW</span>

          <div className="new-image-him"></div>

          <h3>Luxury Watch</h3>

          <p className="price-him">$220</p>

          <button className="view-btn-him">
            View Item
          </button>
        </div>

        <div className="new-card-him">
          <span className="tag-him">NEW</span>

          <div className="new-image-him"></div>

          <h3>Blue Cologne</h3>

          <p className="price-him">$95</p>

          <button className="view-btn-him">
            View Item
          </button>
        </div>

      </div>

    </section>
  );
};

export default NewArrivalsHim;
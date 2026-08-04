import "./NewArrivalsHer.css";

const NewArrivalsHer = () => {
  return (
    <section className="new-arrivals-her">

      <div className="new-header-her">
        <span className="new-badge-her">NEW ARRIVALS</span>

        <h2>Fresh Drops</h2>

        <p>Discover the latest styles picked just for you.</p>
      </div>

      <div className="new-grid-her">

        <div className="new-card-her">
          <span className="tag-her">NEW</span>

          <div className="new-image-her"></div>

          <h3>Beige Blazer</h3>

          <p className="price-her">$120</p>

          <button className="view-btn-her">
            View Item
          </button>
        </div>

        <div className="new-card-her">
          <span className="tag-her sale-her">-20%</span>

          <div className="new-image-her"></div>

          <h3>Mini Dress</h3>

          <p className="price-her">$85</p>

          <button className="view-btn-her">
            View Item
          </button>
        </div>

        <div className="new-card-her">
          <span className="tag-her">NEW</span>

          <div className="new-image-her"></div>

          <h3>White Heels</h3>

          <p className="price-her">$95</p>

          <button className="view-btn-her">
            View Item
          </button>
        </div>

        <div className="new-card-her">
          <span className="tag-her">NEW</span>

          <div className="new-image-her"></div>

          <h3>Luxury Bag</h3>

          <p className="price-her">$160</p>

          <button className="view-btn-her">
            View Item
          </button>
        </div>

      </div>

    </section>
  );
};

export default NewArrivalsHer;
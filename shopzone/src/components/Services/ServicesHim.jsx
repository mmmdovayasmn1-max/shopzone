import "./ServicesHim.css";
import { FaTruck, FaLock, FaUndoAlt, FaHeadset } from "react-icons/fa";
const ServicesHim = () => {
  return (
    <section className="services-him">

      <div className="service-him">
        <FaTruck  size={30}/>

        <div>
          <h3>Free Shipping</h3>
          <p>On orders over $50</p>
        </div>
      </div>

      <div className="service-him">
        <FaLock  size={25}/>

        <div>
          <h3>Secure Payment</h3>
          <p>100% secure checkout</p>
        </div>
      </div>

      <div className="service-him">
        <FaUndoAlt size={25}/>

        <div>
          <h3>Easy Returns</h3>
          <p>30-day return policy</p>
        </div>
      </div>

      <div className="service-him">
        <FaHeadset size={25}/>

        <div>
          <h3>24/7 Support</h3>
          <p>We're here to help</p>
        </div>
      </div>

    </section>
  );
};

export default ServicesHim;
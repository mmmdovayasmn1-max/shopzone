import "./Services.css";
import { FaTruck, FaLock, FaUndoAlt, FaHeadset } from "react-icons/fa";
const Services = () => {
  return (
    <section className="services">

      <div className="service">
        <FaTruck  size={30}/>

        <div>
          <h3>Free Shipping</h3>
          <p>On orders over $50</p>
        </div>
      </div>

      <div className="service">
        <FaLock  size={25}/>

        <div>
          <h3>Secure Payment</h3>
          <p>100% secure checkout</p>
        </div>
      </div>

      <div className="service">
        <FaUndoAlt size={25}/>

        <div>
          <h3>Easy Returns</h3>
          <p>30-day return policy</p>
        </div>
      </div>

      <div className="service">
        <FaHeadset size={25}/>

        <div>
          <h3>24/7 Support</h3>
          <p>We're here to help</p>
        </div>
      </div>

    </section>
  );
};

export default Services;
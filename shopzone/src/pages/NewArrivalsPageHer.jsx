import "./NewArrivalsPageHer.css";
import Navbar from "../components/Navbar/Navbar";
import NewArrivalsHer from "../components/NewArrivals/NewArrivalsHer";
import Footer from "../components/Footer/Footer";

function NewArrivalsPageHer() {
  return (
    <div className="new-arrivals-page-her">
      <Navbar />
      <NewArrivalsHer />
      <Footer />
    </div>
  );
}

export default NewArrivalsPageHer;
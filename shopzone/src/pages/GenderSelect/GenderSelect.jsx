import "./GenderSelect.css";
import heart from "../../assets/images/heart.png";
import bag from "../../assets/images/bag.png";
import { useNavigate } from "react-router-dom";

const GenderSelect = () => {
    const navigate = useNavigate();

const handleSelect = (theme) => {
  localStorage.setItem("theme", theme);
  navigate("/loading");
};
  return (
    <div className="gender-page">

      <div className="gender-container">

        <p className="welcome">Welcome to ShopZone</p>

        <h1>Choose Your Style</h1>

        <p className="subtitle">
          Personalize your shopping experience
        </p>

        <div className="cards">

          <div className="card female">
           <img src={heart} alt="For Her" className="icon" />
            <h2>For Her</h2>

            <p>
              Fashion • Beauty
              <br />
              Accessories • More
            </p>
            <button onClick={() => handleSelect("female")}> Select</button>
           
        
          </div>

          <div className="card male">
            <img src={bag} alt="For Him" className="icon" />
            <h2>For Him</h2>

            <p>
              Fashion • Sneakers
              <br />
              Watches • More
            </p>

            <button onClick={() => handleSelect("male")}>Select</button>
          </div>

        </div>

        <p className="bottom-text">
          ⚙️ You can change this anytime in settings
        </p>

      </div>

    </div>
  );
};

export default GenderSelect;
import "./LoadingHim.css";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const LoadingHim = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/home-him");
    }, 1500);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="loading-page-him">
      <div className="loader-him"></div>

      <h1>ShopZone</h1>

      <p>Preparing your shopping experience...</p>
    </div>
  );
};

export default LoadingHim;
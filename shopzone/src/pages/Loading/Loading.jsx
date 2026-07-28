import "./Loading.css";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Loading = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/home");
    }, 3000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="loading-page">
      <div className="loader"></div>

      <h1>ShopZone</h1>

      <p>Preparing your shopping experience...</p>
    </div>
  );
};

export default Loading;
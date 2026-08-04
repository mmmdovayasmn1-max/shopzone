import {  Routes, Route } from "react-router-dom";

import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import HomeHim from "../pages/HomeHim";
import Login from "../pages/Login";
import Register from "../pages/Register";
import NotFound from "../pages/NotFound";
import GenderSelect from "../pages/GenderSelect/GenderSelect";
import Loading from "../pages/Loading/Loading";
import LoadingHim from "../pages/Loading/LoadingHim";
import NewArrivalsPageHer from "../pages/NewArrivalsPageHer";
import NewArrivalsPageHim from "../pages/NewArrivalsPageHim";
import ProductDetailsHer from "../pages/ProductDetailsHer";
import ProductDetailsHim from "../pages/ProductDetailsHim";
function AppRouter() {
  return (
    
      <Routes>
  <Route path="/" element={<GenderSelect />} />
  <Route path="/loading" element={<Loading />} />
  <Route path="/loading-him" element={<LoadingHim />} />
  <Route path="/home" element={<Home />} />
  <Route path="/home-him" element={<HomeHim/>} />
   <Route path="/new-arrivals-her" element={<NewArrivalsPageHer />} />
   <Route path="/new-arrivals-him"element={<NewArrivalsPageHim />} />
   <Route path="/product-details-her" element={<ProductDetailsHer/>} />
   <Route path="/product-details-him" element={<ProductDetailsHim/>} />
  <Route path="/login" element={<Login />} />
  <Route path="/register" element={<Register />} />

  <Route path="*" element={<NotFound />} />
</Routes>
    
  );
}

export default AppRouter;
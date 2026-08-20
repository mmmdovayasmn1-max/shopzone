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
import Dresses from "../components/Dresses/Dresses";
import Shoes from "../components/Shoes/Shoes";
import Bags from "../components/Bags/Bags";
import Beauty from "../components/Beauty/Beauty";
import Accessories from "../components/Accessories/Accessories";
import Clothing from "../components/Clothing/Clothing";
import Sneakers from "../components/Sneakers/Sneakers";
import Watches from "../components/Watches/Watches";
import Grooming from "../components/Grooming/Grooming";
import AccessoriesHim from "../components/Accessories/AccessoriesHim";
import Cart from "../components/Cart/Cart";
import Wishlist from "../pages/Wishlist/Wishlist";
import SearchResults from "../pages/SearchResults";
import AdminProduct from "../pages/AdminProduct";
import AdminRoute from "../components/AdminRoute";
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
   <Route path="/dresses" element={<Dresses />} />
<Route path="/shoes" element={<Shoes />} />
<Route path="/bags" element={<Bags />} />
<Route path="/beauty" element={<Beauty />} />
<Route path="/accessories" element={<Accessories />} />
   <Route path="/product/her/:id" element={<ProductDetailsHer/>} />
   <Route path="/product/him/:id" element={<ProductDetailsHim/>} />
   <Route path="/clothing" element={<Clothing />} />
<Route path="/sneakers" element={<Sneakers />} />
<Route path="/watches" element={<Watches />} />
<Route path="/grooming" element={<Grooming />} />
<Route path="/accessories-him" element={<AccessoriesHim />} />
<Route path="/cart" element={<Cart />} />
<Route path="/wishlist" element={<Wishlist />} />
<Route path="/search/her" element={<SearchResults gender="her" />} />
<Route path="/search/him" element={<SearchResults gender="him" />} />
  <Route path="/login" element={<Login />} />
  <Route path="/register" element={<Register />} />
  <Route path="/admin/products/new" element={<AdminRoute><AdminProduct /></AdminRoute>} />
  <Route path="/admin" element={<AdminRoute><AdminProduct /></AdminRoute>} />

  <Route path="*" element={<NotFound />} />
</Routes>
    
  );
}

export default AppRouter;

import {  Routes, Route } from "react-router-dom";

import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import NotFound from "../pages/NotFound";
import GenderSelect from "../pages/GenderSelect/GenderSelect";
import Loading from "../pages/Loading/Loading";

function AppRouter() {
  return (
    
      <Routes>
  <Route path="/" element={<GenderSelect />} />
  <Route path="/loading" element={<Loading />} />
  <Route path="/home" element={<Home />} />

  <Route path="/login" element={<Login />} />
  <Route path="/register" element={<Register />} />

  <Route path="*" element={<NotFound />} />
</Routes>
    
  );
}

export default AppRouter;
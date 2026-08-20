import { Navigate, useLocation } from "react-router-dom";

function AdminRoute({ children }) {
  const location = useLocation();
  let user;
  try { user = JSON.parse(localStorage.getItem("user")); } catch { user = null; }

  if (!localStorage.getItem("token") || user?.role !== "admin") {
    return <Navigate to={`/login?next=${encodeURIComponent(location.pathname)}`} replace />;
  }
  return children;
}

export default AdminRoute;

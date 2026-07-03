import { Navigate, Outlet } from "react-router-dom";

export default function AdminRoute() {

  let user = null;

  const savedUser = localStorage.getItem("user");

  if (savedUser) {

    try {

      user = JSON.parse(savedUser);

    } catch (error) {

      console.log("Invalid user storage, clearing");

      localStorage.removeItem("user");
      localStorage.removeItem("token");

      return <Navigate to="/login" replace />;
    }

  }


  if (!user) {
    return <Navigate to="/login" replace />;
  }


  if (user.role !== "admin") {
    return <Navigate to="/" replace />;
  }


  return <Outlet />;
}
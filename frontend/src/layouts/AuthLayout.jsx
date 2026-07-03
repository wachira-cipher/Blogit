import { Outlet } from "react-router-dom";
import { useEffect } from "react";

export default function AuthLayout() {
  useEffect(() => {
    const preloader = document.getElementById("global-loader");
    if (preloader) preloader.remove();
  }, []);

  return (
    <div className="auth-layout">
      <Outlet />
    </div>
  );
}
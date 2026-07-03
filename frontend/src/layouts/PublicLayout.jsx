import { Outlet } from "react-router-dom";
import Header from "../components/common/Header";
import Footer from "../components/common/Footer";
import { useEffect } from "react";

export default function PublicLayout() {
  useEffect(() => {
    // ❌ REMOVE template JS (prevents crashes)
    const preloader = document.getElementById("preloader");
    if (preloader) preloader.remove();

    // Optional safety: remove scroll-top issues too
    const scrollTop = document.querySelector(".scroll-top");
    if (!scrollTop) return;

    // If you still keep template JS, guard it safely here
    // (but better to REMOVE main.js completely later)
  }, []);



  return (
    <>
      <Header />

      <main className="main">
        <Outlet />
      </main>

      <Footer />

      {/* REQUIRED by template JS */}
      <div id="preloader"></div>
    </>
  );
}